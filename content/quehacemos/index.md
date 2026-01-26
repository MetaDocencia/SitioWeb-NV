---
title: "Qué hacemos"
type: landing
slug: "que-hacemos"
design:
  spacing: "3rem"

sections:
  # ---------- HERO (con alto acotado como Home) ----------
  - block: hero
    id: hero-que-hacemos
    content:
      title: <span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">Qué hacemos</span>
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto">
          Fortalecemos el ecosistema científico latinoamericano con infraestructura, formación y comunidad
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]
        margin: [0, 0, 0, 0]
      css_class: "hero-max-bounded"
      css_style: ""
      background:
        image:
          filename: "quienessomos.jpg"
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false
        text_color_light: true

  # ---------- PILARES ----------
  - block: features
    id: pilares
    content:
      items:
        - name: "Impulsamos infraestructura"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Promovemos infraestructura científica y tecnológica que soporta la producción, gestión y reutilización de conocimiento.
            <br>
            <a href="#infra"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#00506F;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Proyectos
            </a>
        - name: "Formamos capacidades"
          description: |
            <div style="height:4px;background:#C83737;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Creamos programas de aprendizaje basados en evidencia, que transforman el conocimiento en acción y fortalecen a la comunidad científica con competencias de impacto local.
            <br>
            <a href="#formacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#C83737;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Proyectos
            </a>
        - name: "Construimos comunidad"
          description: |
            <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Fomentamos redes de apoyo y colaboración que trascienden disciplinas, instituciones y países, para crecer y visibilizar la ciencia desde América Latina hacia el mundo.
            <br>
            <a href="#comunidad"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#F77B20;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Proyectos
            </a>
    design:
      columns: 3
      css_class: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"

  # ---------- PROYECTOS DESTACADOS ----------
  - block: features
    id: destacados
    content:
      title: "Proyectos destacados"
      items:
        - name: "Cómo obtener financiamiento para iniciativas científicas"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos formación estratégica para investigadores, fortaleciendo capacidades y redes para mejorar el acceso a financiación internacional.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/acceso-financiacion/">Ver más →</a>
        - name: "Formación en Ciencia Abierta"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Con el apoyo de la NASA, diseñamos cohortes en español, pensadas para América Latina, para promover principios y herramientas de Ciencia Abierta.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/nasa-spanish/">Ver más →</a>
        - name: "Gobernanza comunitaria"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos herramientas y asesoramiento en gobernanza para que personas y organizaciones logren mayor impacto y eficiencia.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/gobernanza-2022/">Ver más →</a>
    design:
      columns: 3

  # ======================
  #  SECCIÓN: INFRA (AZUL) — usa shortcode cta_fullwidth
  # ======================
  - block: markdown
    id: infra
    content:
      text: |
        {{< cta_fullwidth
            id="infra"
            title="Impulsamos infraestructura"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        Promovemos infraestructura científica y tecnológica que soporta la producción, gestión y reutilización de conocimiento.
        {{</ cta_fullwidth >}}

  - block: features
    id: infra-proyectos
    content:
      items:
        - name: "Proyecto Catalyst"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Facilitamos la accesibilidad y la utilidad de la infraestructura  de cómputo en la nube para comunidades globales de biociencias.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/catalyst/">Ver más →</a>
        - name: "Contextualización"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Desarrollamos recursos de calidad en español a partir de material originalmente publicado en otro idioma.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/contextualizacion/">Ver más →</a>
        - name: "Revisión abierta y equitativa"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Empoderamos redes latinoamericanas para promover la revisión por pares abierta y equitativa de preprints y conjuntos de datos académicos.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/revision-abierta/">Ver más →</a><br>
        - name: "Procesamiento de datos abiertos"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Buscamos garantizar el acceso a computación de alto rendimiento (HPC) para redes de investigación nacionales y regionales de Latinoamérica.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/datosabiertos-latam/">Ver más →</a><br>
    design:
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "85.000+"
          description: "palabras contextualizadas"
        - statistic: "200+"
          description: "documentos en Zenodo"
        - statistic: "10"
          description: "comunidades latinoamericanas acompañadas desde Catalyst"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Nicolás Wolovick"
          role: "Director UNC Supercómputo"
          text: "Participar en el proyecto Catalyst resultó muy importante para UNC Supercómputo. Aprendimos a movernos en un ecosistema de financiamiento y colaboración que nos resultaba novedoso. Conocimos y nos hicimos conocer, valoramos y nos valoraron en redes más grandes con Latinoamérica y África. El plan de montar una nube local para JupyterHub es un proyecto que sigue progresando y que tiene mucho potencial en presente y en futuro."
        - name: "Andrés Olivera"
          role: "Network Manager, LABI"
          text: "Participar en Catalyst nos permitió probar y determinar la infraestructura necesaria para un ecosistema sostenible con líderes locales capacitados. Comprobamos que el acceso abierto a esta infraestructura es vital para impulsar investigaciones locales y amplificar el impacto científico regional."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECCIÓN: FORMACIÓN (ROJO) — usa shortcode cta_fullwidth
  # ======================
  - block: markdown
    id: formacion
    content:
      text: |
        {{< cta_fullwidth
            id="formacion"
            title="Formamos capacidades"
            bg="#C83737"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        Creamos programas de aprendizaje basados en evidencia, que transforman el conocimiento en acción y fortalecen a la comunidad científica con competencias de impacto local.
        {{</ cta_fullwidth >}}

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
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/nasa-spanish/">Ver más →</a>

        - name: "Formación para enseñar"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Creamos un Train-the-Trainers en español para instruir y certificar habilidades pedagógicas y prácticas a fin de multiplicar el aprendizaje y potenciar el impacto colectivo.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/formacion-para-formar/">Ver más →</a>

        - name: "Cursos a medida"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Diseñamos cursos y capacitaciones a medida, adaptados a las necesidades de cada institución o comunidad, para fortalecer capacidades en ciencia abierta, análisis de datos y herramientas digitales.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/cursos-a-medida/">Ver más →</a>

        - name: "Cómo obtener financiamiento para iniciativas científicas"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos formación estratégica para investigadores, fortaleciendo capacidades y redes para mejorar el acceso a financiación internacional.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/acceso-financiacion/">Ver más →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "97"
          description: "ediciones (396 horas)"
        - statistic: "1.600+"
          description: "personas de 34 países formadas"
        - statistic: ">85%"
          description: "Net Promoter Score"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Marina Compagnucci"
          role: "Bióloga y colaboradora de MetaDocencia, participó en el diseño y contextualización de contenidos educativos en Ciencia Abierta de la NASA"
          text: "Trabajar con MetaDocencia es sentirse orgullosamente parte de un equipo atento, cálido, diverso, responsable y comprometido con su objetivo y con las personas que hacen a MetaDocencia. No es de extrañar la creatividad de las propuestas cuando es natural la comodidad y la tranquilidad del diálogo en ese espacio."
        - name: "Walter Sosa Escudero"
          role: "PhD in Economics, profesor e investigador"
          text: "No se pierdan esto. Es gente hiperprofesional, es buenísimo el trabajo que hacen."
        - name: "Emmanuel Iarussi"
          role: "Científico en CONICET y profesor UTDT"
          text: "El curso fue excelente. Me devolvieron el impulso de enseñar. Enseñar en línea puede ser mucho más humano de lo que podría haber imaginado."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECCIÓN: COMUNIDAD (NARANJA) — usa shortcode cta_fullwidth
  # ======================
  - block: markdown
    id: comunidad
    content:
      text: |
        {{< cta_fullwidth
            id="comunidad"
            title="Construimos comunidad"
            bg="#F77B20"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        Fomentamos redes de apoyo y colaboración que trascienden disciplinas, instituciones y países, para crecer y visibilizar la ciencia desde América Latina hacia el mundo.
        {{</ cta_fullwidth >}}

  - block: features
    id: comunidad-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Gobernanza comunitaria"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos herramientas y asesoramiento en gobernanza para que personas y organizaciones logren mayor impacto y eficiencia.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/gobernanza-2022/">Ver más →</a>
        - name: "Conversatorios abiertos"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Organizamos espacios de diálogo que promueven el aprendizaje, el intercambio de experiencias y la participación, consolidando redes de colaboración y el conocimiento compartido.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/conversatorios/">Ver más →</a>
        - name: "Mapeo de Ciencia Abierta en Latinoamérica"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Repositorio colaborativo de información sobre Ciencia Abierta en español.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/mapeo-comunidades/">Ver más →</a><br>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "32"
          description: "comunidades amigas y alianzas"
        - statistic: "60+"
          description: "personas que colaboran con MetaDocencia"
        - statistic: "6.000+"
          description: "personas conectadas"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Andrés Kamaid"
          role: "Investigador, Advanced Bioimaging Unit, Institut Pasteur Montevideo, tras consultoría para Latin American Bioimaging (LABI)"
          text: "Les quiero agradecer por el trabajo realizado. Además de vuestros aportes conceptuales y prácticos que nos han permitido avanzar mucho, vuestra calidez y amabilidad han hecho este proceso muy pero muy disfrutable. Voy a extrañar estas reuniones."
        - name: "Verónica Xhardez"
          role: "Docente e investigadora en UNTREF, investigadora en CIECTI y coordinadora técnica de ARPHAI, en ocasión del 4° aniversario de MetaDocencia"
          text: "¡Cuánto aprendizaje colectivo por el camino! Felicitaciones y gracias por ser un ámbito de coproducción, interdisciplina y cuidado mutuo."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

      # --- Nueva seccion (gris un poco más oscuro) ---

    - block: features
    id: produccion-visibilidad
    content:
      title: 
      items:
        - name: "Publicaciones académicas"
          description: |
            <div style="height:3px;background:#111827;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Realizamos y compartimos abiertamente investigación que informa y respalda la Ciencia Abierta y la educación en América Latina.
            <br>
            <a href="https://metadocencia.org/research/"
               class="mt-2 inline-block font-semibold px-4 py-2 rounded-md"
               style="background:#FFFFFF;color:#111827;border:1px solid #111827;text-decoration:none;">
               Ver más
            </a>
        - name: "MetaDocencia en los medios"
          description: |
            <div style="height:3px;background:#111827;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Conoce qué dicen de MetaDocencia en prensa y blogs.
            <br>
            <a href="https://metadocencia.org/prensas/"
               class="mt-2 inline-block font-semibold px-4 py-2 rounded-md"
               style="background:#FFFFFF;color:#111827;border:1px solid #111827;text-decoration:none;">
               Ver más
            </a>
        - name: "Participaciones en eventos"
          description: |
            <div style="height:3px;background:#111827;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Organizamos, dictamos y acompañamos talleres, paneles y presentaciones que ayudan a visibilizar perspectivas latinoamericanas sobre Ciencia Abierta, fortalecer redes de colaboración y construir capacidades desde y para la región.
            <br>
            <a href="https://metadocencia.org/eventos/"
               class="mt-2 inline-block font-semibold px-4 py-2 rounded-md"
               style="background:#FFFFFF;color:#111827;border:1px solid #111827;text-decoration:none;">
               Ver más
            </a>
    design:
      columns: 3
      css_class: "bg-gray-200 text-gray-900"

    
  # === ESTILOS LOCALES para limitar el alto del HERO ===
  - block: markdown
    id: estilos-hero-que-hacemos
    content:
      title: ""
      text: |
        <style>
          /* ===== Qué hacemos: acotar alto del hero y reducir padding interno ===== */
          section#hero-que-hacemos.hero-max-bounded,
          section#hero-que-hacemos.hero-max-bounded .hero-bg {
            max-height: 90vh;   /* replicado de Home */
            min-height: 70vh;   /* replicado de Home */
          }

          /* Móvil: achicar un poco más y recortar padding interno */
          @media (max-width: 768px) {
            section#hero-que-hacemos.hero-max-bounded,
            section#hero-que-hacemos.hero-max-bounded .hero-bg {
              max-height: 90vh;
              min-height: 44vh;
            }
            section#hero-que-hacemos .container {
              padding-top: .75rem !important;
              padding-bottom: .75rem !important;
            }
          }
        </style>

---
