---
title: "Home"
date: 2023-10-24
type: landing
translationKey: "home"

design:
  # Default spacing between sections
  spacing: "6rem"

sections:
  - block: hero
    content:
      # Title in HTML to control size/contrast
      title: '<span class="block text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Let’s put Latin America on the global research map</span>'
      # Larger, high-contrast custom button
      text: |
        <a href="/en/cta/"
           class="inline-block mt-6 text-lg md:text-xl font-extrabold px-7 py-4 rounded-2xl shadow-lg no-underline
                  bg-[#C83737] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C83737]
                  text-white">
          Join us
        </a>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      background:
        color: "navy"
        image:
          filename: "quienes-somos.jpg"
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false
        text_color_light: true   # ensure clear text over the background

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "About us"
          text: "MetaDocencia is an organization founded in 2020. Our community is made up of individuals and organizations dedicated to building local scientific capacity to transform global science. We foster networked knowledge, growing from Latin America to the world."
          image: "quienessomos.jpg"
          button:
            text: "Meet us"
            url: "/en/quienes-somos/"
        - title: "What we do"
          text: "We cultivate the Latin American scientific ecosystem through infrastructure, training, and community."
          feature_icon: check
          features:
            - "Enhancing infrastructure"
            - "Training for researchers"
            - "Fostering  community"
          image: "organigramaapaisado.png"
          button:
            text: "Learn more about our projects"
            url: "/en/que-hacemos/"
    design:
      css_class: ""

  - block: stats
    content:
      items:
        - statistic: "+200"
          description: |
            documents  
            on Zenodo
        - statistic: "+1,500"
          description: |
            people  
            trained
        - statistic: "+1,000"
          description: |
            people in our  
            Slack community
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
          role: "Senior Program Officer, CZI, after the first-ever CZI event in Latin America"
          text: "I'm in awe of the professionalism, thoughtfulness, and kindness of everyone from MetaDocencia. It was a special treat to be able to work with you all."
        - name: "Julio Zetter"
          role: "Data Leader, SciELO Mexico, after participating in an Open Science training"
          text: "All that’s left is to thank the instructors who made this course possible, which is undoubtedly the seed of great outcomes. Thank you so much, MetaDocencia."
        - name: "Verónica Xhardez"
          role: "Researcher at UNTREF and CIECTI, Technical Coordinator at ARPHAI"
          text: "So much collective learning along the way! 🍎 Congratulations and thank you for being a space for co-production, interdisciplinarity, and mutual care."
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
            align-items: stretch;
          }
          @media (max-width: 900px) {
            [data-2col] { grid-template-columns: 1fr; }
          }
          .mdnv-vcenter {
            display: flex;
            flex-direction: column;
            justify-content: center;
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

          /* ===== Colapsables ===== */
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
      title: "Team and Advisory Committee"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Equipo y Consejo Asesor" columns=9 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboran con MetaDocencia ---
  - block: markdown
    id: colaboradores
    content:
      title: "Contributors"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Contributors" columns=10 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Auspiciantes ---
  - block: markdown
    id: auspiciantes
    content:
      title: "Sponsors"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Current" columns=4 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Comunidades Amigas ---
  - block: markdown
    id: comunidades-amigas
    content:
      title: "Fellow Communities"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Fellow Communities" columns=7 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboraron con MetaDocencia ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: "Former Contributors"
      text: |
        <details class="mdnv-collapsible">
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Former Contributors" columns=7 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # ===== CTA final =====
  - block: markdown
    id: apoya
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            id="apoya"
            title="Support Latin American science"
            text=""
            button_text="Join us"
            button_url="/en/cta/"
            bg="#C83737" color="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#C83737"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
            inner="raw"
        >}}
        <p>Our social media channels:</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-4">
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
             style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Twitter</a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
             style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">LinkedIn</a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
             style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">YouTube</a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
             style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Instagram</a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://floss.social/@MetaDocencia" target="_blank" rel="me noopener"
             style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Mastodon</a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://bsky.app/profile/metadocencia.org" target="_blank" rel="noopener"
             style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Bluesky</a>
        </div>
        {{< /cta_fullwidth >}}
---

---
