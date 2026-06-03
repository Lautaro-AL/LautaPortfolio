# ALERT — Acciones manuales requeridas

Este archivo documenta todo lo que requiere intervención manual antes del deploy o para que funcione correctamente.

---

## 🔴 CRÍTICO — Formulario de contacto (EmailJS)

El componente `src/components/sections/Contact.tsx` usa EmailJS pero **no funciona sin las credenciales**.

### Pasos:
1. Crear cuenta en https://www.emailjs.com (plan gratuito: 200 emails/mes)
2. En el dashboard → **Email Services** → Add New Service → conectar Gmail u otro
3. En **Email Templates** → Create New Template con estas variables:
   - `{{from_name}}` — nombre del remitente
   - `{{from_email}}` — email del remitente
   - `{{message}}` — mensaje
   - `{{to_name}}` — tu nombre (valor fijo en el template)a
4. Copiar los IDs:
   - **Service ID** (ej: `service_abc123`)
   - **Template ID** (ej: `template_xyz789`)
   - **Public Key** (en Account → General)
5. Crear el archivo `.env.local` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=service_XXXXXXX
VITE_EMAILJS_TEMPLATE_ID=template_XXXXXXX
VITE_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXX
```

6. En Vercel (al hacer deploy): ir a **Settings → Environment Variables** y agregar las mismas 3 variables.

> `.env.local` ya está en `.gitignore` — nunca se sube al repo.

---

## 🔴 CRÍTICO — Rutas de assets en Hero.tsx

El archivo `src/components/sections/Hero.tsx` tiene rutas incorrectas (editadas manualmente):

| Ruta actual (INCORRECTA) | Ruta correcta |
|---|---|
| `../../public/images/profile.jpg` | `/images/profile.jpg` |
| `../../public/cv/Lautaro_Álvarez_Sanchez_CV.pdf` | `/cv/Lautaro_Álvarez_Sanchez_CV.pdf` |

**Corregir antes del deploy a Vercel.**

---

## 🔴 CRÍTICO — Ruta del CV en Navbar.tsx

Verificar que `src/components/layout/Navbar.tsx` usa `/cv/Lautaro_Álvarez_Sanchez_CV.pdf` (con tilde y nombre completo).

---

## 🟡 IMPORTANTE — Assets faltantes en public/

Agregar los siguientes archivos a la carpeta `public/` antes del deploy:

| Archivo | Ruta destino |
|---|---|
| Foto de perfil | `public/images/profile.jpg` |
| CV en PDF | `public/cv/Lautaro_Álvarez_Sanchez_CV.pdf` |
| Imagen proyecto P3 API | `public/images/projects/p3-api.jpg` (opcional) |
| Imagen HUELLAS | `public/images/projects/huellas.jpg` (opcional) |
| Imagen Full Stack Frontend | `public/images/projects/obligatorio2.jpg` (opcional) |

> Las imágenes de proyectos son opcionales — las cards muestran gradientes si no hay imagen.

---

## 🟡 IMPORTANTE — LinkedIn URL

Verificar que tu LinkedIn real sea `linkedin.com/in/lautaro-alvarez-sanchez`.
Si es diferente, buscar y reemplazar en:
- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/layout/Footer.tsx`

---

## 🟢 DEPLOY — Checklist final

- [ ] Corregir rutas de Hero.tsx (ver arriba)
- [ ] Agregar foto y CV a `public/`
- [ ] Crear `.env.local` con credenciales de EmailJS
- [ ] `npm run build` sin errores
- [ ] Push al repo de GitHub
- [ ] Conectar repo en Vercel
- [ ] Agregar variables de entorno en Vercel dashboard
- [ ] Verificar deploy en Vercel preview URL
