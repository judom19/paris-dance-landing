# Paris Dance Studio · Campaña Metamorfosis 2026 + Matrícula 2027

Proyecto estático listo para GitHub Pages. Este ZIP **no contiene `.git`**.

## Publicar en tu repositorio existente

1. Guardá una copia de respaldo de tu proyecto actual.
2. Descomprimí el ZIP, abrí la carpeta `paris-dance-landing`.
3. Copiá su contenido dentro de la carpeta **interna** que ya usa VS Code y donde `git status` funciona (sin borrar la carpeta `.git`).
4. Revisá con Live Server `index.html`, `metamorfosis.html`, `#clase-prueba`, `#matricula`, `terminos.html`.
5. Hacé una prueba real de **cada formulario** a Formspree; comprobá correo, campos y página de confirmación antes de distribuir enlaces.
6. Publicá con tu flujo `Commit & Sync`.

## Archivos nuevos

- `metamorfosis.html`: página especial para anuncios de venta de entradas.
- `js/site.js`: carrusel, filtros de horarios y validación de selección.
- `img/metamorfosis-2026-flyer.png`: afiche oficial.
- `img/metamorfosis-2026-reel.mp4`: reel oficial.
- `img/metamorfosis-reel-portada.jpg`: portada del reel.
- `img/matricula-2027-adultas.png`: promoción para nuevas alumnas.
- `img/og-metamorfosis-2026.jpg`: imagen de vista previa en redes del evento.
- `gracias.html` y `gracias-matricula.html`: páginas locales de confirmación.

## Horarios y formularios

Los formularios de adultas aceptan desde 11 años; la coordinación de Ballet Niñas de 3 a 10 años se realiza por WhatsApp, siguiendo el flujo ya establecido. Los horarios infantiles están visibles en la web y junto a ambos formularios.

- Ballet adulto: lunes y miércoles 5:00–6:00 y 6:00–7:15 p.m.; martes y jueves 8:30–9:30 p.m.; viernes 12:00–1:15 p.m.; sábados 9:00–10:15 a.m.
- Jazz adulto: martes y jueves 7:15–8:30 p.m.; viernes 1:15–2:30 p.m.; sábados 10:30–11:45 a.m.
- Ballet niñas: martes y jueves 4:30–5:30 p.m.; sábados 1:00–2:00 p.m.

Ambos formularios conservan el endpoint `https://formspree.io/f/mregenny`, con un campo oculto para diferenciarlos. El envío remoto no se ha probado con datos reales.

**Importante:** El folleto antiguo de clase de prueba con oferta de septiembre no se exhibe en la página, para evitar anunciar una promoción vencida. La pieza sigue guardada en `/img` por compatibilidad. El folleto de planes existente no fue alterado.

## Enlaces a usar después de publicar

- Venta de entradas: `https://parisdancestudio.com/metamorfosis.html`
- Matrícula: `https://parisdancestudio.com/#matricula`
- Clase de prueba: `https://parisdancestudio.com/#clase-prueba`
- Campaña matrícula 2027: `https://parisdancestudio.com/#matricula-2027`
