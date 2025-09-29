---
title: "Home"
date: 2023-10-24
type: landing
translationKey: "home"
design:
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: '<span class="block text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Potenciemos a América Latina en el mapa de la investigación global</span>'
      text: |
        <a href="/cta"
           class="inline-block mt-6 text-lg md:text-xl font-extrabold px-7 py-4 rounded-2xl shadow-lg no-underline
                  bg-[#C83737] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C83737]
                  text-white">
          Súmate
        </a>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      background:
        color: "navy"
        image:
          filename: "3azulrojo.png"
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false
        text_color_light: true

  # === QUIÉNES SOMOS / QUÉ HACEMOS (sin fondo gris) ===
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "Quiénes somos"
          text: "MetaDocencia es una organización fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer el conocimiento en red, desde América Latina hacia el mundo."
          image: "quienesomos.jpg"
          button:
            text: "Conócenos"
            url: "/quienes-somos"
        - title: "Qué hacemos"
          text: "Trabajamos para que la producción, la comunicación y la aplicación de saberes científicos y técnicos sean globalmente equitativos."
          feature_icon: check
          features:
            - "Impulsamos infraestructura"
            - "Formamos a personas investigadoras"
            - "Construimos comunidad"
          image: "organigramaapaisado.png"
          button:
            text: "Lee más sobre nuestros proyectos"
            url: "/que-hacemos"
    design:
      css_class: ""   # ← sin fondo gris

  - block: stats
    content:
      items:
        - statistic: "+200"
          description: |
            Documentos  
            en Zenodo
        - statistic: "+1500"
          description: |
            personas  
            formadas
        - statistic: "+1070"
          description: |
            personas en la   
            comunidad de Slack
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["1rem", 0, "1rem", 0]

  - block: testimonials
    content:
      title: ""
      text: ""
      items:
        - name: "Carly Strasser"
          role: "Directora Senior de programas de CZI, tras co-organizar el primer evento de CZI en Latinoamérica"
          text: |
            Estoy impresionada por la profesionalidad, la consideración y la amabilidad de todo el equipo de MetaDocencia. Ha sido un placer poder trabajar con todos ustedes.
        - name: "Marina Compagnucci"
          role: "Bióloga y colaboradora de MetaDocencia, participó en el diseño y contextualización de contenidos educativos en Ciencia Abierta de la NASA"
          text: |
            Trabajar con MetaDocencia es sentirse orgullosamente parte de un equipo atento, cálido, diverso, responsable y comprometido con su objetivo y con las personas que hacen a MetaDocencia. No es de extrañar la creatividad de las propuestas cuando es natural la comodidad y la tranquilidad del diálogo en ese espacio.
        - name: "Verónica Xhardez"
          role: "Docente/Investigadora UNTREF — Investigadora CIECTI — Coordinadora Técnica, ARPHAI"
          text: |
            ¡Cuánto aprendizaje colectivo por el camino! 🍎 Felicitaciones y gracias por ser un ámbito de coproducción, interdisciplina y cuidado mutuo
    design:
      spacing:
        padding: ["6rem", 0, 0, 0]
    
  # ===== Título de bloque para la comunidad =====
  - block: markdown
    id: titulo-nuestra-comunidad
    content:
      title: "Nuestra Comunidad"
      text: ""
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]

  # ===== Estilos LOCALES solo para esta página =====
  - block: markdown
    id: estilos-collapsibles
    content:
      title: ""
      text: |
        <style>
          /* Ocultar el bloque en sí mismo (no ocupa espacio) */
          section#estilos-collapsibles {
            display: contents !important;
          }

          /* ===== Título grande: "Nuestra Comunidad" ===== */
          section#titulo-nuestra-comunidad h2,
          section#titulo-nuestra-comunidad .section-heading {
            margin-top: 0 !important;
            margin-bottom: .35rem !important;
            font-size: clamp(2.2rem, 4vw, 3rem);
            line-height: 1.1;
            font-weight: 800;
          }

          /* ... resto de los estilos ... */
        </style>

  # --- Equipo y CA ---
  - block: markdown
    id: equipo-y-consejo-asesor
    content:
      title: "Equipo y Consejo Asesor"
      text: |
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Equipo y Consejo Asesor" columns=9 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

---
