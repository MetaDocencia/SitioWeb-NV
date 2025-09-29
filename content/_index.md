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

  # ===== Estilos LOCALES solo para esta página =====
  - block: markdown
    id: estilos-collapsibles
    content:
      title: ""
      text: |
        <style>
          /* ====== Grid 2→1, con centrado vertical solo del texto ====== */
          [data-2col] {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            align-items: stretch; /* no centra todo; dejamos que el texto se centre con su propia clase */
          }
          @media (max-width: 900px) {
            [data-2col] { grid-template-columns: 1fr; }
          }
          .mdnv-vcenter {
            display: flex;
            flex-direction: column;
            justify-content: center; /* centra verticalmente el texto */
          }
          .mdnv-text-pad {
            padding-left: clamp(.5rem, 3vw, 2rem);
            padding-right: clamp(.5rem, 3vw, 2rem);
          }

          /* Wrapper 16:9 para el iframe */
          [data-16x9] {
            position: relative;
            width: 100%;
            padding-top: 56.25%;
            border-radius: .5rem;
            overflow: hidden;
          }
          [data-16x9] iframe {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            border: 0; border-radius: .5rem;
          }

          /* ===== Colapsables (no toca tipografías globales) ===== */
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
          section#comunidades-amigas,
          section#colaboraron-con-metadocencia {
            margin-top: .25rem !important;
            padding-top: .25rem !important;
          }

          /* Reducir tamaño SOLO de los nombres bajo avatar en ESTA página */
          section#equipo-y-consejo-asesor .mdnv-people-name,
          section#colaboradores .mdnv-people-name,
          section#auspiciantes .mdnv-people-name,
          section#comunidades-amigas .mdnv-people-name,
          section#colaboraron-con-metadocencia .mdnv-people-name {
            font-size: 0.95rem !important;
          }
          @media (max-width: 640px) {
            section#equipo-y-consejo-asesor .mdnv-people-name,
            section#colaboradores .mdnv-people-name,
            section#auspiciantes .mdnv-people-name,
            section#comunidades-amigas .mdnv-people-name,
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
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Equipo y Consejo Asesor" columns=9 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboran con MetaDocencia ---
  - block: markdown
    id: colaboradores
    content:
      title: "Colaboran con MetaDocencia"
      text: |
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Colaboradores" columns=10 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Auspiciantes ---
  - block: markdown
    id: auspiciantes
    content:
      title: "Auspiciantes"
      text: |
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Auspiciantes" columns=4 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Comunidades Amigas ---
  - block: markdown
    id: comunidades-amigas
    content:
      title: "Comunidades Amigas"
      text: |
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Comunidades amigas" columns=7 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboraron con MetaDocencia ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: "Colaboraron con MetaDocencia"
      text: |
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Colaboraron con MetaDocencia" columns=7 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>


  - block: cta-card
    content:
      title: "Apoya a la ciencia latinoamericana"
      text: "Aquí te contamos cómo"
      button:
        text: "Súmate"
        url: "/cta"
    design:
      card:
        css_class: ""
        css_style: "background-color:#C83737;color:#FFFFFF;"
---
