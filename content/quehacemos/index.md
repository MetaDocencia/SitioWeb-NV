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
          Fortalecemos el ecosistema científico latinoamericano con:
        </p>
        <div class="flex flex-wrap justify-center gap-3 mt-6">
          <a href="#investigacion"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
             style="background:#00506F;color:#FFFFFF;">Investigación</a>
          <a href="#formacion"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
             style="background:#C83737;color:#FFFFFF;">Formación</a>
          <a href="#comunidad"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
             style="background:#F77B20;color:#FFFFFF;">Comunidad</a>
        </div>
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
        - name: "Hacemos investigación"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Analizamos evidencia y construimos estrategias para fortalecer el ecosistema científico. Medimos y publicamos el impacto de programas y acciones de manera participativa y abierta.
            <br>
            <a href="#investigacion"
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

  # ---------- PROYECTOS DESTACADOS ----------
  - block: features
    id: destacados
    content:
      title: "Proyectos destacados"
      items:
        - name: "Contextualización"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Desarrollamos recursos de calidad en español a partir de material originalmente publicado en otro idioma.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/contextualizacion/">Ver más →</a>
        - name: "Formación en Ciencia Abierta"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Con el apoyo de la NASA, diseñamos cohortes en español, pensadas para América Latina, para promover principios y herramientas de Ciencia Abierta.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/nasa-spanish/">Ver más →</a>
        - name: "Publicaciones académicas"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Realizamos y compartimos abiertamente investigación que informa y acompaña la Ciencia Abierta y la educación en América Latina.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/research/">Ver todas las publicaciones académicas →</a>
    design:
      columns: 3

  # ======================
  #  SECCIÓN: INVESTIGACIÓN (AZUL) — usa shortcode cta_fullwidth
  # ======================
  - block: markdown
    id: investigacion
    content:
      text: |
        {{< cta_fullwidth
            id="investigacion"
            title="Hacemos investigación"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        Analizamos evidencia y construimos estrategias para fortalecer el ecosistema científico. Medimos y publicamos el impacto de programas y acciones de manera participativa y abierta.
        {{</ cta_fullwidth >}}

  - block: features
    id: investigacion-proyectos
    content:
      items:
        - name: "Procesamiento de datos abiertos"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Buscamos garantizar el acceso a computación de alto rendimiento (HPC) para redes de investigación nacionales y regionales de Latinoamérica.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/datosabiertos-latam/">Ver más →</a>
        - name: "Revisión abierta y equitativa"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Empoderamos redes latinoamericanas para promover la revisión por pares abierta y equitativa de preprints y conjuntos de datos académicos.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/revision-abierta/">Ver más →</a>
        - name: "Barreras al financiamiento para la investigación"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Publicamos un estudio que identifica algunas barreras en el acceso equitativo a la financiación internacional para las personas que investigan en América Latina y propone estrategias para mitigarlas.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/research/">Ver todas las publicaciones académicas →</a>
    design:
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "240+"
          description: "documentos en Zenodo"
        - statistic: "44.000+"
          description: "vistas"
        - statistic: "30.000+"
          description: "descargas"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "María Ángela Petrizzo Páez"
          role: "Co-autora del artículo [“More than a NASA Badge: MetaDocencia and Capacity Building for Open Science Communities in Latin America”](https://www.linkedin.com/posts/petrizzo_more-than-a-nasa-badge-metadocencia-and-activity-7484579691627167744-PyAH)"
          text: "Este artículo no sólo relata la experiencia en MetaDocencia, sino que también aborda, a partir de esa experiencia, categorías de análisis que, a mi juicio, son clave en el estudio hacia el futuro de la sostenibilidad en la adopción de prácticas de Ciencia Abierta. Mi agradecimiento a Paola Castaño, por comandar con rigurosidad y constancia este trabajo colectivo y a todas las personas que integran el equipo de MetaDocencia y que se montaron en este carro. ¡Vamos por más!"
        - name: "Marina Fernandez"
          role: "Sobre el artículo [“Barreras al acceso al financiamiento internacional para la investigación, según la percepción de personas dedicadas a investigar en América Latina”](https://www.linkedin.com/posts/marina-fernandez-63999b29_barreras-en-el-acceso-a-financiamiento-en-activity-7475179419288952832-wnnY)"
          text: "¡Lectura recomendada en PLOS One! Un nuevo artículo analiza por qué a los investigadores en Latinoamérica nos cuesta tanto acceder a fondos internacionales. El estudio pone sobre la mesa obstáculos reales de nuestro día a día: la barrera del inglés, el poco apoyo administrativo en nuestras instituciones y la dificultad para armar redes con el Norte Global. Aprovecho para dejar mis felicitaciones a MetaDocencia por su trabajo incansable apoyando a la ciencia latinoamericana y apostando siempre por la ciencia abierta. Ese es exactamente el camino que necesitamos en la región."
    design:
      spacing:
        padding: ["2rem", 0, "1rem", 0]

  - block: markdown
    id: testimonios-investigacion-cta
    content:
      text: |
        <p class="text-center">
          <a class="font-semibold underline underline-offset-4"
             href="https://metadocencia.org/testimonios/">Lee más testimonios →</a>
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "2rem", 0]

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
        - name: "Ciencia Abierta"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Con el apoyo de la NASA, diseñamos cohortes de formación en español para promover principios y herramientas de Ciencia Abierta.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/nasa-spanish/">Súmate →</a>

        - name: "Cómo obtener financiamiento para iniciativas científicas"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos formación estratégica para investigadores para mejorar su acceso a financiación internacional.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/acceso-financiacion/">Ver más →</a>

        - name: "Formación para enseñar"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Creamos un curso Train-the-Trainer en español que desarrolla y certifica habilidades pedagógicas y prácticas que multiplican el aprendizaje y potencian el impacto colectivo.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/formacion-para-formar/">Ver más →</a>

        - name: "Diseñamos cursos"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Adaptados a las necesidades de tu institución o comunidad para fortalecer capacidades en IA, Ciencia Abierta, análisis de datos y herramientas digitales.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/cta/">Contáctanos →</a>

        # TODO: confirmar el destino de "Enseñamos habilidades".
        # Provisorio: /proyecto/cursos-a-medida/ (mismo destino que "Diseñamos cursos").
        - name: "Enseñamos habilidades"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Desde 2020, enseñamos cursos participativos e impulsamos espacios de aprendizaje que combinan pedagogía y tecnología.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/cursos-a-medida/">Ver más →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "100"
          description: "ediciones (430+ horas)"
        - statistic: "1.700+"
          description: "personas de 33 países formadas"
        - statistic: ">85%+"
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
        padding: ["2rem", 0, "1rem", 0]

  - block: markdown
    id: testimonios-formacion-cta
    content:
      text: |
        <p class="text-center">
          <a class="font-semibold underline underline-offset-4"
             href="https://metadocencia.org/testimonios/">Lee más testimonios →</a>
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "2rem", 0]

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
            Repositorio colaborativo de información sobre Ciencia Abierta en español. Proyecto a incubar.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/mapeo-comunidades/">Ver más →</a>
        - name: "Proyecto Catalyst"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Facilitamos la accesibilidad y la utilidad de la infraestructura de cómputo en la nube para comunidades globales de biociencias.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/catalyst/">Ver más →</a>
        - name: "Contextualización"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Desarrollamos recursos de calidad en español a partir de material originalmente publicado en otro idioma.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/proyecto/contextualizacion/">Ver más →</a>
        - name: "Voces y participaciones"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            <a class="inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/testimonios/">Reconocimiento de la comunidad →</a>
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/prensas/">Notas en medios →</a>
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/eventos/">Participaciones en eventos →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "30+"
          description: "comunidades amigas y alianzas"
        - statistic: "60+"
          description: "personas colaboradoras"
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
        padding: ["2rem", 0, "1rem", 0]

  - block: markdown
    id: testimonios-comunidad-cta
    content:
      text: |
        <p class="text-center">
          <a class="font-semibold underline underline-offset-4"
             href="https://metadocencia.org/testimonios/">Lee más testimonios →</a>
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "2rem", 0]

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
