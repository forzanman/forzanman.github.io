// Script básico para el sitio de José Manuel Forzán

// Función para manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            // Por ahora, solo mostramos un mensaje de éxito
            alert('¡Gracias por tu consulta! José Manuel se pondrá en contacto contigo pronto.');
            
            // Limpiar el formulario
            contactForm.reset();
        });
    }
    
    // Smooth scrolling para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Ajuste por el header fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación de entrada para las tarjetas de servicios
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animación a las tarjetas de servicios
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
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
    
    // Popup de newsletter al cargar la página
    setTimeout(function() {
        if (!localStorage.getItem('newsletterShown')) {
            showNewsletterPopup();
            localStorage.setItem('newsletterShown', 'true');
        }
    }, 5000); // Mostrar después de 5 segundos
    
    function showNewsletterPopup() {
        const popup = document.createElement('div');
        popup.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 400px; text-align: center;">
                    <h3>¡Recibe consejos gratuitos!</h3>
                    <p>Suscríbete para obtener ejercicios y tips de fisioterapia y escalada directamente en tu email.</p>
                    <input type="email" placeholder="Tu email" style="width: 100%; padding: 0.5rem; margin: 1rem 0; border: 1px solid #ddd; border-radius: 5px;">
                    <button onclick="subscribeNewsletter()" style="background: #27ae60; color: white; padding: 0.5rem 1rem; border: none; border-radius: 5px; cursor: pointer;">Suscribirme</button>
                    <button onclick="closePopup()" style="background: #e74c3c; color: white; padding: 0.5rem 1rem; border: none; border-radius: 5px; cursor: pointer; margin-left: 0.5rem;">Cerrar</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
    }
    
    window.subscribeNewsletter = function() {
        alert('¡Gracias por suscribirte! Recibirás nuestros consejos pronto.');
        closePopup();
    };
    
    window.closePopup = function() {
        const popup = document.querySelector('div[style*="position: fixed"]');
        if (popup) popup.remove();
    };
});
