---
title: "Home"
date: 2023-10-24
type: landing
translationKey: "home"
design:
  # Espaciado por defecto entre secciones
  spacing: "6rem"

sections:
  - block: hero
    content:
      # Título en HTML para controlar tamaño/contraste
      title: '<span class="block text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Potenciemos a América Latina en el mapa de la investigación global</span>'
      # Botón personalizado más grande y visible
      text: |
        <a href="https://julianbuede.github.io/cta/"
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
        text_color_light: true   # asegura textos claros sobre el fondo

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "Quiénes somos"
          text: "MetaDocencia es una organización fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer el conocimiento en red, desde América Latina hacia el mundo."
          image: "quienesomos.jpg"
          button:
            text: "Conócenos"
            url: "https://julianbuede.github.io/quienes-somos/"
        - title: "Qué hacemos"
          text: "Trabajamos para que la producción, la comunicación y la aplicación de saberes científicos y técnicos sean globalmente equitativos."
          feature_icon: check
          features:
            - "Impulsamos infraestructura"
            - "Formamos a personas investigadoras"
            - "Construimos comunidad"
          image: "organigramaapaisado.png"
          button:
            text: "Conoce nuestros proyectos"
            url: "https://julianbuede.github.io/que-hacemos"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

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

  - block: cta-card
    content:
      title: "Apoya a la ciencia latinoamericana"
      text: "Aquí te contamos cómo"
      button:
        text: "Súmate"
        url: "https://julianbuede.github.io/cta/"
    design:
      card:
        css_class: "bg-primary-700"
        css_style: ""
---
