# 🚀 Cómo Publicar Tu Página en Línea

## Opciones Rápidas y Gratuitas

### 1. **Netlify (Recomendado - Super Fácil)**

#### Método A: Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Crea una cuenta gratis
3. Crea una carpeta con los 3 archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Arrastra la carpeta a Netlify
5. ¡Listo! Tu sitio estará en línea en segundos

#### Método B: Git (GitHub)
1. Sube tus archivos a un repositorio en GitHub
2. En Netlify: New site from Git
3. Selecciona tu repositorio
4. Click "Deploy"

**Resultado:** URL como `mi-restaurante.netlify.app`

---

### 2. **Vercel (También Muy Fácil)**

1. Ve a [vercel.com](https://vercel.com)
2. Crea cuenta con GitHub
3. Conecta tu repositorio
4. Automáticamente se despliega

**Resultado:** URL profesional

---

### 3. **GitHub Pages (Totalmente Gratis)**

1. Crea repositorio en GitHub con nombre: `username.github.io`
2. Sube tus 3 archivos
3. Entra a Settings → Pages
4. Selecciona "Deploy from branch"

**Resultado:** `https://username.github.io`

---

### 4. **Firebase Hosting (Google)**

```bash
# 1. Instala Firebase CLI
npm install -g firebase-tools

# 2. Inicia sesión
firebase login

# 3. Inicializa proyecto
firebase init hosting

# 4. Despliega
firebase deploy
```

---

## Pasos Detallados: Netlify (Opción Más Fácil)

### Paso 1: Preparar Archivos
```
tu-restaurante/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### Paso 2: Crear Cuenta en Netlify
- Visita [netlify.com](https://netlify.com)
- Click "Sign up"
- Elige "Email" o conecta con GitHub

### Paso 3: Publicar
- Arrastra tu carpeta a la zona de "Drag and drop"
- O: New site → Connect to Git → Selecciona repo → Deploy

### Paso 4: Configurar Dominio (Opcional)
- En Netlify Dashboard
- Click "Domain settings"
- Compra un dominio personalizado

---

## Dominio Personalizado ($)

### Opciones económicas:
| Proveedor | Precio Anual | URL |
|-----------|-------------|-----|
| Namecheap | $9-15 | namecheap.com |
| Google Domains | $12 | domains.google |
| GoDaddy | $10-15 | godaddy.com |
| Hostinger | $3-4 | hostinger.com |

### Conectar dominio a Netlify:
1. Compra dominio en Namecheap
2. En Netlify: Domain settings
3. Agrega tu dominio personalizado
4. Sigue instrucciones de DNS

---

## Después de Publicar

### ✅ Checklist de Publicación

- [ ] Todos los links funcionan
- [ ] Se ve bien en móvil
- [ ] Las imágenes cargan correctamente
- [ ] El formulario valida inputs
- [ ] El carrito funciona
- [ ] Velocidad de carga es buena
- [ ] SEO básico (meta tags)

### 📊 Agregar Analytics (Gratis)

**Google Analytics:**
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea cuenta
3. Copia el código de tracking
4. Pega en `</head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Optimización para Producción

### 1. Optimizar Imágenes
```bash
# Usar TinyPNG o ImageOptim
# Comprimir sin perder calidad
```

### 2. Minificar CSS y JS (Opcional)
```bash
# NPM
npm install -g minify

# Minificar
minify styles.css > styles.min.css
```

### 3. Mejorar SEO

**En `index.html` agregar:**
```html
<meta name="description" content="LUXE - Restaurante gastronómico premium">
<meta name="keywords" content="restaurante, gastronomía, lujo, comida">
<meta name="author" content="Tu Nombre">
<meta property="og:title" content="LUXE Restaurante">
<meta property="og:description" content="Experiencia gastronómica de lujo">
<meta property="og:image" content="ruta/imagen.jpg">
```

### 4. Performance

```html
<!-- Agregar en <head> -->
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

---

## Troubleshooting

### Problema: "404 Not Found"
- Verifica que los archivos estén en la carpeta correcta
- Asegúrate que el archivo principal sea `index.html`

### Problema: CSS/JS no se cargan
- Usa rutas relativas: `./styles.css` (no `./styles.css`)
- Verifica que los nombres coincidan exactamente

### Problema: Lento en móvil
- Usa DevTools → Lighthouse
- Comprime imágenes
- Reduce animaciones en móvil

### Problema: Formulario no funciona
- Necesitas un backend para procesar formularios
- Alternativa: Usa [FormSubmit.co](https://formsubmit.co) (gratis)

```html
<form action="https://formsubmit.co/tu@email.com" method="POST">
    <!-- tus inputs aquí -->
    <input type="hidden" name="_captcha" value="false">
    <button type="submit">Enviar</button>
</form>
```

---

## Próximos Pasos

### Nivel 1: Básico
- [ ] Publica con Netlify
- [ ] Personaliza el nombre
- [ ] Cambia colores
- [ ] Agrega tus fotos

### Nivel 2: Intermedio
- [ ] Compra dominio personalizado
- [ ] Agrega Google Analytics
- [ ] Mejora imágenes
- [ ] SEO básico

### Nivel 3: Avanzado
- [ ] Sistema de reservas con backend
- [ ] Integración de pagos
- [ ] Base de datos
- [ ] App móvil

---

## Herramientas Útiles

| Herramienta | Uso | Precio |
|-------------|-----|--------|
| Netlify | Hosting | Gratis |
| Vercel | Hosting | Gratis |
| GitHub Pages | Hosting | Gratis |
| Google Domains | Dominio | $12/año |
| Namecheap | Dominio | $9/año |
| Canva | Diseño | Gratis+ |
| TinyPNG | Comprimir imágenes | Gratis |
| PageSpeed Insights | Velocidad | Gratis |

---

## Comandos Útiles

```bash
# Ver localmente (requiere Python)
python -m http.server 8000

# O con Node
npx http-server

# Luego abre: http://localhost:8000
```

---

## Preguntas Finales

**P: ¿Es seguro publicar gratis?**
R: Sí, Netlify y Vercel son muy seguros

**P: ¿Tengo que pagar siempre?**
R: Solo el dominio (.com, etc.) es de pago anual

**P: ¿Puedo cambiar después?**
R: Sí, puedes actualizar en cualquier momento

**P: ¿Cuántos visitantes puedo tener?**
R: Todos los que quieras (sin límite en Netlify)

---

## 📞 Soporte

Si necesitas ayuda:
- Twitter: [@netlify](https://twitter.com/netlify)
- Discord Netlify
- Email a su equipo

---

¡Tu restaurante está listo para el mundo! 🌍

Recuerda: El código está en `c:\Users\Lairin de la rans\SERELLA\restaurante\`

