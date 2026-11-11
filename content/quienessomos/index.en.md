---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:
  # ===== HERO =====
  - block: hero
    id: hero-qs
    content:
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">About Us</span>'
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto">
          We are a community of people and organizations working globally from Latin America since 2020.
        </p>

        <!-- Botones centrados (3) -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <a href="/en/institucional#institucional"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Institutional</a>
          <a href="/en/institucional/#vision"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Vision and mission</a>
          <a href="/en/institucional/#values"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Our values</a>
        </div>

        <div class="flex justify-center mt-6">
          <a href="https://www.open-bio.org/2021/01/13/metadocencia-2020-laura-acion/"
             target="_blank" rel="noopener" class="cta-tablero"
             style="display:inline-flex;align-items:center;gap:.5rem;padding:.6rem 1.15rem;border-radius:999px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#FFFFFF;font-weight:600;font-size:1rem;line-height:1.5;text-decoration:none;">
            Our origins
          </a>
        </div>
    design:
      background:
        image:
          filename: "que-hacemos.jpg"
          filters:
            brightness: 0.4
          size: cover
          position: center
          parallax: false
        text_color_light: true
        overlay_opacity: 0.65
        overlay_color: "#000"
      css_class: "hero-max-bounded"
      spacing:
        padding: ["0rem", 0, "0rem", 0]
      css_style: ""

  # ===== MetaDocencia by the Numbers =====
  - block: stats
    id: numeros
    content:
      title: "MetaDocencia by the Numbers"
      items:
        - statistic: "35+"
          description: "strategic partners"
        - statistic: "60+"
          description: "active collaborators"
        - statistic: "1,300+"
          description: "members on Slack"
        - statistic: "6,000+"
          description: "followers on social media"
        - statistic: "2,600+"
          description: "active newsletter subscribers"
        - statistic: "6+"
          description: "years together"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["0rem", 0, "0.25rem", 0]

  # ===== style =====
  - block: markdown
    id: estilos-collapsibles
    content:
      title: ""
      text: |
        <style>
          /* ===== Grilla 2→1 para el bloque de video/texto ===== */
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

          /* ===== Dark mode para el bloque "Vamos por 5 años más" ===== */
          :root.dark section#solutions {
            background: #00506F !important;
            color: #FFFFFF !important;
          }
          :root.dark section#solutions a { color:#FFFFFF !important; }

          /* ===== Márgenes de las secciones de personas ===== */
          section#equipo-y-consejo-asesor,
          section#colaboradores,
          section#anteriores,
          section#trust,
          section#comunidades-amigas,
          section#colaboraron-con-metadocencia {
            margin-top: .25rem !important;
            padding-top: .25rem !important;
          }
          section#equipo-y-consejo-asesor .mdnv-people-name,
          section#colaboradores .mdnv-people-name,
          section#trust .mdnv-people-name,
          section#anteriores .mdnv-people-name,
          section#comunidades-amigas .mdnv-people-name,
          section#colaboraron-con-metadocencia .mdnv-people-name {
            font-size: 0.95rem !important;
          }
          @media (max-width: 640px) {
            section#equipo-y-consejo-asesor .mdnv-people-name,
            section#colaboradores .mdnv-people-name,
            section#trust .mdnv-people-name,
            section#anteriores .mdnv-people-name,
            section#comunidades-amigas .mdnv-people-name,
            section#colaboraron-con-metadocencia .mdnv-people-name {
              font-size: 0.9rem !important;
            }
          }
        </style>

  # --- Team and Advisory Committee ---
  - block: markdown
    id: equipo-y-consejo-asesor
    content:
      title: "Team and Advisory Committee"
      text: |
        {{< people_list group="Team and Advisory Committee" columns=9 gapx="8rem" gapy="3rem" >}}

  # --- Contributors ---
  - block: markdown
    id: colaboradores
    content:
      title: "Contributors"
      text: |
        {{< people_list group="Contributors" columns=10 gapx="8rem" gapy="3rem" >}}

  # --- Fellow Communities ---
  - block: markdown
    id: comunidades-amigas
    content:
      title: "Fellow Communities"
      text: |
        {{< people_list group="Fellow Communities" columns=10 gapx="8rem" gapy="3rem" >}}
        
  # --- trust ---
  - block: markdown
    id: trust
    content:
      title: "They Trust MetaDocencia"
      text: |
        {{< people_list group="trust" columns=10 gapx="8rem" gapy="3rem" >}}

  # --- Former Contributors ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: "Former Contributors"
      text: |
        {{< people_list group="Former Contributors" columns=10 gapx="8rem" gapy="3rem" >}}


  # ===== style =====
  - block: markdown
    id: estilos-hero-qs
    content:
      title: ""
      text: |
        <style>
          /* Hide this section completely so it doesn't take up space */
          section#estilos-hero-qs {
            display: none !important;
            margin: 0 !important;
            padding: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          /* About us hero: taller and uncropped on mobile */
          @media (max-width: 768px) {
            section#hero-qs.hero-max-bounded,
            section#hero-qs.hero-max-bounded .hero-bg {
              max-height: none !important;   /* don't crop */
              min-height: 72vh !important;   /* more vertical room */
            }
            section#hero-qs .container {
              padding-top: 1.1rem !important;   /* extra breathing room */
              padding-bottom: 1.1rem !important;
            }
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---
