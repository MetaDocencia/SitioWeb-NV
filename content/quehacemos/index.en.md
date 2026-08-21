---
title: "What we do"
type: landing
slug: "que-hacemos"
design:
  spacing: "3rem"

sections:
  # ---------- HERO (same bounded height as Home) ----------
  - block: hero
    id: hero-que-hacemos
    content:
      title: <span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">What We Do</span>
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto">
          We cultivate the Latin American scientific ecosystem with:
        </p>
        <div class="flex flex-wrap justify-center gap-3 mt-6">
          <a href="#investigacion"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
             style="background:#00506F;color:#FFFFFF;">Research</a>
          <a href="#formacion"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
             style="background:#C83737;color:#FFFFFF;">Training</a>
          <a href="#comunidad"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
             style="background:#F77B20;color:#FFFFFF;">Community</a>
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

  # ---------- PILLARS ----------
  - block: features
    id: pilares
    content:
      items:
        - name: "Conducting Research"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We analyze the evidence and build the strategies to strengthen the scientific ecosystem. We measure and publish the impact of programs and initiatives in an open, participatory way.
            <br>
            <a href="#investigacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#00506F;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
        - name: "Training Researchers"
          description: |
            <div style="height:4px;background:#C83737;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We create evidence-based learning programs that turn knowledge into action and new skills into local impact.
            <br>
            <a href="#formacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#C83737;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
        - name: "Fostering Community"
          description: |
            <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We nurture collaboration networks that break down barriers across disciplines, institutions, and countries, elevating Latin American science worldwide.
            <br>
            <a href="#comunidad"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#F77B20;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
    design:
      columns: 3
      css_class: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"

  # ---------- FEATURED PROJECTS ----------
  # TODO: en el doc, esta primera tarjeta se titula "Contextualization of open resources"
  # pero venía sin descripción y con el enlace de acceso-financiacion.
  # Provisorio: descripción y enlace del proyecto de contextualización.
  - block: features
    id: destacados
    content:
      title: "Featured Projects"
      items:
        - name: "Contextualization of Open Resources"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We develop high-quality Spanish resources for Latin America based on material originally published in other languages.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/contextualizacion/">Discover more →</a>
        - name: "Open Science Training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We design and deliver contextualized Open Science training cohorts in Spanish, with support from NASA.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/nasa-spanish/">Discover more →</a>
        - name: "Academic publications"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We do research and openly share results that inform and support open science and education in Latin America and beyond.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/en/research/">See all academic publications →</a>
    design:
      columns: 3

  # ======================
  #  SECTION: RESEARCH (BLUE) — uses the cta_fullwidth shortcode
  # ======================
  - block: markdown
    id: investigacion
    content:
      text: |
        {{< cta_fullwidth
            id="investigacion"
            title="Conducting Research"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We analyze evidence and build strategies to strengthen the scientific ecosystem. We measure and publish the impact of programs and initiatives in an open, participatory way.
        {{</ cta_fullwidth >}}

  - block: features
    id: investigacion-proyectos
    content:
      items:
        - name: "Open Data Processing"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We work to secure access to high-performance computing (HPC) for national and regional research networks across Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/datosabiertos-latam/">Learn more →</a>
        - name: "Equitable Open Peer Review"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We empower Latin American networks to promote open and equitable peer review of preprints and academic datasets.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/revision-abierta/">Learn more →</a>
        - name: "Barriers to Research Funding"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We published a study identifying some of the barriers to equitable access to international funding faced by researchers in Latin America, along with strategies to help address them.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/en/research/">See all academic publications →</a>
    design:
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "240+"
          description: "documents on Zenodo"
        - statistic: "44,000+"
          description: "views"
        - statistic: "30,000+"
          description: "downloads"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "María Ángela Petrizzo Páez"
          role: "Co-author of “More than a NASA Badge: MetaDocencia and Capacity Building for Open Science Communities in Latin America”"
          text: "This article not only recounts the MetaDocencia experience, but also draws on it to address categories of analysis that, in my view, are key to studying the future sustainability of Open Science practices. My thanks to Paola Castaño, for leading this collective work with rigor and persistence, and to everyone on the MetaDocencia team who came along for the ride. Here's to what comes next."
        - name: "Marina Fernandez"
          role: "On the article “Perceived Barriers for Accessing International Research Funding among Latin American Researchers”"
          text: "Recommended reading in PLOS One. A new article looks at why researchers in Latin America struggle so much to access international funding. The study puts real, everyday obstacles on the table: the language barrier, the limited administrative support at our institutions, and the difficulty of building networks with the Global North. I want to congratulate MetaDocencia for their tireless work supporting Latin American science and their ongoing commitment to open science. That is exactly the path our region needs."
    design:
      spacing:
        padding: ["2rem", 0, "1rem", 0]

  - block: markdown
    id: testimonios-investigacion-cta
    content:
      text: |
        <p class="text-center">
          <a class="font-semibold underline underline-offset-4"
             href="https://metadocencia.org/en/testimonios/">Read more testimonials →</a>
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "2rem", 0]

  # ======================
  #  SECTION: TRAINING (RED) — uses the cta_fullwidth shortcode
  # ======================
  - block: markdown
    id: formacion
    content:
      text: |
        {{< cta_fullwidth
            id="formacion"
            title="Training Researchers"
            bg="#C83737"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We create evidence-based learning programs that turn knowledge into action and new skills into local impact.
        {{</ cta_fullwidth >}}

  - block: features
    id: formacion-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Contextualized Open Science Training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We design and deliver training cohorts in Spanish to advance the principles and tools of Open Science, with support from NASA, and for Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/nasa-spanish/">Learn more →</a>

        - name: "Unlocking Funding for Scientific Initiatives"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We offer strategic training for researchers, strengthening skills and networks that open doors to international funding opportunities.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/acceso-financiacion/">Learn more →</a>

        - name: "Train the Trainers Program"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We facilitate a hands-on Spanish-language program that equips participants with pedagogical skills, amplifying learning and collective impact.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/formacion-para-formar/">Learn more →</a>

        - name: "Skills Training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We design customized courses that empower individuals, institutions and communities to build practical skills in teaching, AI, Open Science, data analysis, and digital tools.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/cursos-a-medida/">Learn more →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "100"
          description: "editions (430+ hours)"
        - statistic: "1,700+"
          description: "people from 33 countries trained"
        - statistic: "85%"
          description: "Net Promoter Score"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Walter Sosa Escudero"
          role: "PhD in Economics, professor and researcher"
          text: "Don't miss this. They're hyper-professional, and the work they do is excellent."
        - name: "Emmanuel Iarussi"
          role: "Scientist at CONICET and professor at UTDT, former Advisory Committee member"
          text: "The course was excellent. You gave me back the drive to teach — online education can be far more human than I ever imagined."
        - name: "Marina Compagnucci"
          role: "Biologist and MetaDocencia contributor, with a key role in the design and adaptation of NASA Open Science content for Latin America"
          text: "Working with MetaDocencia means being part of a team that is attentive, warm, diverse, and committed to its mission and people. It's no surprise that creative proposals emerge when dialogue feels natural and reassuring."
    design:
      spacing:
        padding: ["2rem", 0, "1rem", 0]

  - block: markdown
    id: testimonios-formacion-cta
    content:
      text: |
        <p class="text-center">
          <a class="font-semibold underline underline-offset-4"
             href="https://metadocencia.org/en/testimonios/">Read more testimonials →</a>
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "2rem", 0]

  # ======================
  #  SECTION: COMMUNITY (ORANGE) — uses the cta_fullwidth shortcode
  # ======================
  - block: markdown
    id: comunidad
    content:
      text: |
        {{< cta_fullwidth
            id="comunidad"
            title="Fostering Community"
            bg="#F77B20"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We nurture collaboration networks that break down barriers across disciplines, institutions, and countries, elevating Latin American science worldwide.
        {{</ cta_fullwidth >}}

  - block: features
    id: comunidad-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Shaping Governance for Impact"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We provide tools and trusted guidance to help people and organizations lead with purpose, efficiency, and lasting impact.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/gobernanza-2022/">Learn more →</a>
        - name: "Open Conversations"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We create spaces for dialogue that foster learning, the exchange of experiences, and active participation, strengthening collaboration and shared knowledge.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/conversatorios/">Learn more →</a>
        - name: "Mapping Open Science in Latin America"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We maintain a collaborative repository in Spanish documenting Open Science initiatives across Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/mapeo-comunidades/">Learn more and fund this project →</a>
        - name: "Catalyst Project"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We make cloud-computing infrastructure more accessible and useful for life sciences communities in the Global South.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/catalyst/">Learn more →</a>
        - name: "Contextualization"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We develop high-quality Spanish resources for Latin America based on material originally published in other languages.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/contextualizacion/">Learn more →</a>
        - name: "Voices and Appearances"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            <a class="inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/en/testimonios/">Community recognition →</a>
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/en/prensas/">In the media →</a>
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://metadocencia.org/en/eventos/">Events we've taken part in →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "30+"
          description: "partner communities and alliances"
        - statistic: "60+"
          description: "collaborators"
        - statistic: "6,000+"
          description: "people connected"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Andrés Kamaid"
          role: "Researcher, Advanced Bioimaging Unit, Institut Pasteur Montevideo, following a consultancy for Latin American Bioimaging"
          text: "I want to thank you for the work done so far. In addition to your conceptual and practical contributions, which have enabled us to make significant progress, your warmth and kindness have made this process truly enjoyable. I will miss our meetings."
        - name: "Verónica Xhardez"
          role: "Researcher at UNTREF and CIECTI, Technical Coordinator at ARPHAI (partner community) and MetaDocencia contributor"
          text: "So much collective learning along the way. Congratulations and thank you for being a space for co-production, interdisciplinarity, and mutual care."
    design:
      spacing:
        padding: ["2rem", 0, "1rem", 0]

  - block: markdown
    id: testimonios-comunidad-cta
    content:
      text: |
        <p class="text-center">
          <a class="font-semibold underline underline-offset-4"
             href="https://metadocencia.org/en/testimonios/">Read more testimonials →</a>
        </p>
    design:
      spacing:
        padding: ["0rem", 0, "2rem", 0]

  # === LOCAL STYLES to bound the HERO height ===
  - block: markdown
    id: estilos-hero-que-hacemos
    content:
      title: ""
      text: |
        <style>
          /* ===== What we do: bound the hero height and trim inner padding ===== */
          section#hero-que-hacemos.hero-max-bounded,
          section#hero-que-hacemos.hero-max-bounded .hero-bg {
            max-height: 90vh;   /* mirrors Home */
            min-height: 70vh;   /* mirrors Home */
          }

          /* Mobile: slightly shorter, with tighter inner padding */
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
