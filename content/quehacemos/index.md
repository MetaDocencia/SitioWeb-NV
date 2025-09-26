---
title: "Qué hacemos"
type: landing
slug: "que-hacemos"
design:
  spacing: "3rem"

sections:
  # ---------- HERO angosto (imagen de fondo + texto grande) ----------
  - block: hero
    content:
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">Potenciamos el ecosistema científico latinoamericano con infraestructura, formación y comunidad</span>'
    design:
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: [0, 0, 0, 0]
      css_class: ""
      css_style: "min-height: 20vh;"
      background:
        image:
          filename: "1naranjaazul.png"
          filters:
            brightness: 0.45
          size: cover
          position: center
          parallax: false
        text_color_light: true

  # ---------- Tres columnas por pilar (sin iconos) ----------
  - block: features
    id: pilares
    content:
      title: ""
      text: ""
      items:
        - name: "Impulsamos infraestructura"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Promovemos infraestructura científica y tecnológica que soporta la producción, gestión y reutilización de conocimiento.
            <br>
            <a href="#infra"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#00506F;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Ver más
            </a>

        - name: "Formamos capacidades"
          description: |
            <div style="height:4px;background:#C83737;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Creamos programas de aprendizaje basados en evidencia, que transforman el conocimiento en acción y fortalecen a la comunidad científica con competencias de impacto local.
            <br>
            <a href="#formacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#C83737;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Ver más
            </a>

        - name: "Construimos comunidad"
          description: |
            <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Fomentamos redes de apoyo y colaboración que trascienden disciplinas, instituciones y países, para crecer y visibilizar la ciencia desde América Latina hacia el mundo.
            <br>
            <a href="#comunidad"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#F77B20;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Ver más
            </a>
    design:
      columns: 3
      css_class: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      spacing:
        padding: ["1.5rem", 0, "1.5rem", 0]
        margin: [0, 0, 0, 0]

  # ---------- PROYECTOS DESTACADOS ----------
  - block: features
    id: destacados
    content:
      title: "Proyectos destacados"
      text: ""
      items:
        - name: "Financiamiento a iniciativas científicas"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos formación estratégica para investigadores, fortaleciendo iniciativas, capacidades y redes para mejorar el acceso a financiación internacional.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/acceso-financiacion/">Ver más →</a><br>

        - name: "Formación en Ciencia Abierta"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Con el apoyo de la NASA, diseñamos cohortes en español, pensadas para América Latina, para promover principios y herramientas de Ciencia Abierta.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/nasa-spanish//">Ver más →</a><br>

        - name: "Gobernanza"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos herramientas y asesoramiento en gobernanza para que personas y organizaciones logren mayor impacto y eficiencia.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/gobernanza-2022/">Ver más →</a><br>
    design:
      columns: 3
      css_class: "text-gray-900 dark:text-gray-100"

  # ======================
  #  SECCIÓN: INFRAESTRUCTURA (AZUL)
  # ======================
  - block: cta-card
    id: infra
    content:
      title: "Impulsamos Infraestructura"
      text: "Promovemos infraestructura científica y tecnológica que soporta la producción, gestión y reutilización de conocimiento"
    design:
      spacing:
        padding: ["1rem", 0, "0.25rem", 0]
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#00506F;color:#FFFFFF;"

  - block: features
    id: infra-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Catalyst"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Facilitamos la accesibilidad y la utilidad de la infraestructura en la nube para comunidades globales.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/catalyst/">Ver más →</a>

        - name: "Contextualización"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Desarrollamos recursos de calidad en español a partir de material originalmente publicado en otro idioma.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/contextualizacion-/">Ver más →</a>

        - name: "Ciencia y Datos Abiertos en Bioimagen"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Liderado por LABI y MetaDocencia, este proyecto impulsa infraestructura, formación y redes en +10 países. Buscamos posicionar a América Latina como referente global en innovación y colaboración científica.
            
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://julianbuede.github.io/blog/second-brain/">Ver más →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Proyecto a incubar</span>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "X"
          description: "proyectos financiados"
        - statistic: "+200"
          description: "documentos en Zenodo"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Nicolás Wolovick"
          role: "Director UNC Supercómputo"
          text: "Participar en el proyecto Catalyst resultó muy importante para UNC Supercómputo. Aprendimos a movernos en un ecosistema de financiamiento y colaboración que nos resultaba novedoso. Conocimos y nos hicimos conocer, valoramos y nos valoraron en redes más grandes con Latinoamérica y África. El plan de montar una nube local para JupyterHub es un proyecto que sigue progresando y que tiene mucho potencial en presente y en futuro"
        - name: "Andres Olivera"
          role: "Network Manager, LABI"
          text: "Participar en Catalyst nos permitió probar y determinar la infraestructura necesaria para un ecosistema sostenible con líderes locales capacitados. Comprobamos que el acceso abierto a esta infraestructura es vital para impulsar investigaciones locales y amplificar el impacto científico regional."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECCIÓN: FORMACIÓN (ROJO)
  # ======================
  - block: cta-card
    id: formacion
    content:
      title: "Formamos capacidades"
      text: "Creamos programas de aprendizaje basados en evidencia, que transforman el conocimiento en acción y fortalecen a la comunidad científica con competencias de impacto local."
    design:
      spacing:
        padding: ["1rem", 0, "0.25rem", 0]
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#C83737;color:#FFFFFF;"

  - block: features
    id: formacion-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Formación en Ciencia Abierta"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Con el apoyo de la NASA, diseñamos cohortes en español, pensadas para América Latina, para promover principios y herramientas de Ciencia Abierta.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/nasa-spanish/">Ver más →</a>

        - name: "Formación para enseñar"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Creamos un Train-the-Trainers en español para instruir y certificar habilidades pedagógicas y prácticas a fin de para multiplicar el aprendizaje y potenciar el impacto colectivo.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/formacion-para-ensenar/">Ver más →</a>

        - name: "Cursos a medida"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Diseñamos cursos y capacitaciones a medida, adaptados a las necesidades de cada institución o comunidad, para fortalecer capacidades en ciencia abierta, análisis de datos y herramientas digitales.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/cursos-a-medida/">Ver más →</a>

        - name: "Financiamiento a iniciativas científicas"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos formación estratégica para investigadores, fortaleciendo iniciativas, capacidades y redes para mejorar el acceso a financiación internacional.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/acceso-financiacion/">Ver más →</a>    
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "94"
          description: "ediciones (388 horas)"
        - statistic: "+1500"
          description: "personas de 33 países formadas"
        - statistic: "89%"
          description: "Net Promoter Score"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Walter Sosa Escudero"
          role: "PhD in Economics, profesor e investigador"
          text: "No se pierdan esto. Es gente hiperprofesional, es buenísimo el trabajo que hacen"
        - name: "Emmanuel Iarussi"
          role: "Científico en CONICET y profesor UTDT"
          text: "El curso fue excelente. Me devolvieron el impulso de enseñar. Enseñar en línea puede ser mucho más humano de lo que podría haber imaginado"
        - name: "Marina Compagnucci"
          role: "Bióloga y colaboradora de MetaDocencia, participó en el diseño y contextualización de contenidos educativos en Ciencia Abierta de la NASA"
          text: "Trabajar con MetaDocencia es sentirse orgullosamente parte de un equipo atento, cálido, diverso, responsable y comprometido con su objetivo y con las personas que hacen a MetaDocencia. No es de extrañar la creatividad de las propuestas cuando es natural la comodidad y la tranquilidad del diálogo en ese espacio"
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECCIÓN: COMUNIDAD (NARANJA)
  # ======================
  - block: cta-card
    id: comunidad
    content:
      title: "Construimos comunidad"
      text: "Fomentamos redes de apoyo y colaboración que trascienden disciplinas, instituciones y países, para crecer y visibilizar la ciencia desde América Latina hacia el mundo."
    design:
      spacing:
        padding: ["1rem", 0, "0.25rem", 0]
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"

  - block: features
    id: comunidad-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Gobernanza"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos herramientas y asesoramiento en gobernanza para que personas y organizaciones logren mayor impacto y eficiencia.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/gobernanza-2022/">Ver más →</a>
        - name: "Conversatorios"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Organizamos espacios de diálogo que promueven el aprendizaje, el intercambio de experiencias y la participación, consolidando redes de colaboración y el conocimiento compartido.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://julianbuede.github.io/blog/second-brain/">Ver más →</a>
        - name: "Mapeo de Ciencia Abierta en Latinoamérica"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Repositorio colaborativo de información sobre Ciencia Abierta en español.

            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/mapeo-comunidades/">Ver más →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Proyecto a incubar</span>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "+40"
          description: "comunidades amigas y alianzas"
        - statistic: "+60"
          description: "personas que colaboran con MetaDocencia"
        - statistic: "+1070"
          description: "integrantes en la comunidad de Slack"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Andrés Kamaid"
          role: "Researcher, Institut Pasteur Montevideo — tras consultoría para Latin American Bioimaging"
          text: "I want to thank you for the work done so far. In addition to your conceptual and practical contributions, which have enabled us to make significant progress, your warmth and kindness have made this process truly enjoyable. I will miss our meetings"
        - name: "Verónica Xhardez"
          role: "Docente/Investigadora UNTREF — Investigadora CIECTI — Coordinadora Técnica, ARPHAI"
          text: "¡Cuánto aprendizaje colectivo por el camino! 🍎 Felicitaciones y gracias por ser un ámbito de coproducción, interdisciplina y cuidado mutuo"
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECCIÓN FINAL: MetaDocencia en los medios (markdown centrado)
  # ======================
  - block: markdown
    id: prensa
    content:
      text: |
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">MetaDocencia en los medios</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Conocé qué dicen de MetaDocencia en prensa y blogs.
          </p>
          <a href="https://mdnv.netlify.app/prensas"
             class="inline-block px-4 py-2 rounded-md font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900">
             Ver menciones →
          </a>
        </div>
    design:
      spacing:
        padding: ["1.25rem", "0.75rem", "1.25rem", "0.75rem"]
      css_style: "background:#F9FAFB;"
---
