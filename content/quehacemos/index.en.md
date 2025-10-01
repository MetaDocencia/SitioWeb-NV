---
title: "What we do"
type: landing
slug: "what-we-do"
design:
  spacing: "3rem"

sections:
  # ---------- HERO ----------
  - block: hero
    content:
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">We strengthen the Latin American scientific ecosystem through infrastructure, training, and community</span>'
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]
        margin: [0, 0, 0, 0]
      css_style: "min-height: 20vh;"
      background:
        image:
          filename: "que-hacemos.jpg"
          filters:
            brightness: 0.45
          size: cover
          position: center
        text_color_light: true

  # ---------- PILLARS ----------
  - block: features
    id: pilares
    content:
      items:
        - name: "Enhancing infrastructure"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We promote scientific and technological infrastructure that supports the production, management, and reuse of knowledge.
            <br>
            <a href="#infra"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#00506F;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
        - name: "Training for researchers"
          description: |
            <div style="height:4px;background:#C83737;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We create evidence-based learning programs that turn knowledge into action and equip the scientific community with skills for local impact.
            <br>
            <a href="#formacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#C83737;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Learn more
            </a>
        - name: "Fostering community"
          description: |
            <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            We foster support and collaboration networks that transcend disciplines, institutions, and countries to grow and elevate science from Latin America to the world.
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
        - name: "Funding for Scientific Initiatives"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We offer strategic training for researchers, strengthening initiatives, capabilities, and networks to improve access to international funding.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/acceso-financiacion/">Learn more →</a>
        - name: "Open Science Training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            With support from NASA, we design Spanish-language cohorts tailored to Latin America to promote open-science principles and tools.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/nasa-spanish/">Learn more →</a>
        - name: "Governance"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We provide tools and advisory services in governance so that people and organizations can achieve greater impact and efficiency.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/gobernanza-2022/">Learn more →</a>
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
            title="We Advance Infrastructure"
            bg="#00506F"
            fg="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We promote scientific and technological infrastructure that supports the production, management, and reuse of knowledge.
        {{</ cta_fullwidth >}}

  - block: features
    id: infra-proyectos
    content:
      items:
        - name: "Catalyst"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We make cloud-computing infrastructure more accessible and useful for global life-sciences communities.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/catalyst/">Learn more →</a>
        - name: "Contextualization"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We develop high-quality resources in Spanish based on material originally published in other languages.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/contextualizacion/">Learn more →</a>
        - name: "Equitable Open Peer Review"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We empower Latin American networks to promote open and equitable peer review of academic preprints and research datasets.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/revision-abierta/">Learn more →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Project in incubation</span>
        - name: "Open Data Processing"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We aim to guarantee access to high-performance computing (HPC) for national and regional research networks across Latin America.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/datosabiertos-latam/">Learn more →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Project in incubation</span>
    design:
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "+200"
          description: "documents on Zenodo"
        - statistic: "+85,000"
          description: "contextualized words"
        - statistic: "10"
          description: "Latin American communities supported through Catalyst"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Nicolás Wolovick"
          role: "Director, UNC Supercomputing"
          text: "Participating in the Catalyst project was very important for UNC Supercomputing. We learned to navigate a funding and collaboration ecosystem that was new to us. We met others and made ourselves known; we valued and were valued within larger networks across Latin America and Africa. The plan to set up a local cloud for JupyterHub is a project that continues to progress and has great potential now and in the future."
        - name: "Andrés Olivera"
          role: "Network Manager, LABI"
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
            title="We Build Capacity"
            bg="#C83737"
            fg="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We create evidence-based learning programs that turn knowledge into action and equip the scientific community with skills for local impact.
        {{</ cta_fullwidth >}}

  - block: features
    id: formacion-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Open Science Training"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            With support from NASA, we design Spanish-language cohorts tailored to Latin America to promote open-science principles and tools.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/nasa-spanish/">Learn more →</a>

        - name: "Train-the-Trainers"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We created a Spanish-language program to teach and certify pedagogical and practical skills, multiplying learning and boosting collective impact.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/formacion-para-ensenar/">Learn more →</a>

        - name: "Custom Courses"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We design bespoke courses and trainings, tailored to the needs of each institution or community, to strengthen capacities in open science, data analysis, and digital tools.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/cursos-a-medida/">Learn more →</a>

        - name: "Funding Access for Latin American Initiatives"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We offer strategic training for researchers, strengthening initiatives, capabilities, and networks to improve access to international funding.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/acceso-financiacion/">Learn more →</a>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 4

  - block: stats
    content:
      items:
        - statistic: "94"
          description: "editions (388 hours)"
        - statistic: "+1,500"
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
          text: "Don’t miss this. They’re hyper-professional; the work they do is excellent."
        - name: "Emmanuel Iarussi"
          role: "Scientist at CONICET and professor at UTDT"
          text: "The course was excellent. You gave me back the drive to teach. Teaching online can be much more human than I could have imagined."
        - name: "Marina Compagnucci"
          role: "Biologist and MetaDocencia collaborator; contributed to designing and contextualizing NASA Open Science educational content"
          text: "Working with MetaDocencia means proudly feeling part of a team that is attentive, warm, diverse, responsible, and committed to its mission and to the people who make MetaDocencia. It’s no surprise the proposals are creative when dialogue in that space feels naturally comfortable and reassuring."
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
            title="We Build Community"
            bg="#F77B20"
            fg="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        We foster support and collaboration networks that transcend disciplines, institutions, and countries to grow and elevate science from Latin America to the world.
        {{</ cta_fullwidth >}}

  - block: features
    id: comunidad-proyectos
    content:
      title: ""
      text: ""
      items:
        - name: "Governance"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We provide tools and advisory services in governance so that people and organizations can achieve greater impact and efficiency.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/gobernanza-2022/">Learn more →</a>
        - name: "Conversations"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            We organize dialogue spaces that promote learning, exchange of experiences, and participation, consolidating collaboration networks and shared knowledge.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://julianbuede.github.io/blog/second-brain/">Learn more →</a>
        - name: "Mapping Open Science in Latin America"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            A collaborative repository of information on Open Science in Spanish.
            <br>
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/mapeo-comunidades/">Learn more →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Project in incubation</span>
    design:
      spacing:
        padding: ["0.25rem", 0, "1rem", 0]
      columns: 3

  - block: stats
    content:
      items:
        - statistic: "+40"
          description: "partner communities & alliances"
        - statistic: "+60"
          description: "collaborators"
        - statistic: "+1,070"
          description: "members in our Slack community"
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: testimonials
    content:
      items:
        - name: "Andrés Kamaid"
          role: "Researcher, Institut Pasteur Montevideo — following a consultancy for Latin American Bioimaging"
          text: "I want to thank you for the work done so far. In addition to your conceptual and practical contributions, which have enabled us to make significant progress, your warmth and kindness have made this process truly enjoyable. I will miss our meetings."
        - name: "Verónica Xhardez"
          role: "ARPHAI"
          text: "So much collective learning along the way! 🍎 Congratulations and thank you for being a space for co-production, interdisciplinarity, and mutual care."
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  # ======================
  #  FINAL SECTION: MetaDocencia in the media (centered markdown)
  # ======================
  - block: markdown
    id: prensa
    content:
      text: |
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">MetaDocencia in the media</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            See what the press and blogs are saying about MetaDocencia.
          </p>
          <a href="https://mdnv.netlify.app/prensas"
             class="inline-block px-4 py-2 rounded-md font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900">
             See mentions →
          </a>
        </div>
    design:
      spacing:
        padding: ["1.25rem", "0.75rem", "1.25rem", "0.75rem"]
      css_style: "background:#F9FAFB;"
---
