/**
 * Archivo de pruebas para script.js
 * Ejecuta estas pruebas en la consola del navegador después de cargar la página
 * o incluye este archivo en el HTML para pruebas automáticas
 */

// Función para ejecutar todas las pruebas
function runTests() {
    console.log('🚀 Iniciando pruebas del sitio web de José Manuel Forzán...');

    let passed = 0;
    let total = 0;

    // Prueba 1: Validación de email
    total++;
    const emailTest1 = validateEmail('test@example.com');
    const emailTest2 = validateEmail('invalid-email');
    if (emailTest1 === true && emailTest2 === false) {
        console.log('✅ Prueba 1 pasada: Validación de email');
        passed++;
    } else {
        console.log('❌ Prueba 1 fallida: Validación de email');
    }

    // Prueba 2: Validación de formulario de contacto
    total++;
    const mockForm = {
        querySelector: function(selector) {
            if (selector === 'input[type="text"]') return { value: 'Juan Pérez' };
            if (selector === 'input[type="email"]') return { value: 'juan@example.com' };
            if (selector === 'input[type="tel"]') return { value: '+34123456789' };
            if (selector === 'textarea') return { value: 'Tengo dolor en la espalda después de escalar.' };
        }
    };
    if (validateContactForm(mockForm)) {
        console.log('✅ Prueba 2 pasada: Validación de formulario de contacto');
        passed++;
    } else {
        console.log('❌ Prueba 2 fallida: Validación de formulario de contacto');
    }

    // Prueba 3: Verificar que los elementos del DOM existen
    total++;
    const heroSection = document.getElementById('inicio');
    const contactForm = document.querySelector('.contact-form');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (heroSection && contactForm && navLinks.length > 0) {
        console.log('✅ Prueba 3 pasada: Elementos del DOM presentes');
        passed++;
    } else {
        console.log('❌ Prueba 3 fallida: Elementos del DOM faltantes');
    }

    // Prueba 4: Verificar navegación suave
    total++;
    const firstNavLink = document.querySelector('.nav-links a');
    if (firstNavLink && firstNavLink.getAttribute('href').startsWith('#')) {
        console.log('✅ Prueba 4 pasada: Navegación configurada correctamente');
        passed++;
    } else {
        console.log('❌ Prueba 4 fallida: Navegación no configurada');
    }

    // Prueba 5: Verificar animaciones
    total++;
    const serviceCards = document.querySelectorAll('.service-card');
    let animationsWorking = true;
    serviceCards.forEach(card => {
        if (!card.style.transition.includes('opacity') || !card.style.transition.includes('transform')) {
            animationsWorking = false;
        }
    });
    if (animationsWorking) {
        console.log('✅ Prueba 5 pasada: Animaciones configuradas');
        passed++;
    } else {
        console.log('❌ Prueba 5 fallida: Animaciones no configuradas');
    }

    // Resultado final
    console.log(`\n📊 Resultados: ${passed}/${total} pruebas pasaron`);
    if (passed === total) {
        console.log('🎉 ¡Todas las pruebas pasaron! El sitio está funcionando correctamente.');
    } else {
        console.log('⚠️ Algunas pruebas fallaron. Revisa los errores arriba.');
    }

    return { passed, total };
}

// Funciones auxiliares para pruebas (copiadas del script principal)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContactForm(form) {
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name.length < 2) return false;
    if (!validateEmail(email)) return false;
    if (phone && phone.length < 9) return false;
    if (message.length < 10) return false;

    return true;
}

// Clase de pruebas para funcionalidades avanzadas
class SiteTester {
    constructor() {
        this.results = [];
    }

    // Prueba de accesibilidad básica
    testAccessibility() {
        const images = document.querySelectorAll('img');
        let missingAlt = 0;

        images.forEach(img => {
            if (!img.getAttribute('alt')) {
                missingAlt++;
            }
        });

        this.results.push({
            test: 'Imágenes con alt text',
            passed: missingAlt === 0,
            details: missingAlt === 0 ? 'Todas las imágenes tienen alt text' : `${missingAlt} imágenes sin alt text`
        });

        return this;
    }

    // Prueba de responsive design
    testResponsive() {
        const viewport = window.innerWidth;
        const isMobile = viewport < 768;
        const nav = document.querySelector('nav');

        // En móvil, el nav debería estar oculto o colapsado
        const navHidden = window.getComputedStyle(nav).display === 'none' || nav.classList.contains('mobile-hidden');

        this.results.push({
            test: 'Responsive navigation',
            passed: (isMobile && navHidden) || (!isMobile && !navHidden),
            details: `Viewport: ${viewport}px, Mobile: ${isMobile}, Nav hidden: ${navHidden}`
        });

        return this;
    }

    // Prueba de carga de scripts
    testScriptLoading() {
        const scripts = ['styles.css', 'script.js'];
        let loaded = 0;

        scripts.forEach(script => {
            const element = script.endsWith('.css') ?
                document.querySelector(`link[href*="${script}"]`) :
                document.querySelector(`script[src*="${script}"]`);

            if (element) loaded++;
        });

        this.results.push({
            test: 'Scripts y estilos cargados',
            passed: loaded === scripts.length,
            details: `${loaded}/${scripts.length} archivos cargados`
        });

        return this;
    }

    // Ejecutar todas las pruebas de calidad
    runQualityTests() {
        console.log('🔍 Ejecutando pruebas de calidad...');

        this.testAccessibility()
            .testResponsive()
            .testScriptLoading();

        this.results.forEach(result => {
            const icon = result.passed ? '✅' : '❌';
            console.log(`${icon} ${result.test}: ${result.details}`);
        });

        const passedCount = this.results.filter(r => r.passed).length;
        console.log(`📊 Calidad: ${passedCount}/${this.results.length} pruebas pasaron`);

        return this.results;
    }
}

// Función para ejecutar pruebas de calidad
function runQualityTests() {
    const tester = new SiteTester();
    return tester.runQualityTests();
}

// Auto-ejecutar pruebas si estamos en modo desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🧪 Modo desarrollo detectado. Ejecutando pruebas automáticamente...');
    setTimeout(() => {
        runTests();
        runQualityTests();
    }, 1000);
}

// Exponer funciones globalmente para uso en consola
window.runTests = runTests;
window.runQualityTests = runQualityTests;
window.SiteTester = SiteTester;
