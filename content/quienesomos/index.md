---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:

  # ALT A — cta-image-paragraph (texto + imagen al lado, botones debajo del texto)
  - block: cta-image-paragraph
    id: alt-hero-a
    content:
      items:
        - title: ""
          text: |
            <p class="text-lg md:text-xl leading-snug">
              MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
                 href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
                 style="background:#111827;color:#FFFFFF;">Nuestra Gobernanza</a>
              <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
                 href="https://www.metadocencia.org/pdc/"
                 style="background:#111827;color:#FFFFFF;">Pautas de Convivencia</a>
              <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
                 href="https://www.metadocencia.org/politica_accesibilidad/"
                 style="background:#111827;color:#FFFFFF;">Políticas de Accesibilidad</a>
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

  # === Vamos por 5 años más — texto (1 col) + video (2 col), fondo blanco ===
  - block: features
    id: solutions
    content:
      title: "Vamos por 5 años más"
      items:
        - name: ""
          description: |
            <div class="mx-auto">
              <p class="text-base md:text-lg">
                Durante nuestros primeros 5 años tejimos lazos entre más de 2.000 profesionales de ciencia y técnica. Lo hicimos trabajando en equipo, de manera colectiva y en alianza con más de 40 comunidades. Gracias por estos primeros 5 años de aprendizaje, colaboración y crecimiento.
              </p>
            </div>
        - name: ""
          description: |
            <div class="rounded-lg overflow-hidden">
              {{< youtube Mcq0-4cyGKQ >}}
            </div>
    design:
      columns: 2
      css_class: "split-1-2 bg-white text-gray-900 dark:text-gray-100"
      css_style: "max-width:80rem;margin-left:auto;margin-right:auto;"
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
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["1.25rem", 0, "1.75rem", 0]

  # ===== PERSONAS / ORGANIZACIONES =====

  - block: people
    id: equipo
    content:
      title: "Equipo"
      text: "Personas que trabajan hoy en MetaDocencia."
      user_groups: ["Equipo"]
      start_open: true
    design:
      columns: 5
      compact: false
      css_class: "people-md"

  - block: people
    id: consejo-asesor
    content:
      title: "Consejo Asesor"
      text: "Personas que orientan estratégicamente nuestro trabajo."
      user_groups: ["Consejo Asesor"]
      start_open: false
    design:
      columns: 5
      compact: false
      css_class: "people-md"

  - block: people
    id: auspiciantes
    content:
      title: "Auspiciantes"
      text: "Organizaciones que apoyan y hacen posible nuestro trabajo."
      user_groups: ["Auspiciantes"]
      start_open: false
    design:
      columns: 7
      compact: false
      css_class: "people-sm"

  - block: people
    id: colaboradores
    content:
      title: "Colaboradores"
      text: "Personas que trabajan de forma externa con nuestros proyectos."
      user_groups: ["Colaboradores"]
      start_open: false
    design:
      columns: 6
      compact: false
      css_class: "people-md"

  - block: people
    id: colaboraron
    content:
      title: "Colaboraron con MetaDocencia"
      text: "Personas que contribuyeron anteriormente a MetaDocencia."
      user_groups: ["Colaboraron con MetaDocencia"]
      start_open: false
    design:
      columns: 6
      compact: false
      css_class: "people-sm"

  - block: people
    id: trabajamos-con
    content:
      title: "Trabajamos con"
      text: "Otras organizaciones con las que co-creamos y articulamos."
      user_groups: ["Trabajamos con"]
      start_open: false
    design:
      columns: 7
      compact: false
      css_class: "people-sm"

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
