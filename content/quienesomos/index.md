# === ALT A — cta-image-paragraph (texto + imagen al lado, botones abajo del texto) ===
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

# === ALT B — features (párrafo arriba + 3 columnas minimalistas con links-botón) ===
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

# === ALT C — cta-card banda roja (párrafo + 3 botones inline, todo en blanco) ===
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

# === ALT D — markdown (grid 2 columnas: izquierda párrafo, derecha botones en lista vertical) ===
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

# === ALT E — cta-image-paragraph invertido (imagen a la izquierda en mini, texto + botones a la derecha) ===
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
