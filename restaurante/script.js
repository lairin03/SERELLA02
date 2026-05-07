// ============ CARRITO ============
let carrito = [];

function toggleCart() {
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.classList.toggle('active');
}

function addToCart(element) {
    const menuItem = element.closest('.menu-item');
    const name = menuItem.querySelector('h3').textContent;
    const price = parseFloat(menuItem.dataset.price);
    
    carrito.push({ name, price, id: Date.now() });
    updateCart();
    
    // Animación
    element.style.transform = 'scale(0.8)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    cartCount.textContent = carrito.length;
    
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        totalPrice.textContent = '0';
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
    
    cartItems.innerHTML = carrito.map((item, index) => `
        <div class="cart-item">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">$${item.price}</span>
            <button onclick="removeFromCart(${index})" style="
                background: none;
                border: none;
                color: var(--accent);
                cursor: pointer;
                font-size: 1.2rem;
                padding: 0;
            ">×</button>
        </div>
    `).join('');
}

function removeFromCart(index) {
    carrito.splice(index, 1);
    updateCart();
}

// ============ FILTRADO DE MENÚ ============
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        const items = document.querySelectorAll('.menu-item');
        
        items.forEach(item => {
            if (filter === 'todos' || item.classList.contains(filter)) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ============ AGREGAR AL CARRITO ============
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        addToCart(e.target.closest('.add-cart-btn'));
    });
});

// ============ FORMULARIO DE RESERVA ============
document.getElementById('reservaForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.querySelector('.reserva-form input[type="text"]').value;
    
    // Mostrar confirmación
    alert(`¡Reserva confirmada, ${nombre}! 🎉\n\nNos veremos pronto en LUXE.\nTe enviaremos un email de confirmación.`);
    
    // Limpiar formulario
    e.target.reset();
});

// ============ ESTRELLAS ANIMADAS ============
function createStars() {
    const hero = document.querySelector('.hero');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        hero.appendChild(star);
    }
}

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item, .testimonio-card, .info-card').forEach(el => {
    observer.observe(el);
});

// ============ NAVBAR SCROLL ============
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============ CERRAR CARRITO AL HACER CLICK FUERA ============
document.addEventListener('click', (e) => {
    const cartPanel = document.getElementById('cartPanel');
    const cartBtn = document.querySelector('.cart-btn');
    
    if (!cartPanel.contains(e.target) && !cartBtn.contains(e.target)) {
        cartPanel.classList.remove('active');
    }
});

// ============ INICIALIZACIÓN ============
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    updateCart();
    
    // Agregar efectos de hover a elementos interactivos
    addHoverEffects();
    
    // Inicializar animaciones en scroll
    initScrollAnimations();
});

// ============ EFECTOS DE HOVER AVANZADOS ============
function addHoverEffects() {
    const items = document.querySelectorAll('.menu-item, .testimonio-card, .galeria-item');
    
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)';
        });
    });
}

// ============ ANIMACIONES EN SCROLL ============
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '1';
        sectionObserver.observe(section);
    });
}

// ============ EFECTO PARALLAX MEJORADO ============
window.addEventListener('scroll', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    const scrollY = window.pageYOffset;
    
    floatingCards.forEach((card, index) => {
        card.style.transform = `translateY(${scrollY * 0.1 * (index + 1)}px)`;
    });
});

// ============ CONTROL DE CANTIDAD EN CARRITO ============
function updateQuantity(id, delta) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        item.quantity = (item.quantity || 1) + delta;
        if (item.quantity <= 0) {
            carrito = carrito.filter(i => i.id !== id);
        }
        updateCart();
    }
}

// ============ EFECTO DE CLIC EN BOTONES ============
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// ============ VALIDACIÓN DE FORMULARIO ============
const inputs = document.querySelectorAll('.reserva-form input, .reserva-form textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary)';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.style.borderColor = 'rgba(0, 212, 255, 0.2)';
        }
    });
});

// ============ SONIDOS (OPCIONAL) ============
function playClickSound() {
    // Puedes descomentar esto si añades un archivo de sonido
    // const audio = new Audio('click.mp3');
    // audio.play();
}

// ============ NOTIFICACIONES DE CARRITO ============
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: #000;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: bold;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ TEMAS RESPONSIVE ============
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleResponsive(e) {
    if (e.matches) {
        // Mobile
        document.querySelector('.nav-menu').style.display = 'none';
    } else {
        // Desktop
        document.querySelector('.nav-menu').style.display = 'flex';
    }
}

mediaQuery.addListener(handleResponsive);
handleResponsive(mediaQuery);

// ============ CARGAR MÁS (PARA FUTURA EXPANSIÓN) ============
function loadMoreItems() {
    showNotification('¡Más platillos próximamente!');
}

// ============ BÚSQUEDA DE MENÚ (FUTURO) ============
function searchMenu(query) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// ============ COMPARTIR EN REDES SOCIALES ============
function shareOnSocial(platform) {
    const url = window.location.href;
    const text = 'Descubre LUXE - la mejor experiencia gastronómica 🍽️✨';
    
    let shareUrl;
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'instagram':
            showNotification('Comparte LUXE en Instagram');
            return;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// ============ ESTILOS DINÁMICOS ============
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ============ INICIALIZAR ESTILOS ============
addDynamicStyles();

// ============ DARK MODE TOGGLE ============
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('light-mode'));
}

// ============ CARGAR MODO GUARDADO ============
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('light-mode');
}

console.log('🎉 LUXE Restaurant - Script cargado correctamente');
