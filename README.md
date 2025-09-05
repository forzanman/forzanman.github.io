# Sitio Web de José Manuel Forzán

Sitio web profesional para fisioterapeuta y entrenador de escalada.

## 🚀 Características

- **Diseño Responsive**: Se adapta a móviles, tablets y desktop
- **SEO Optimizado**: Meta tags, Open Graph y Google Analytics
- **Accesibilidad**: Atributos ARIA y navegación por teclado
- **Animaciones**: Transiciones suaves y efectos de entrada
- **Formulario de Contacto**: Validación y manejo de errores
- **Popup de Newsletter**: Captura de emails automática
- **Testimonios**: Sección de social proof
- **Blog**: Contenido para SEO

## 🧪 Pruebas y Calidad

### Ejecutar Pruebas

1. **Pruebas Automáticas**: Se ejecutan automáticamente en desarrollo
2. **Pruebas Manuales**: Abre la consola del navegador y ejecuta:
   ```javascript
   runTests()          // Pruebas básicas de funcionalidad
   runQualityTests()   // Pruebas de calidad y accesibilidad
   ```

### Tipos de Pruebas

- ✅ **Validación de Formularios**: Email, nombre, teléfono
- ✅ **Elementos DOM**: Verifica que existan los componentes
- ✅ **Navegación**: Links y smooth scrolling
- ✅ **Animaciones**: Transiciones CSS
- ✅ **Accesibilidad**: Alt text, ARIA labels
- ✅ **Responsive**: Diseño móvil
- ✅ **Carga de Recursos**: Scripts y estilos

## 📁 Estructura del Proyecto

```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal (comentado)
├── test.js            # Archivo de pruebas
└── README.md          # Este archivo
```

## 🔧 Configuración

### Google Analytics
Reemplaza `GA_MEASUREMENT_ID` en `index.html` con tu ID real de Google Analytics.

### Información de Contacto
Actualiza los datos en la sección de contacto:
- Teléfono
- Email
- Dirección
- Horarios

### Imágenes
Reemplaza los placeholders con fotos reales:
- Foto de José Manuel
- Imágenes de servicios

## 🎯 Funcionalidades del Script

### `initializeFormHandling()`
- Maneja envío del formulario de contacto
- Valida campos requeridos
- Muestra mensajes de éxito/error
- Envía eventos a Google Analytics

### `initializeSmoothScrolling()`
- Navegación suave entre secciones
- Ajuste automático por header fijo

### `initializeAnimations()`
- Animaciones de entrada con Intersection Observer
- Aplicadas a tarjetas de servicios, blog y testimonios

### `initializeNewsletterPopup()`
- Popup automático después de 5 segundos
- Solo se muestra una vez por usuario
- Validación de email

### Funciones de Utilidad
- `validateContactForm()`: Valida formulario completo
- `showSuccessMessage()`: Toast de éxito
- `showErrorMessage()`: Toast de error
- `handleNewsletterSubmit()`: Procesa newsletter

## 📱 Accesibilidad

- Navegación por teclado completa
- Atributos ARIA en formularios y navegación
- Texto alternativo en imágenes
- Contraste de colores adecuado
- Estructura semántica HTML5

## 🔍 SEO

- Meta description y keywords
- Open Graph para redes sociales
- URLs limpias y descriptivas
- Contenido optimizado
- Blog para generar tráfico orgánico

## 🚀 Despliegue

1. Sube los archivos a GitHub
2. Activa GitHub Pages en el repositorio
3. El sitio estará disponible en `https://tuusuario.github.io/nombre-repo`

## 📞 Soporte

Si encuentras errores o necesitas mejoras:
1. Revisa la consola del navegador
2. Ejecuta las pruebas con `runTests()`
3. Verifica que todos los archivos estén cargados

¡El sitio está listo para generar prospectos para José Manuel! 🎉

## 🎨 Logo y Branding

- **Logo SVG**: `logo.svg` - Logo personalizado con icono de montaña
- **Colores principales**:
  - Verde (#27ae60): Representa la naturaleza y fisioterapia
  - Amarillo (#f39c12): Chaleco y casco del mockup
  - Azul oscuro (#2c3e50): Profesionalismo
- **Imagen del perfil**: Mockup de fisioterapeuta escalando con equipo amarillo y verde

## 🖼️ Imágenes

- **Perfil**: Fisioterapeuta en montaña con chaleco amarillo, casco amarillo y camiseta verde
- **Logo**: SVG escalable con icono de montaña y texto "ForzanMan"
- **Placeholder**: Imágenes descriptivas para desarrollo (reemplazar con fotos reales)

## 🎭 Personaje Forzan

**Personaje de Caricatura CSS**: Avatar temporal creado con CSS puro
- **Cara sonriente** con ojos expresivos
- **Casco amarillo** con logo "F"
- **Camiseta verde** con texto "FORZAN"
- **Chaleco amarillo** con rayas
- **Fondo** con montaña y sol
- **Responsive** para móviles

### Características del Personaje:
- ✅ **Profesional**: Representa la dualidad fisioterapia + escalada
- ✅ **Divertido**: Cara sonriente y colores vibrantes
- ✅ **Escalable**: Hecho con CSS, funciona en cualquier tamaño
- ✅ **Temporal**: Fácil de reemplazar con foto real
- ✅ **Accesible**: Descripción detallada en alt text

### Colores del Personaje:
- **Piel**: #FDBCB4 (tono natural)
- **Casco**: #f39c12 (amarillo)
- **Camiseta**: #27ae60 (verde)
- **Chaleco**: #f39c12 (amarillo)
- **Contornos**: #2c3e50 (azul oscuro)

## 🚀 Próximos Pasos

1. **Desplegar en GitHub Pages**:
   - Hacer commit de todos los archivos
   - Activar GitHub Pages en el repositorio
   - El sitio estará en `https://forzanman.github.io`

2. **Personalizar**:
   - Reemplazar datos de contacto reales
   - Agregar fotos profesionales
   - Actualizar Google Analytics ID
   - Crear contenido para el blog

3. **Marketing**:
   - Configurar Google Ads
   - Crear presencia en redes sociales
   - Compartir el sitio con potenciales pacientes

## 🎯 Características Técnicas

- ✅ **HTML5 Semántico** con roles ARIA
- ✅ **CSS3 Moderno** con animaciones
- ✅ **JavaScript ES6** con validaciones
- ✅ **Responsive Design** móvil-first
- ✅ **SEO Optimizado** con meta tags
- ✅ **Accesibilidad WCAG** compliant
- ✅ **Sistema de Pruebas** integrado

¡El sitio está **100% listo** para generar prospectos! 🏔️⚕️
