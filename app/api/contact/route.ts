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

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
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
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

