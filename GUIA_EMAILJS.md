# Guía de Configuración EmailJS

Sigue estos pasos para conectar tu formulario con tu correo personal.

## 1. Crear Servicio de Email (Service ID)
1. En tu panel de EmailJS (la imagen que subiste), haz clic en **"Add New Service"**.
2. Selecciona **Gmail** (o el proveedor que prefieras).
3. Dale clic a "Connect Account" y autoriza tu cuenta.
4. "Create Service".
5. Copia el **Service ID** (ej: `service_z3x9...`).

## 2. Crear Plantilla de Correo (Template ID)
1. En el menú izquierdo, ve a **"Email Templates"**.
2. Haz clic en **"Create New Template"**.
3. Configura el diseño del correo que te llegará a TI:
   - **Subject:** `Nueva Solicitud de Web: {{institution}}`
   - **Content:** Copia y pega este diseño básico:
     ```html
     <h3>Nuevo Contacto desde la Web</h3>
     <p><b>Nombre:</b> {{name}}</p>
     <p><b>Institución:</b> {{institution}}</p>
     <p><b>Email:</b> {{email}}</p>
     <hr>
     <p><b>Desafío Principal:</b></p>
     <blockquote style="background: #f0f0f0; padding: 10px; border-left: 4px solid #00c6be;">
       {{challenge}}
     </blockquote>
     ```
4. Guarda la plantilla ("Save").
5. Copia el **Template ID** (ej: `template_k8s2...`).

## 3. Obtener tu Llave Pública (Public Key)
1. En el menú izquierdo, ve a **"Account"** (o haz clic en tu nombre arriba a la derecha).
2. Busca la sección **"API Keys"**.
3. Copia la **Public Key** (ej: `User_29sl...`).

## 4. Configurar Variables de Entorno
Abre tu archivo `.env.local` y agrega las 3 líneas con tus datos:

```env
VITE_EMAILJS_SERVICE_ID=pegatu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=pegatu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=pegatu_public_key_aqui
```
