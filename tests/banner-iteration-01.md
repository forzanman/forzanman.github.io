# Iteración 1 – Validación del banner y menú rápido

## Cobertura visual
- [ ] Escritorio 1440px: el banner ocupa todo el ancho, textos legibles, botones alineados.
- [ ] Tablet 1024px: gradientes sin cortes, menú rápido mantiene sticky y enlaces visibles.
- [ ] Móvil 390px: banner refluye (titulares ≤2 líneas), menú desplazable horizontalmente sin solaparse con el header.

## Interacción
- [ ] Cada enlace del menú rápido realiza scroll suave y se detiene bajo el header fijo.
- [ ] CTA “Reservar diagnóstico inicial” alcanza la sección `#contacto` sin ocultar el encabezado.
- [ ] CTA “Explorar artículos” llega a `#blog` y respeta el offset.

## Accesibilidad
- [ ] Navegación con teclado: tabulaciones recorren enlaces del banner y menú en orden lógico.
- [ ] Contraste medido (WCAG AA) para textos del banner sobre el fondo ≥ 4.5:1.
- [ ] El banner tiene `role="complementary"` y `aria-labelledby` válidos según inspector.

## Revisión de degradados y capas
- [ ] La superposición decorativa del banner no interfiere con clics (probado moviendo el ratón por toda el área).
- [ ] Sticky del menú no solapa contenido al regresar al tope (verificar con scroll arriba/abajo rápido).
