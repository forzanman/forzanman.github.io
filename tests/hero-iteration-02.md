# Iteración 2 – Validación del hero unificado

## Cobertura visual avanzada
- [ ] Escritorio 1440px: hero ocupa viewport inicial con fondo animado visible y menú rápido no superpuesto.
- [ ] Tablet 1024px (retrato y paisaje): tipografía refluye sin cortes, acciones alineadas y sticky del menú no invade el hero.
- [ ] Móvil 390px: hero-eyebrow permanece legible, botones apilados sin desbordar y la imagen mantiene el efecto de desplazamiento gradual.

## Interacción y offset
- [ ] Enlaces del menú rápido respetan offset del header fijo tras la unificación del hero.
- [ ] CTA “Reservar diagnóstico inicial” aterriza en `#contacto` sin ocultar el título de la sección.
- [ ] CTA “Explorar artículos” aterriza en `#blog` manteniendo el desplazamiento suave.

## Accesibilidad reforzada
- [ ] Focus visible en los botones del hero y en cada enlace del menú rápido (inspeccionar con teclado).
- [ ] Lectura con lector de pantalla anuncia el hero como banner único, seguido de la navegación rápida (`role="navigation"`).
- [ ] Contraste verificado con herramienta (≥4.5:1) para hero-eyebrow, título y CTA outline.

## Performance y regresiones
- [ ] Lighthouse Performance ≥ 85 en escritorio con la nueva estructura.
- [ ] Revisar consola sin errores/advertencias tras interacción con el hero y menú.
- [ ] Confirmar que la eliminación del banner previo no dejó estilos huérfanos (`.top-banner*`) en CSS.
