---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:
  - block: hero
    content:
      title: "Quiénes somos"
      text: "MetaDocencia es una organización sin fines de lucro fundada en 2020. Nuestra comunidad construye capacidades científicas locales para transformar la ciencia global. Hacemos crecer la ciencia en red, desde América Latina hacia el mundo."
      primary_action:
        text: "Nuestra Gobernanza"
        url: "https://www.metadocencia.org/suscripcion/"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      background:
        image:
          filename: "quienessomos.jpg"
          filters: { brightness: 0.3 }
        text_color_light: true

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "Vamos por 5 años más"
          text: "Durante nuestros primeros 5 años tejimos lazos entre más de 2,000 profesionales de ciencia y técnica. Lo hicimos trabajando en equipo, de manera colectiva y colaborando con más de 40 comunidades. Gracias por estos primeros 5 años de aprendizaje, colaboración y crecimiento. ¡Vamos por 5 años más!"
          image: "quienessomos.jpg"
          button:
            text: "Conócenos"
            url: "https://hugoblox.com/templates/"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  - block: stats
    content:
      items:
        - statistic: "+1,000"
          description: "personas en Slack"
        - statistic: "+40"
          description: "socios y patrocinadores"
        - statistic: "88"
          description: "personas contribuyen a nuestro trabajo"
        - statistic: "+6000"
          description: "personas conectadas en redes sociales"
        - statistic: "+2600"
          description: "personas suscriptas a nuestro boletín"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  # === PERSONAS / ORGANIZACIONES POR GRUPO ===

  - block: people
    id: equipo
    content:
      title: "Equipo y Consejo Asesor"
      text: "Personas que trabajan hoy en MetaDocencia y quienes nos asesoran."
      user_groups: ["Equipo y Consejo Asesor"]
      start_open: true
    design:
      columns: 5
      compact: false          # ← título visible; probá así para validar filtrado
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
