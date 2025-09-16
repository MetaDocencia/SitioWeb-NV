---
title: "Home"
date: 2023-10-24
type: landing

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
          text: "TEXTO A DEFINIR. MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo."
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
        - statistic: "NN"
          description: |
            Proyectos  
            financiados
        - statistic: "+1500"
          description: |
            personas  
            formadas
        - statistic: "+1000"
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
        - name: "3 TESTIMONIOS A DEFINIR - Julio Zetter"
          role: "Coordinador en Jefe de la base de datos y hemeroteca virtual SciELO México"
          image: "juliozetter.jpeg"
          text: "No cabe más que agradecer a los instructores que hicieron posible este curso, que sin duda es la semilla de grandes frutos. Gracias por tanto MetaDocencia"
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
