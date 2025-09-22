---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:

  # ===== HERO con imagen de fondo + botones + texto extra =====
  - block: hero
    id: hero-qs
    content:
      title: "Quienes somos"
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-3xl">
          MetaDocencia es una organización fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer el conocimiento en red, desde América Latina hacia el mundo.
        </p>

        <!-- Botones -->
        <div class="mt-4 flex flex-wrap gap-3">
          <a href="https://www.metadocencia.org/pdc/"
             class="inline-block no-underline font-semibold px-4 py-2 rounded-md text-base"
             style="background:#00506F;color:#FFFFFF;">
             Pautas de Convivencia
          </a>
          <a href="https://www.metadocencia.org/institucional/"
             class="inline-block no-underline font-semibold px-4 py-2 rounded-md text-base"
             style="background:#00506F;color:#FFFFFF;">
             Institucional
          </a>
        </div>

        <!-- Texto extra dentro del hero -->
        <div class="mt-3 text-white/90">
          <p class="mb-1">Lee cómo nació MetaDocencia en palabras de nuestra Co-Directora, Laura Ación.</p>
          <p class="mb-0">MetaDocencia, un proyecto con patrocinio fiscal de Code for Science &amp; Society.</p>
        </div>
    design:
      spacing:
        padding: ["1.25rem", 0, "1.25rem", 0]   # hero bajito
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
      css_style: "min-height: 32vh;"   # altura contenida para que no requiera scroll

  # ===== Vamos por 5 años más (TEXTO + VIDEO YouTube 16:9, fondo blanco) =====
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
      css_style: "background-color:#FFFFFF;color:#111827;"
      spacing:
        padding: ["1rem", 0, "1.25rem", 0]

  # ===== MetaDocencia en números (menos margen superior) =====
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
      spacing:
        padding: ["0.5rem", 0, "1.5rem", 0]

  # === PERSONAS / ORGANIZACIONES (full-bleed, sin bordes) ===
  - block: markdown
    id: personas
    content:
      title: ""
      text: |
        <!-- Wrapper full-bleed: ocupa todo el ancho del viewport -->
        <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

          <!-- Colaboradores -->
          <details class="group border-0 shadow-none bg-transparent px-4 md:px-8" open>
            <summary class="flex items-center justify-between cursor-pointer py-4">
              <span class="text-2xl font-bold">Colaboradores</span>
              <span aria-hidden="true" class="ml-4 select-none text-xl leading-none">▾</span>
            </summary>
            <div class="pb-6">
              {{< people_group group="Colaboradores" columns="7" >}}
            </div>
          </details>

          <div class="h-4 md:h-6"></div>

          <!-- Auspiciantes -->
          <details class="group border-0 shadow-none bg-transparent px-4 md:px-8">
            <summary class="flex items-center justify-between cursor-pointer py-4">
              <span class="text-2xl font-bold">Auspiciantes</span>
              <span aria-hidden="true" class="ml-4 select-none text-xl leading-none">▾</span>
            </summary>
            <div class="pb-6">
              {{< people_group group="Auspiciantes" columns="7" >}}
            </div>
          </details>

        </div>

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
