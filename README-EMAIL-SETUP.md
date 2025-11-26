# Configuración de Email con Nodemailer

Este proyecto utiliza Nodemailer para enviar los mensajes del formulario de contacto a tu correo personal.

## Configuración

### 1. Crear archivo de variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto (junto a `package.json`) con las siguientes variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion
SMTP_FROM=tu-email@gmail.com
CONTACT_EMAIL=tu-email-personal@gmail.com
```

### 2. Configuración para Gmail

Si usas Gmail, necesitarás:

1. **Habilitar la verificación en 2 pasos** en tu cuenta de Google
2. **Generar una contraseña de aplicación**:
   - Ve a: https://myaccount.google.com/apppasswords
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Ingresa "Nautic Guard" como nombre
   - Copia la contraseña generada y úsala en `SMTP_PASS`

### 3. Configuración para otros proveedores

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Otros proveedores
Consulta la documentación de tu proveedor de email para obtener los valores correctos de SMTP.

## Variables de Entorno

- `SMTP_HOST`: Servidor SMTP (ej: smtp.gmail.com)
- `SMTP_PORT`: Puerto SMTP (587 para TLS, 465 para SSL)
- `SMTP_SECURE`: true para SSL (puerto 465), false para TLS (puerto 587)
- `SMTP_USER`: Tu dirección de email
- `SMTP_PASS`: Tu contraseña o contraseña de aplicación
- `SMTP_FROM`: Email que aparecerá como remitente (puede ser igual a SMTP_USER)
- `CONTACT_EMAIL`: Email donde recibirás los mensajes del formulario

## Seguridad

- **NUNCA** subas el archivo `.env.local` a Git (ya está en .gitignore)
- Usa contraseñas de aplicación en lugar de tu contraseña principal
- Mantén tus credenciales seguras

## Prueba

Una vez configurado, puedes probar el formulario de contacto en la sección "Presupuesto" de la web. Los mensajes se enviarán al email especificado en `CONTACT_EMAIL`.

