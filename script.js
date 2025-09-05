/**
 * Script principal para el sitio web de José Manuel Forzán
 * Incluye funcionalidades de formulario, navegación, animaciones y popup de newsletter
 */

// Función principal que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado correctamente'); // Log para debugging

    // Inicializar todas las funcionalidades
    initializeFormHandling();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeNewsletterPopup();

    // Asegurar CTA del hero
    (function ensureHeroCTA() {
        const cta = document.querySelector('.cta-button[href="#contacto"]');
        if (!cta) return;
        cta.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('#contacto');
            if (target) scrollToWithOffset(target);
        }, { passive: false });
    })();

    // Sombra del header al hacer scroll
    (function addHeaderShadowOnScroll(){
        const header = document.querySelector('header');
        if (!header) return;
        const onScroll = () => {
            if (window.scrollY > 10) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    })();
});

/**
 * Maneja el envío del formulario de contacto
 * Incluye validación básica y manejo de errores
 */
function initializeFormHandling() {
    const contactForm = document.querySelector('.contact-form');

    if (!contactForm) {
        console.warn('Formulario de contacto no encontrado');
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validación adicional del formulario
        if (!validateContactForm(contactForm)) {
            return;
        }

        try {
            // Aquí iría la lógica para enviar el formulario a un servidor
            // Por ahora, simulamos el envío
            showSuccessMessage('¡Gracias por tu consulta! José Manuel se pondrá en contacto contigo pronto.');

            // Limpiar el formulario después del envío
            contactForm.reset();

            // Enviar evento a Google Analytics si está configurado
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'engagement',
                    'event_label': 'contact_form'
                });
            }
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            showErrorMessage('Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo.');
        }
    });
}

/**
 * Valida el formulario de contacto
 * @param {HTMLFormElement} form - El formulario a validar
 * @returns {boolean} - True si es válido, false si no
 */
function validateContactForm(form) {
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Validar nombre
    if (name.length < 2) {
        showErrorMessage('Por favor, ingresa un nombre válido.');
        return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showErrorMessage('Por favor, ingresa un email válido.');
        return false;
    }

    // Validar teléfono (opcional pero si se ingresa, debe ser válido)
    if (phone && phone.length < 9) {
        showErrorMessage('Por favor, ingresa un teléfono válido.');
        return false;
    }

    // Validar mensaje
    if (message.length < 10) {
        showErrorMessage('Por favor, describe tu consulta con más detalle.');
        return false;
    }

    return true;
}

/**
 * Inicializa el smooth scrolling para los enlaces de navegación
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const targetSection = document.querySelector(href);
            if (targetSection) {
                e.preventDefault();
                scrollToWithOffset(targetSection);
            }
        });
    });
}

/**
 * Scroll suave con compensación por header fijo
 * @param {Element} el - Elemento destino
 */
function scrollToWithOffset(el) {
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 70;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Inicializa las animaciones de entrada para elementos
 */
function initializeAnimations() {
    // Configuración del Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aplicar animación de entrada
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Dejar de observar el elemento después de la animación
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar animación a las tarjetas de servicios
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        // Estado inicial: oculto y desplazado
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Aplicar animación a los posts del blog
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(post);
    });

    // Aplicar animación a los testimonios
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(20px)';
        testimonial.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(testimonial);
    });
}

/**
 * Inicializa el popup de newsletter
 */
function initializeNewsletterPopup() {
    // Mostrar popup después de 5 segundos, solo si no se ha mostrado antes
    setTimeout(function() {
        if (!localStorage.getItem('newsletterShown')) {
            showNewsletterPopup();
            localStorage.setItem('newsletterShown', 'true');
        }
    }, 5000);
}

/**
 * Muestra el popup de newsletter
 */
function showNewsletterPopup() {
    const popup = document.createElement('div');
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-labelledby', 'newsletter-title');

    popup.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 400px; text-align: center; position: relative;">
                <button onclick="closePopup()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; cursor: pointer;" aria-label="Cerrar popup">&times;</button>
                <h3 id="newsletter-title">¡Recibe consejos gratuitos!</h3>
                <p>Suscríbete para obtener ejercicios y tips de fisioterapia y escalada directamente en tu email.</p>
                <form onsubmit="handleNewsletterSubmit(event)">
                    <input type="email" id="newsletter-email" placeholder="Tu email" required style="width: 100%; padding: 0.5rem; margin: 1rem 0; border: 1px solid #ddd; border-radius: 5px;" aria-label="Email para newsletter">
                    <button type="submit" style="background: #27ae60; color: white; padding: 0.5rem 1rem; border: none; border-radius: 5px; cursor: pointer;">Suscribirme</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    // Enfocar el input del email para accesibilidad
    setTimeout(() => {
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput) emailInput.focus();
    }, 100);
}

/**
 * Maneja el envío del formulario de newsletter
 * @param {Event} e - Evento de submit
 */
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showErrorMessage('Por favor, ingresa un email válido.');
        return;
    }

    // Aquí iría la lógica para enviar el email a un servicio de newsletter
    showSuccessMessage('¡Gracias por suscribirte! Recibirás nuestros consejos pronto.');
    closePopup();
}

/**
 * Muestra un mensaje de éxito
 * @param {string} message - Mensaje a mostrar
 */
function showSuccessMessage(message) {
    // Crear un toast o alerta mejorada
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10001;
        max-width: 300px;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 5000);
}

/**
 * Muestra un mensaje de error
 * @param {string} message - Mensaje a mostrar
 */
function showErrorMessage(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10001;
        max-width: 300px;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 5000);
}

// Funciones globales para el popup (accesibles desde HTML)
window.subscribeNewsletter = handleNewsletterSubmit;
window.closePopup = function() {
    const popup = document.querySelector('div[role="dialog"]') || document.querySelector('div[style*="position: fixed"]');
    if (popup) popup.remove();
};
