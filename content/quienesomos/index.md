---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:
  # ===== HERO con imagen de fondo + botones centrados =====
  - block: hero
    id: hero-qs
    content:
      title: "Quienes somos"
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto">
          MetaDocencia es una organización fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer el conocimiento en red, desde América Latina hacia el mundo.
        </p>

        <!-- Botones centrados (3) -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <a href="/institucional"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Institucional</a>
          <a href="/institucional#vision"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Visión y Misión</a>
          <a href="/institucional#valores"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Valores</a>
        </div>

        <div class="mt-4 space-y-2 text-center">
          <p class="text-white/95 text-base md:text-lg">
            <a href="https://mdnv.netlify.app/post/" class="underline font-semibold text-white">Lee cómo nació MetaDocencia</a> en palabras de nuestra Co-Directora, Laura Ación.
          </p>
          <p class="text-white/95 text-base md:text-lg">
            MetaDocencia es un proyecto con patrocinio fiscal de <a href="https://www.codeforsociety.org/" class="underline font-semibold text-white">Code for Science &amp; Society</a>.
          </p>
        </div>
    design:
      spacing:
        padding: ["0.5rem", 0, "0.5rem", 0]
        margin: [0, 0, "0.5rem", 0]
      background:
        image:
          filename: "quienessomos.jpg"
          filters:
            brightness: 0.35
          size: cover
          position: center
          parallax: false
        text_color_light: true
      css_style: "min-height: 24vh;"

  # ===== Vamos por 5 años más (texto + video) =====
  - block: markdown
    id: solutions
    content:
      title: "Vamos por 5 años más"
      text: |
        <div class="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <p>
              Durante nuestros primeros 5 años tejimos lazos entre más de 2.000 profesionales de ciencia y técnica. Lo hicimos trabajando en equipo, de manera colectiva y en alianza con más de 40 comunidades. Gracias por estos primeros 5 años de aprendizaje, colaboración y crecimiento.
            </p>
          </div>
          <div class="relative w-full" style="padding-top:56.25%;">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/Mcq0-4cyGKQ"
              title="MetaDocencia - 5 años"
              loading="lazy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
    design:
      css_style: "background-color:#FFFFFF;color:#111827;"
      spacing:
        padding: ["2rem", 0, "1.25rem", 0]

  # ===== MetaDocencia en números =====
  - block: stats
    id: numeros
    content:
      title: "MetaDocencia en números"
      items:
        - statistic: "+40"
          description: "alianzas y patrocinadores"
        - statistic: "+60"
          description: "personas colaboran con MetaDocencia"
        - statistic: "+1,070"
          description: "integrantes en Slack"
        - statistic: "+6,000"
          description: "personas conectadas en redes sociales"
        - statistic: "+2,600"
          description: "suscripciones activas a nuestro boletín"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["0.25rem", 0, "0.25rem", 0]

  # ===== Estilos LOCALES solo para esta página =====
  - block: markdown
    id: estilos-collapsibles
    content:
      title: ""
      text: |
        <style>
          /* Flecha y comportamiento del colapsable (no toca tipografías) */
          .mdnv-collapsible > summary::-webkit-details-marker { display: none; }
          .mdnv-collapsible > summary::after {
            content: "▾";
            margin-left: .5rem;
            display: inline-block;
            transition: transform .15s ease;
          }
          .mdnv-collapsible[open] > summary::after { transform: rotate(180deg); }

          /* Márgenes del propio colapsable (contenido) */
          .mdnv-collapsible { margin-top: .25rem; margin-bottom: .65rem; }
          .mdnv-collapsible[open] { margin-bottom: 1rem; }

          /* Reducir espacio ANTES de cada título colapsable */
          section#equipo-y-consejo-asesor,
          section#colaboradores,
          section#auspiciantes,
          section#colaboraron-con-metadocencia {
            margin-top: .25rem !important;
            padding-top: .25rem !important;
          }

          /* === Reducir tamaño SOLO de los nombres bajo avatar en ESTA página === */
          section#equipo-y-consejo-asesor .mdnv-people-name,
          section#colaboradores .mdnv-people-name,
          section#auspiciantes .mdnv-people-name,
          section#colaboraron-con-metadocencia .mdnv-people-name {
            font-size: 0.95rem !important;  /* ~15px si base=16px */
          }
          @media (max-width: 640px) {
            section#equipo-y-consejo-asesor .mdnv-people-name,
            section#colaboradores .mdnv-people-name,
            section#auspiciantes .mdnv-people-name,
            section#colaboraron-con-metadocencia .mdnv-people-name {
              font-size: 0.9rem !important;
            }
          }
        </style>

  # --- Equipo y CA ---
  - block: markdown
    id: equipo-y-consejo-asesor
    content:
      title: "Equipo y Consejo Asesor"
      text: |
        {{< collapsible open=true summary="Mostrar/ocultar" >}}
        {{< people_list group="Equipo y Consejo Asesor" columns=9 gapx="8rem" gapy="3rem" >}}
        {{< /collapsible >}}

  # --- Colaboran con MetaDocencia ---
  - block: markdown
    id: colaboradores
    content:
      title: "Colaboran con MetaDocencia"
      text: |
        {{< collapsible open=false summary="Mostrar/ocultar" >}}
        {{< people_list group="Colaboradores" columns=10 gapx="8rem" gapy="3rem" >}}
        {{< /collapsible >}}

  # --- Auspiciantes ---
  - block: markdown
    id: auspiciantes
    content:
      title: "Auspiciantes"
      text: |
        {{< collapsible open=false summary="Mostrar/ocultar" >}}
        {{< people_list group="Auspiciantes" columns=4 gapx="8rem" gapy="3rem" >}}
        {{< /collapsible >}}

  # --- Colaboraron con MetaDocencia ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: "Colaboraron con MetaDocencia"
      text: |
        {{< collapsible open=false summary="Mostrar/ocultar" >}}
        {{< people_list group="Colaboradores" columns=10 gapx="8rem" gapy="3rem" >}}
        {{< /collapsible >}}

  # ===== CTA final =====
  - block: cta-card
    id: apoya
    content:
      title: "Apoya a la ciencia latinoamericana"
      text: "Aquí te contamos cómo"
      button:
        text: "Súmate"
        url: "https://www.metadocencia.org/contacto/"
    design:
      card:
        css_class: "bg-primary-700"
        css_style: ""
---
