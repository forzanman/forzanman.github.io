#!/bin/bash

# Script de despliegue para ForzanMan Website
# Uso: ./deploy.sh

echo "🚀 Iniciando despliegue de ForzanMan Website..."

# Verificar que estamos en el directorio correcto
if [ ! -f "index.html" ]; then
    echo "❌ Error: No se encuentra index.html. Ejecuta desde el directorio raíz del proyecto."
    exit 1
fi

# Agregar todos los archivos
echo "📝 Agregando archivos al repositorio..."
git add .

# Hacer commit
echo "💾 Creando commit..."
git commit -m "🚀 Despliegue completo del sitio web de José Manuel Forzán

✅ Características implementadas:
- Sitio web completo con 6 secciones
- Diseño responsive y moderno
- Personaje de caricatura Forzan
- Logo SVG personalizado
- Sistema de pruebas integrado
- SEO y accesibilidad optimizados
- Formularios con validación
- Animaciones y efectos visuales

🎨 Branding:
- Colores: Verde (#27ae60), Amarillo (#f39c12), Azul (#2c3e50)
- Logo con icono de montaña
- Personaje representativo de fisioterapia + escalada

🧪 Calidad:
- Código comentado y estructurado
- Pruebas automáticas
- Documentación completa
- Listo para producción"

# Hacer push
echo "⬆️ Subiendo cambios a GitHub..."
git push origin main

# Verificar estado
echo "📊 Estado del despliegue:"
git status

echo ""
echo "🎉 ¡Despliegue completado!"
echo "🌐 El sitio estará disponible en: https://forzanman.github.io"
echo ""
echo "📋 Próximos pasos:"
echo "1. Activar GitHub Pages en el repositorio"
echo "2. Verificar que el sitio carga correctamente"
echo "3. Actualizar información de contacto"
echo "4. Configurar Google Analytics"
echo "5. Crear campaña de Google Ads"
