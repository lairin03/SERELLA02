# 🎨 Guía de Personalización - LUXE Restaurant

## Cómo Personalizar Tu Página

### 1. Cambiar Nombre del Restaurante

**En `index.html`:**
```html
<!-- Línea 16 - Logo -->
<span>LUXE</span>

<!-- Línea 46 - Título Hero -->
<h1 class="hero-title">LUXE</h1>

<!-- Línea 47 - Subtítulo -->
<p class="hero-subtitle">Experiencia Gastronómica de Lujo</p>
```

**En `styles.css`:**
```css
/* Línea 26 - En el logo */
.logo {
    ...
}
```

### 2. Cambiar Colores

**En `styles.css` (líneas 11-18):**
```css
:root {
    --primary: #00d4ff;      /* Color principal (cambiar aquí) */
    --secondary: #667eea;    /* Color secundario */
    --tertiary: #764ba2;     /* Color terciario */
    --dark: #0a0e27;         /* Fondo oscuro */
    --darker: #050812;       /* Fondo más oscuro */
    --light: #f0f3ff;        /* Color claro */
    --accent: #ff006e;       /* Color de acento */
    --gold: #ffd700;         /* Color oro para precios */
}
```

**Ejemplo - Cambiar a tonos verdes:**
```css
--primary: #00ff88;      /* Verde neón */
--secondary: #00cc44;    /* Verde oscuro */
--tertiary: #009933;     /* Verde aún más oscuro */
```

### 3. Modificar el Menú

**En `index.html` (busca "ENTRADAS"):**

Para agregar un nuevo platillo:
```html
<div class="menu-item entrada" data-price="200">
    <div class="item-image">🦞</div>
    <h3>Nombre del Platillo</h3>
    <p>Descripción detallada del platillo aquí</p>
    <div class="item-footer">
        <span class="price">$200</span>
        <button class="add-cart-btn"><i class="fas fa-plus"></i></button>
    </div>
</div>
```

**Atributos importantes:**
- `entrada` / `principal` / `postre` / `bebida` - Categoría
- `data-price="200"` - Precio del platillo
- Emoji o HTML en `item-image`
- `class="price"` con símbolo $

### 4. Agregar Más Categorías

**En `index.html` - Filtros (línea ~215):**
```html
<button class="filter-btn" data-filter="nuevaCategoria">Nueva</button>
```

**En HTML - Platillos:**
```html
<div class="menu-item nuevaCategoria" data-price="150">
    ...
</div>
```

### 5. Cambiar Información de Contacto

**En `index.html` (busca "CONTACTO"):**

```html
<!-- Ubicación -->
<p>Tu Dirección, 123<br>Ciudad, País</p>

<!-- Teléfono -->
<p>+xx (xxx) xxx-xxxx</p>

<!-- Email -->
<p>email@turestaurante.com</p>

<!-- Horario -->
<p>Lunes - Viernes: HH:MM - HH:MM<br>
   Sábado - Domingo: HH:MM - HH:MM</p>
```

### 6. Personalizar Testimonios

**En `index.html` (busca "TESTIMONIO"):**

```html
<div class="testimonio-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <!-- Repetir 5 veces para 5 estrellas -->
    </div>
    <p class="testimonio-text">"Tu reseña aquí"</p>
    <div class="cliente-info">
        <div class="avatar">👑</div>
        <div>
            <p class="cliente-nombre">Nombre Cliente</p>
            <p class="cliente-ciudad">Ciudad, País</p>
        </div>
    </div>
</div>
```

### 7. Cambiar Emojis

Reemplaza cualquier emoji por:
- Otros emojis: 🍕 🍔 🍜 🍱 🍣 etc.
- Imágenes: `<img src="ruta/imagen.jpg" alt="descripción">`
- Iconos de Font Awesome: `<i class="fas fa-icono"></i>`

### 8. Modificar Galería

**En `index.html` (busca "GALERÍA"):**

Cambia los gradientes:
```html
<div class="galeria-item" style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);">
```

Usa [coolors.co](https://coolors.co) o [colordot.it](https://color.hailpixel.com/) para gradientes hermosos.

### 9. Agregar Redes Sociales

**En `index.html` - Enlaces sociales:**

```html
<a href="https://facebook.com/turestaurante" class="social-icon">
    <i class="fab fa-facebook"></i>
</a>
<a href="https://instagram.com/turestaurante" class="social-icon">
    <i class="fab fa-instagram"></i>
</a>
```

[Ver iconos disponibles](https://fontawesome.com/icons)

### 10. Cambiar Fuente

**En `styles.css` (línea 21):**

```css
body {
    font-family: 'Tu Fuente', sans-serif;
}
```

**Opciones recomendadas:**
- `'Segoe UI'` - Moderno
- `'Arial'` - Clásico
- `'Georgia'` - Elegante
- `'Courier New'` - Técnico

### 11. Ajustar Espacios

**En `styles.css`:**

```css
.menu {
    padding: 6rem 2rem;  /* Aumentar/disminuir estos números */
}

.menu-grid {
    gap: 2rem;          /* Espacio entre elementos */
}
```

### 12. Modificar Animaciones

**En `script.js`:**

```javascript
// Cambiar velocidad de animación (en ms)
setTimeout(() => {
    // Código aquí
}, 300);  // Cambiar este número

// Cambiar duración de animaciones CSS (en styles.css):
transition: all 0.4s;  /* Cambiar 0.4s */
```

### 13. Agregar Nueva Sección

**Estructura básica:**
```html
<section id="nueva-seccion" class="nueva-seccion">
    <div class="section-header">
        <h2>Título</h2>
        <p>Subtítulo</p>
    </div>
    <!-- Contenido aquí -->
</section>
```

**En CSS:**
```css
.nueva-seccion {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}
```

### 14. Reemplazar con Imágenes Reales

En lugar de emojis, usa:
```html
<img src="assets/images/platillo.jpg" alt="Descripción" style="
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
">
```

### 15. Agregar Efectos de Sonido (Opcional)

**En `script.js`:**

```javascript
function playClickSound() {
    const audio = new Audio('assets/sounds/click.mp3');
    audio.play();
}

// Usar en botones:
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', playClickSound);
});
```

---

## 🎯 Atajos Rápidos

| Elemento | Ubicación | Propiedad |
|----------|-----------|-----------|
| Colores | `styles.css` línea 11 | `:root` |
| Nombre | `index.html` línea 16 | Logo |
| Menú | `index.html` línea ~215 | `.menu` |
| Espacios | `styles.css` | `padding`, `margin` |
| Fuente | `styles.css` línea 21 | `font-family` |

## 📚 Recursos Útiles

- **Emojis**: [emojipedia.org](https://emojipedia.org)
- **Gradientes**: [coolors.co](https://coolors.co)
- **Iconos**: [fontawesome.com](https://fontawesome.com)
- **Fuentes**: [fonts.google.com](https://fonts.google.com)
- **Colores**: [color.hailpixel.com](https://color.hailpixel.com/)

## 🚀 Tips Profesionales

1. **Mantén Consistencia**: Usa máximo 3 colores principales
2. **Espacios Blancos**: No lo llenes todo, déjalo respirar
3. **Tipografía**: Máximo 2-3 tipos de fuente
4. **Imágenes**: Usa imágenes de alta calidad
5. **Velocidad**: Optimiza imágenes para web
6. **Testing**: Prueba en móvil antes de publicar

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio el fondo?**
R: En `styles.css` línea 24, modifica `background`

**P: ¿Cómo agrego más platillos?**
R: Copia un `<div class="menu-item">` y modifica

**P: ¿Cómo publico en línea?**
R: Sube los archivos a Netlify, Vercel o tu hosting

**P: ¿Puedo usar bases de datos?**
R: Sí, necesitarás un backend (Node.js, Python, etc.)

---

¡Diviértete personalizando! 🎉

