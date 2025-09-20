---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:
  # ===== HERO corto (texto blanco + 3 botones) =====
  - block: hero
    content:
      title: ""
      text: |
        <div class="max-w-4xl">
          <p class="text-white text-base md:text-lg leading-snug">
            MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
               href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
               style="background:#FFFFFF;color:#111827;">Nuestra Gobernanza</a>
            <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
               href="https://www.metadocencia.org/pdc/"
               style="background:#FFFFFF;color:#111827;">Pautas de Convivencia</a>
            <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
               href="https://www.metadocencia.org/politica_accesibilidad/"
               style="background:#FFFFFF;color:#111827;">Políticas de Accesibilidad</a>
          </div>
        </div>
    design:
      spacing:
        padding: ["0.5rem", 0, "0.5rem", 0]  # hero más bajo
        margin: [0, 0, 0, 0]
      background:
        image:
          filename: "quienessomos.jpg"
          filters: { brightness: 0.45 }
          size: cover
          position: center
        text_color_light: true
      css_style: "min-height: 28vh;"  # bajo para evitar scroll al segundo bloque

  # ===== 5 PROPUESTAS DE BLOQUES (debajo del hero) =====

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

  # ALT B — features (párrafo arriba + 3 columnas minimalistas con links-botón)
  - block: features
    id: alt-hero-b
    content:
      title: ""
      text: "MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo."
      items:
        - name: "Nuestra Gobernanza →"
          link: "https://www.metadocencia.org/proyecto/gobernanza-2022/"
        - name: "Pautas de Convivencia →"
          link: "https://www.metadocencia.org/pdc/"
        - name: "Políticas de Accesibilidad →"
          link: "https://www.metadocencia.org/politica_accesibilidad/"
    design:
      columns: 3
      css_class: "text-gray-900 dark:text-gray-100 bg-gray-50"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]

  # ALT C — cta-card banda roja (párrafo + 3 botones inline, texto blanco)
  - block: cta-card
    id: alt-hero-c
    content:
      title: ""
      text: |
        <div class="max-w-5xl">
          <p class="text-base md:text-lg leading-snug">
            MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
               href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
               style="background:#FFFFFF;color:#111827;">Nuestra Gobernanza</a>
            <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
               href="https://www.metadocencia.org/pdc/"
               style="background:#FFFFFF;color:#111827;">Pautas de Convivencia</a>
            <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
               href="https://www.metadocencia.org/politica_accesibilidad/"
               style="background:#FFFFFF;color:#111827;">Políticas de Accesibilidad</a>
          </div>
        </div>
    design:
      card:
        css_style: "background-color:#C83737;color:#FFFFFF;"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: [0, 0, "0.5rem", 0]

  # ALT D — markdown (grid 2 columnas: izquierda párrafo, derecha botones en columna)
  - block: markdown
    id: alt-hero-d
    content:
      title: ""
      text: |
        <div class="grid md:grid-cols-2 gap-5 items-start">
          <div>
            <p class="text-lg md:text-xl leading-snug">
              MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
            </p>
          </div>
          <div class="flex md:flex-col flex-wrap gap-2">
            <a class="inline-block no-underline font-semibold px-3 py-2 rounded-md text-sm text-center"
               href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
               style="background:#111827;color:#FFFFFF;">Nuestra Gobernanza</a>
            <a class="inline-block no-underline font-semibold px-3 py-2 rounded-md text-sm text-center"
               href="https://www.metadocencia.org/pdc/"
               style="background:#111827;color:#FFFFFF;">Pautas de Convivencia</a>
            <a class="inline-block no-underline font-semibold px-3 py-2 rounded-md text-sm text-center"
               href="https://www.metadocencia.org/politica_accesibilidad/"
               style="background:#111827;color:#FFFFFF;">Políticas de Accesibilidad</a>
          </div>
        </div>
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]

  # ALT E — cta-image-paragraph invertido (imagen chica izq, texto + botones der)
  - block: cta-image-paragraph
    id: alt-hero-e
    content:
      items:
        - title: ""
          image: "quienessomos.jpg"
          text: |
            <p class="text-base md:text-lg leading-snug">
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
    design:
      css_class: "text-gray-900 dark:text-gray-100"

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

  # ===== Vamos por 5 años más =====
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
        padding: ["1.25rem", 0, "1.75rem", 0]  # menos margen arriba del título

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
