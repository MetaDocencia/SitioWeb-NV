---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:

  # ALT A — cta-image-paragraph (título + texto + imagen al lado, botones azules más grandes)
  - block: cta-image-paragraph
    id: alt-hero-a
    content:
      items:
        - title: "Quiénes somos"
          text: |
            <p class="text-lg md:text-xl leading-snug">
              MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
            </p>
            <div class="mt-4 flex flex-wrap gap-3">
              <a class="inline-block no-underline font-semibold px-4 py-2 rounded-md text-base"
                 href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
                 style="background:#00506F;color:#FFFFFF;">Nuestra Gobernanza</a>
              <a class="inline-block no-underline font-semibold px-4 py-2 rounded-md text-base"
                 href="https://www.metadocencia.org/pdc/"
                 style="background:#00506F;color:#FFFFFF;">Pautas de Convivencia</a>
              <a class="inline-block no-underline font-semibold px-4 py-2 rounded-md text-base"
                 href="https://www.metadocencia.org/politica_accesibilidad/"
                 style="background:#00506F;color:#FFFFFF;">Políticas de Accesibilidad</a>
            </div>
          image: "quienessomos.jpg"
    design:
      css_class: "text-gray-900 dark:text-gray-100"
      css_style: "align-items:center;"

  # ===== Banda roja: "Lee cómo nació..." =====
  - block: cta-card
    id: origen
    content:
      title: ""
      text: "Lee cómo nació MetaDocencia en palabras de nuestra Co-Directora, Laura Ación."
      button:
        text: "Nota en nuestro blog"
        url: "https://www.metadocencia.org/post/origenmd/"
    design:
      card:
        css_class: "text-white"
        css_style: "background-color:#C83737;color:#FFFFFF;"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: [0, 0, "0.5rem", 0]

  # ===== Vamos por 5 años más (TEXTO + VIDEO YouTube 16:9) =====
  - block: markdown
    id: solutions
    content:
      title: "Vamos por 5 años más"
      text: |
        <div class="grid md:grid-cols-2 gap-6 items-start">
          <!-- Columna izquierda: texto -->
          <div>
            <p>
              Durante nuestros primeros 5 años tejimos lazos entre más de 2.000 profesionales de ciencia y técnica. Lo hicimos trabajando en equipo, de manera colectiva y en alianza con más de 40 comunidades. Gracias por estos primeros 5 años de aprendizaje, colaboración y crecimiento.
            </p>
          </div>

          <!-- Columna derecha: video embed responsivo -->
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
      # Fondo blanco (también en modo oscuro)
      css_style: "background-color:#FFFFFF;color:#111827;"
      spacing:
        padding: ["1rem", 0, "1.25rem", 0]

  # ===== MetaDocencia en números =====
  - block: stats
    id: numeros
    content:
      title: "MetaDocencia en números"
      items:
        - statistic: "+40"
          description: "alianzas y patrocinadores"
        - statistic: "88"
          description: "personas colaboran con MetaDocencia"
        - statistic: "+1,070"
          description: "integrantes en Slack"
        - statistic: "+6,000"
          description: "personas conectadas en redes sociales"
        - statistic: "+2,600"
          description: "suscripciones activas a nuestro boletín"
    design:
      # Menos margen superior
      spacing:
        padding: ["0.5rem", 0, "1.5rem", 0]

  # ===== PERSONAS / ORGANIZACIONES =====

  # --- Colaboran con MetaDocencia ---
  - block: people
    title: "Colaboran con MetaDocencia"
    id: colaboran
    content:
      title: "Colaboran con MetaDocencia"
      text: ""
      user_groups: ["Colaboradores"]
      start_open: true
    design:
      columns: 7
      compact: false
      css_class: "people-naked people-7col"

  # --- Auspiciantes ---
  - block: people
    title: "Auspiciantes"
    id: auspiciantes
    content:
      title: "Auspiciantes"
      text: "Organizaciones que apoyan y hacen posible nuestro trabajo."
      user_groups: ["Auspiciantes"]
      start_open: false
    design:
      columns: 7
      compact: false
      css_class: "people-naked people-7col"

  # CTA final
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
