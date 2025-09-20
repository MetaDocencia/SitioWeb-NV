# === HERO (muy bajo, texto más chico, blanco y ancho) ===
- block: hero
  content:
    title: ""
    text: |
      <div class="mx-auto w-full max-w-7xl">
        <h1 class="text-white text-xl md:text-3xl font-extrabold tracking-tight leading-snug">
          MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo.
        </h1>

        <div class="mt-3 flex flex-wrap gap-2">
          <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
             href="https://www.metadocencia.org/proyecto/gobernanza-2022/"
             style="background:#FFFFFF;color:#111827;">
             Nuestra Gobernanza
          </a>
          <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
             href="https://www.metadocencia.org/pdc/"
             style="background:#FFFFFF;color:#111827;">
             Pautas de Convivencia
          </a>
          <a class="inline-block no-underline font-semibold px-3 py-1.5 rounded-md text-sm"
             href="https://www.metadocencia.org/politica_accesibilidad/"
             style="background:#FFFFFF;color:#111827;">
             Políticas de Accesibilidad
          </a>
        </div>
      </div>
  design:
    spacing:
      padding: ["0.25rem", 0, "0.25rem", 0]   # casi sin alto interno
      margin: [0, 0, 0, 0]
    css_style: "min-height:16vh;"             # hero muy corto
    background:
      image:
        filename: "quienessomos.jpg"
        filters: { brightness: 0.35 }
      text_color_light: true

# === CTA rojo inmediatamente debajo (sin título) ===
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
      padding: ["0.5rem", 0, "0.5rem", 0]
      margin: [0, 0, "0.5rem", 0]
