---
title: "Eventos"
type: landing
slug: "eventos"
design:
  spacing: "3rem"

sections:
  - block: markdown
    id: eventos
    content:
      title: "Participación en eventos"
      text: |
        <style>
          /* Fondo suave para la sección */
          section#eventos {
            background:#F9FAFB;
          }

          /* Forzar el contenedor a ocupar todo el ancho disponible */
          section#eventos .container {
            max-width: 100%;
            width: 100%;
            padding-left: clamp(1rem, 4vw, 3rem);
            padding-right: clamp(1rem, 4vw, 3rem);
          }

          /* Grilla: 3 columnas en desktop */
          #eventos .md-eventos-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.75rem;
            align-items: stretch;
          }

          /* Tarjetas de evento */
          #eventos .md-event-card {
            background:#FFFFFF;
            border-radius:0.75rem;
            padding:1.25rem;
            box-shadow:0 10px 25px rgba(15,23,42,0.06);
            border:1px solid rgba(148,163,184,0.18);
            display:flex;
            flex-direction:column;
          }

          #eventos .md-event-card img {
            width:100%;
            height:160px;
            object-fit:cover;
            border-radius:0.75rem;
            margin-bottom:0.75rem;
          }

          #eventos .md-event-meta {
            font-size:0.85rem;
            color:#6B7280;
            margin-bottom:0.35rem;
          }

          #eventos .md-event-title {
            font-weight:600;
            color:#111827;
            font-size:1.05rem;
            margin-bottom:0.4rem;
          }

          #eventos .md-event-excerpt {
            font-size:0.95rem;
            color:#374151;
            margin-bottom:0.75rem;
          }

          #eventos .md-event-link {
            margin-top:auto;
            font-size:0.9rem;
            font-weight:600;
            color:#00506F;
            text-decoration:none;
            display:inline-flex;
            align-items:center;
          }

          #eventos .md-event-link span {
            margin-left:0.25rem;
          }

          /* 2 columnas en pantallas medianas */
          @media (max-width: 1024px) {
            #eventos .md-eventos-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          /* 1 columna en móviles */
          @media (max-width: 640px) {
            #eventos .md-eventos-grid {
              grid-template-columns: 1fr;
            }
          }
        </style>

        <div class="md-eventos-grid">

          <article class="md-event-card">
            <img src="/media/eventos/ejemplo-1.jpg" alt="Imagen descriptiva del evento 1">
            <p class="md-event-meta">Fecha del evento · Nombre de la conferencia</p>
            <h3 class="md-event-title">Título del evento 1</h3>
            <p class="md-event-excerpt">
              Breve descripción del evento 1. Reemplazar este texto por la bajada correspondiente.
            </p>
            <a href="https://enlace-al-evento-1" target="_blank" rel="noopener" class="md-event-link">
              Ver más <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article class="md-event-card">
            <img src="/media/eventos/ejemplo-2.jpg" alt="Imagen descriptiva del evento 2">
            <p class="md-event-meta">Fecha del evento · Nombre del evento</p>
            <h3 class="md-event-title">Título del evento 2</h3>
            <p class="md-event-excerpt">
              Breve descripción del evento 2. Reemplazar este texto por la bajada correspondiente.
            </p>
            <a href="https://enlace-al-evento-2" target="_blank" rel="noopener" class="md-event-link">
              Ver más <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article class="md-event-card">
            <img src="/media/eventos/ejemplo-3.jpg" alt="Imagen descriptiva del evento 3">
            <p class="md-event-meta">Fecha del evento · Nombre del evento</p>
            <h3 class="md-event-title">Título del evento 3</h3>
            <p class="md-event-excerpt">
              Breve descripción del evento 3. Reemplazar este texto por la bajada correspondiente.
            </p>
            <a href="https://enlace-al-evento-3" target="_blank" rel="noopener" class="md-event-link">
              Ver más <span aria-hidden="true">↗</span>
            </a>
          </article>

        </div>
---
::contentReference[oaicite:0]{index=0}
