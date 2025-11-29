import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured. Please check your .env.local file.');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact the administrator.',
          details: 'SMTP credentials are missing. Check server logs for more information.'
        },
        { status: 500 }
      );
    }

    // Trim whitespace from credentials (common issue)
    const smtpUser = process.env.SMTP_USER.trim();
    const smtpPass = process.env.SMTP_PASS.trim();
    const smtpHost = (process.env.SMTP_HOST || 'smtp.gmail.com').trim();
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');

    // Validate credentials format
    if (!smtpUser.includes('@')) {
      console.error('SMTP_USER does not appear to be a valid email address');
      return NextResponse.json(
        { 
          error: 'Invalid email configuration',
          details: 'SMTP_USER must be a valid email address. Check your .env.local file.'
        },
        { status: 500 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Add debug logging in development
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
    });

    // Verify connection before sending (helps catch auth errors early)
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('SMTP connection verification failed:', verifyError);
      if (verifyError.code === 'EAUTH' || verifyError.responseCode === 535) {
        return NextResponse.json(
          { 
            error: 'Email authentication failed',
            details: 'Invalid email credentials. For Gmail: 1) Enable 2-Step Verification, 2) Generate an App Password at https://myaccount.google.com/apppasswords, 3) Use the App Password (16 characters) in SMTP_PASS, NOT your regular password. See README-EMAIL-SETUP.md for detailed instructions.'
          },
          { status: 500 }
        );
      }
      throw verifyError; // Re-throw if it's a different error
    }

    // Email content
    const mailOptions = {
      from: (process.env.SMTP_FROM || smtpUser).trim(),
      to: (process.env.CONTACT_EMAIL || smtpUser).trim(),
      subject: `Nueva solicitud de contacto - Nautic Guard - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
            Nueva Solicitud de Contacto - Nautic Guard
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Información del Cliente</h3>
            
            <p style="margin: 10px 0;">
              <strong>Nombre:</strong> ${name}
            </p>
            
            <p style="margin: 10px 0;">
              <strong>Email:</strong> 
              <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
            </p>
            
            ${phone ? `
            <p style="margin: 10px 0;">
              <strong>Teléfono:</strong> 
              <a href="tel:${phone}" style="color: #1e40af;">${phone}</a>
            </p>
            ` : ''}
            
            <p style="margin: 10px 0;">
              <strong>Mensaje:</strong>
            </p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #1e3a8a; margin-top: 10px; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Este email fue enviado desde el formulario de contacto de Nautic Guard.</p>
            <p>Fecha: ${new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'long' })}</p>
          </div>
        </div>
      `,
      text: `
Nueva Solicitud de Contacto - Nautic Guard

Información del Cliente:
- Nombre: ${name}
- Email: ${email}
${phone ? `- Teléfono: ${phone}` : ''}

Mensaje:
${message}

---
Este email fue enviado desde el formulario de contacto de Nautic Guard.
Fecha: ${new Date().toLocaleString('es-ES')}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Handle specific authentication errors
    if (error.code === 'EAUTH' || error.responseCode === 535) {
      return NextResponse.json(
        { 
          error: 'Email authentication failed',
          details: 'Invalid email credentials. Please check your SMTP_USER and SMTP_PASS in .env.local. For Gmail, make sure you are using an App Password, not your regular password. See README-EMAIL-SETUP.md for instructions.'
        },
        { status: 500 }
      );
    }
    
    // Handle connection errors
    if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      return NextResponse.json(
        { 
          error: 'Could not connect to email server',
          details: 'Please check your SMTP_HOST and SMTP_PORT settings in .env.local'
        },
        { status: 500 }
      );
    }
    
    // Generic error
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

