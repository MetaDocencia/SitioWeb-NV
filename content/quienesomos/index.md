---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:
  # === HERO (más bajo, texto ANCHO, blanco y un poco más chico) ===
  - block: hero
    content:
      title: ""
      text: |
        <div class="mx-auto w-full max-w-7xl px-2 md:px-4">
          <h1 class="text-white text-xl md:text-3xl font-extrabold tracking-tight leading-snug">
            MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
          </h1>

          <div class="mt-4 flex flex-wrap gap-3">
            <a class="inline-block no-underline font-semibold px-4 py-2 rounded-md"
               href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
               style="background:#FFFFFF;color:#111827;">
               Nuestra Gobernanza
            </a>
            <a class="inline-block no-underline font-semibold px-4 py-2 rounded-md"
               href="https://www.metadocencia.org/pdc/"
               style="background:#FFFFFF;color:#111827;">
               Pautas de Convivencia
            </a>
            <a class="inline-block no-underline font-semibold px-4 py-2 rounded-md"
               href="https://www.metadocencia.org/politica_accesibilidad/"
               style="background:#FFFFFF;color:#111827;">
               Políticas de Accesibilidad
            </a>
          </div>
        </div>
    design:
      spacing:
        padding: ["0.1rem", 0, "0.1rem", 0]
        margin: [0, 0, 0, 0]
      css_class: ""
      css_style: "min-height: 20vh;"
      background:
        image:
          filename: "quienessomos.jpg"
          filters:
            brightness: 0.35
          size: cover
          position: center
          parallax: false
        text_color_light: true

  # === CTA rojo después del hero (sin título) ===
  - block: cta-card
    id: origen-md
    content:
      title: ""
      text: "Lee cómo nació MetaDocencia en palabras de nuestra Co-Directora, Laura Ación."
      button:
        text: "Nota en nuestro blog"
        url: "https://www.metadocencia.org/post/origenmd/"
    design:
      card:
        css_class: ""
        css_style: "background-color:#C83737;color:#FFFFFF;"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: ["0.75rem", 0, "0.75rem", 0]

  # === Intro 5 años ===
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "Vamos por 5 años más"
          text: "Durante nuestros primeros 5 años tejimos lazos entre más de 2.000 profesionales de ciencia y técnica. Lo hicimos trabajando en equipo, de manera colectiva y en alianza con más de 40 comunidades. Gracias por estos primeros 5 años de aprendizaje, colaboración y crecimiento."
          image: "quienessomos.jpg"
          button:
            text: "Conócenos"
            url: "https://hugoblox.com/templates/"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  # === Stats con menos margen superior ===
  - block: stats
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
        - statistic: "+2600"
          description: "suscripciones activas a nuestro boletín"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["0.75rem", 0, "3rem", 0]

  # === PERSONAS / ORGANIZACIONES POR GRUPO ===
  - block: people
    id: equipo
    content:
      title: "Equipo y Consejo Asesor"
      text: "Personas que trabajan hoy en MetaDocencia y quienes nos asesoran."
      authors: ["Laura Ación", "Julián Buede", "jbuede"]
      start_open: true
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
    content:
      title: "Apoya a la ciencia latinoamericana"
      text: "Aquí te contamos cómo"
      button:
        text: "Súmate"
        url: "https://hugoblox.com/templates/"
    design:
      card:
        css_class: "bg-primary-700"
        css_style: ""
---
