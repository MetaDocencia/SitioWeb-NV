---
title: "What we do"
type: landing
slug: "que-hacemos"
design:
  spacing: "3rem"

sections:
  # ---------- HERO ----------
  - block: hero
    content:
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">We cultivate the Latin American scientific ecosystem through infrastructure, training, and community.</span>'
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]
        margin: [0, 0, 0, 0]
      css_style: "min-height: 20vh;"
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
        - name: "Enhancing infrastructure"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We promote scientific and technological infrastructure that enables the production, management, and reuse of knowledge.
            <br>
            <a href="#infra"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#00506F;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
        - name: "Training for researchers"
          description: |
            <div style="height:4px;background:#C83737;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We create evidence-based learning programs that turn knowledge into action and new skills into local impact.
            <br>
            <a href="#formacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#C83737;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
        - name: "Fostering community"
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
  - block: features
    id: destacados
    content:
      title: "Featured Projects"
      items:
        - name: "Unlocking Funding for Scientific Initiatives"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We offer strategic training for researchers, strengthening skills and networks that open doors to international funding opportunities.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/acceso-financiacion/">Discover more →</a>
        - name: "Contextualized Open Science Training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We design and deliver training cohorts in Spanish to advance  the principles and tools of Open Science, with support from NASA, and for Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/nasa-spanish/">Discover more →</a>
        - name: "Shaping Governance for Impact"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We provide tools and trusted guidance  to help people and organizations lead with purpose, efficiency, and lasting impact.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/gobernanza-2022/">Discover more →</a>
    design:
      columns: 3

  # ======================
  #  SECTION: INFRA (BLUE) — uses cta_fullwidth
  # ======================
  - block: markdown
    id: infra
    content:
      text: |
        {{< cta_fullwidth
            id="infra"
            title="Enhancing infrastructure"
            bg="#00506F"
            fg="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We promote scientific and technological infrastructure that enables the production, management, and reuse of knowledge.
        {{</ cta_fullwidth >}}

  - block: features
    id: infra-proyectos
    content:
      items:
        - name: "Catalyst Project"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We make cloud-computing infrastructure more accessible and useful for  life sciences communities in the Global South.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/catalyst/">Learn more →</a>
        - name: "Contextualization"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We develop high-quality Spanish resources for Latin America based on material originally published in other languages.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/contextualizacion/">Learn more →</a>
        - name: "Equitable Open Peer Review"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We empower Latin American networks to promote open and equitable peer review of preprints and academic datasets.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/revision-abierta/">Learn more →</a><br>
    
        - name: "Open Data Processing"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We aim to secure access to high-performance computing (HPC) for national and regional research networks across Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/datosabiertos-latam/">Learn more →</a><br>
    design:
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "200+"
          description: "documents on Zenodo"
        - statistic: "85,000+"
          description: "contextualized words"
        - statistic: "10"
          description: "Latin American communities supported through Catalyst"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Nicolás Wolovick"
          role: "Director, UNC Súpercomputo (Latin American community in Catalyst, MetaDocencia partner)"
          text: "Participating in the Catalyst project was very important for UNC Supercomputing. We learned how to navigate a funding and collaboration ecosystem that was new to us. We met others and made ourselves known; we valued and were valued within larger networks across Latin America and Africa. The plan to set up a local cloud for JupyterHub is a project that continues to progress and has great potential now and in the future."
        - name: "Andrés Olivera"
          role: "Network Manager, LABI (Latin American community that MetaDocencia invited into Catalyst)"
          text: "Participating in Catalyst allowed us to test and determine the infrastructure needed for a sustainable ecosystem with trained local leaders. We confirmed that open access to this infrastructure is vital to drive local research and amplify regional scientific impact."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECTION: TRAINING (RED) — uses cta_fullwidth
  # ======================
  - block: markdown
    id: formacion
    content:
      text: |
        {{< cta_fullwidth
            id="formacion"
            title="Training for researchers"
            bg="#C83737"
            fg="#FFFFFF"
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
            We design and deliver training cohorts in Spanish to advance  the principles and tools of Open Science, with support from NASA, and for Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/nasa-spanish/">Learn more →</a>

        - name: "Train the Trainers"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We facilitate a hands-on Spanish-language program that equips participants with pedagogical skills, amplifying learning and collective impact.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/formacion-para-ensenar/">Learn more →</a>

        - name: "Skills training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We design customized courses that empower individuals, institutions and communities to build practical skills in teaching, Open Science, data analysis, and digital tools.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/cursos-a-medida/">Learn more →</a>

        - name: "Unlocking Funding for Scientific Initiatives"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We offer strategic training for researchers, strengthening skills and networks that open doors to international funding opportunities.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/acceso-financiacion/">Learn more →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "94"
          description: "editions (388 hours)"
        - statistic: "1,500+"
          description: "people from 33 countries trained"
        - statistic: "89%"
          description: "Net Promoter Score"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Walter Sosa Escudero"
          role: "PhD in Economics, professor and researcher"
          text: "Don’t miss this- They’re hyper-professional, and the work they do is excellent."
        - name: "Emmanuel Iarussi"
          role: "Scientist at CONICET and professor at UTDT, former Advisory Committee member"
          text: "The course was excellent. You gave me back the drive to teach —online education can be far more human than I ever imagined."
        - name: "Marina Compagnucci"
          role: "Biologist and MetaDocencia contributor, with a key role in the design and adaptation of NASA Open Science content for Latin America."
          text: "Working with MetaDocencia means being part of a team that is attentive, warm, diverse, and committed to its mission and people. It’s no surprise that creative proposals emerge when dialogue feels natural and reassuring."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  SECTION: COMMUNITY (ORANGE) — uses cta_fullwidth
  # ======================
  - block: markdown
    id: comunidad
    content:
      text: |
        {{< cta_fullwidth
            id="comunidad"
            title="Fostering community"
            bg="#F77B20"
            fg="#FFFFFF"
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
            We provide tools and trusted guidance  to help people and organizations lead with purpose, efficiency, and lasting impact.
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
            A collaborative repository of information in Spanish, documenting Open Science initiatives across Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="/en/proyecto/mapeo-comunidades/">Learn more and fund this project →</a><br>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "40+"
          description: "partner communities & alliances"
        - statistic: "60+"
          description: "collaborators"
        - statistic: "6,000+"
          description: "connected people"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Andrés Kamaid"
          role: "Researcher, Advanced Bioimaging Unit, Institut Pasteur Montevideo — following a consultancy for Latin American Bioimaging"
          text: "I want to thank you for the work done so far. In addition to your conceptual and practical contributions, which have enabled us to make significant progress, your warmth and kindness have made this process truly enjoyable. I will miss our meetings."
        - name: "Verónica Xhardez"
          role: "Researcher at UNTREF and CIECTI, Technical Coordinator at ARPHAI (partner community) and MetaDocencia contributor"
          text: "So much collective learning along the way! Congratulations and thank you for being a space for co-production, interdisciplinarity, and mutual care."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # --- Academic publications (gris un poco más oscuro) ---
  - block: markdown
    id: research-pubs
    content:
      text: |
        {{< cta_fullwidth
            id="research-pubs"
            title="Academic publications"
            text="We conduct and openly share research that informs and supports open science and education in Latin America."
            bg="#E5E7EB" color="#111827"
            variant="background"
            maxw="1600px"
            content_maxw="900px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
            inner="raw"
        >}}

        <a href="/en/research"
           class="inline-block font-semibold px-4 py-2 rounded-md"
           style="background:#FFFFFF;color:#111827;border:1px solid #111827;text-decoration:none;">
          Explore our academic publications here
        </a>

        {{< /cta_fullwidth >}}


#  FINAL SECTION: MetaDocencia en los medios (full-width estilo CTA)
# ======================
  - block: markdown
    id: prensa
    content:
      text: |
        {{< cta_fullwidth
            id="prensa"
            title="MetaDocencia in the Media"
            text="Explore how the press is covering our impact in science and education"
            bg="#F3F4F6" color="#111827"
            variant="background"
            maxw="1600px"
            content_maxw="900px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
            inner="raw"
        >}}
  
        <a href="/en/prensas/"
           class="inline-block font-semibold px-4 py-2 rounded-md"
           style="background:#FFFFFF;color:#111827;border:1px solid #111827;text-decoration:none;">
          See mentions
        </a>
  
        {{< /cta_fullwidth >}}

---
