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

  # ===== Estilos locales: acordeones + tipografías de people_list =====
  - block: markdown
    id: people-accordion-styles
    content:
      title: ""
      text: |
        <style>
          /* ——— Acordeones (details/summary) ——— */

          /* Menos separación entre acordeones */
          details.md-acc { margin: .125rem 0 !important; }
          details.md-acc[open] { margin: .125rem 0 1rem !important; }

          /* Título del desplegable (Ej: Equipo y Consejo Asesor) en negrita y con menos margen superior */
          details.md-acc > summary {
            font-weight: 700 !important;     /* negrita */
            margin-top: .25rem !important;   /* menos margen superior */
            line-height: 1.25 !important;
          }
          /* Ícono/flechita conserva peso normal */
          details.md-acc > summary span:last-child { font-weight: 400 !important; }

          /* Quitar margen de la primera sección de acordeón */
          section#equipo-y-consejo-asesor { margin-top: .25rem !important; }
          section#equipo-y-consejo-asesor .container { padding-top: 0 !important; }

          /* ——— Nombres de perfiles más pequeños (solo dentro de las grillas de people_list) ——— */
          section#equipo-y-consejo-asesor .grid .font-semibold,
          section#colaboradores .grid .font-semibold,
          section#auspiciantes .grid .font-semibold,
          section#colaboraron-con-metadocencia .grid .font-semibold {
            font-size: 0.9rem !important;
            line-height: 1.2 !important;
            font-weight: 700 !important;
          }
        </style>

  # --- Equipo y Consejo Asesor ---
  - block: markdown
    id: equipo-y-consejo-asesor
    content:
      title: ""
      text: |
        <details class="md-acc" open>
          <summary class="flex items-center justify-between cursor-pointer select-none">
            <span>Equipo y Consejo Asesor</span>
            <span>▾</span>
          </summary>
          <div class="pt-2">
            {{< people_list group="Equipo y Consejo Asesor" columns=5 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboran con MetaDocencia ---
  - block: markdown
    id: colaboradores
    content:
      title: ""
      text: |
        <details class="md-acc">
          <summary class="flex items-center justify-between cursor-pointer select-none">
            <span>Colaboran con MetaDocencia</span>
            <span>▾</span>
          </summary>
          <div class="pt-2">
            {{< people_list group="Colaboradores" columns=8 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Auspiciantes ---
  - block: markdown
    id: auspiciantes
    content:
      title: ""
      text: |
        <details class="md-acc">
          <summary class="flex items-center justify-between cursor-pointer select-none">
            <span>Auspiciantes</span>
            <span>▾</span>
          </summary>
          <div class="pt-2">
            {{< people_list group="Auspiciantes" columns=7 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboraron con MetaDocencia ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: ""
      text: |
        <details class="md-acc">
          <summary class="flex items-center justify-between cursor-pointer select-none">
            <span>Colaboraron con MetaDocencia</span>
            <span>▾</span>
          </summary>
          <div class="pt-2">
            {{< people_list group="Colaboradores" columns=8 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

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
