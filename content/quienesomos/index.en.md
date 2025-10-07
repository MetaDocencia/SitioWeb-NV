---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:
  # ===== HERO con imagen de fondo + botones centrados =====
  - block: hero
    id: hero-qs
    content:
      title: '<span class="block text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">About us</span>'
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto">
          MetaDocencia is an organization founded in 2020. Our community is made up of individuals and organizations dedicated to building local scientific capacity to transform global science. We foster networked knowledge, growing from Latin America to the world.
        </p>

        <!-- Botones centrados (3) -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <a href="/en/institucional"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Institutional</a>
          <a href="/en/institucional#vision"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Mission and Vission</a>
          <a href="/en/institucional#valores"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Our Values</a>
        </div>

        <div class="mt-4 space-y-2 text-center">
          <p class="text-white/95 text-base md:text-lg">
            <a href="https://www.open-bio.org/2021/01/13/metadocencia-2020-laura-acion/" class="underline font-semibold text-white">Read about how MetaDocencia was founded</a> in the words of our Co-Director, Laura Ación.
          </p>
        </div>
    design:
      background:
        image:
          filename: "que-hacemos.jpg"
          filters:
            brightness: 0.4
          size: cover
          position: center
          parallax: true
        text_color_light: true
        overlay_opacity: 0.65
        overlay_color: "#000"
      css_class: "hero-max-bounded"
      spacing:
        padding: ["0rem", 0, "0rem", 0]
      css_style: ""

  # ===== Vamos por 5 años más (texto + video) =====
  - block: markdown
    id: solutions
    content:
      title: ""
      text: |-
        <!-- Breakout full-bleed que ignora el wrapper central del tema -->
        <div style="position:relative; left:50%; right:50%; margin-left:-50vw; margin-right:-50vw; width:100vw;">
          <!-- Contenido centrado y con respiro lateral -->
          <div style="max-width:1600px; margin:0 auto; padding-left:clamp(1rem, 4vw, 3rem); padding-right:clamp(1rem, 4vw, 3rem);">
            <div data-2col>
              <!-- Columna izquierda: TÍTULO + texto -->
              <div class="mdnv-vcenter mdnv-text-pad">
                <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                  Join us for 5 more wonderful years!
                </h2>
                <p>
                  During these five years, we built ties between more than 2,000 researchers and technicians. We did this by working as a team, collectively, and collaborating with more than 40 communities. Thank you for these first 5 years.
                </p>
              </div>
              <!-- Columna derecha: video 16:9 -->
              <div data-16x9>
                <iframe
                  src="https://www.youtube.com/embed/bj59_0v2a1U"
                  title="MetaDocencia - 5 years"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
    design:
      # Light mode: fondo claro / texto oscuro
      css_style: "background:#FFFFFF;color:#111827;"
      spacing:
        padding: ["2rem", 0, "1.25rem", 0]

  # ===== MetaDocencia en números =====
  - block: stats
    id: numeros
    content:
      title: "MetaDocencia by the Numbers"
      items:
        - statistic: "40+"
          description: "strategic partners and sponsors"
        - statistic: "60+"
          description: "collaborators"
        - statistic: "1,070+"
          description: "members on Slack"
        - statistic: "6,000+"
          description: "followers on social media"
        - statistic: "2,600+"
          description: "active newsletter subscribers"
        - statistic: "10%+"
          description: "engagement rate (LinkedIn 2025)"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["0rem", 0, "0.25rem", 0]

  # ===== Estilos LOCALES solo para esta página =====
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

          /* ===== Dark mode para el bloque "Vamos por 5 años más" =====
             Fondo oscuro y texto blanco, como el bloque de auspiciantes */
          :root.dark section#solutions {
            background: #00506F !important;
            color: #FFFFFF !important;
          }
          :root.dark section#solutions a { color:#FFFFFF !important; }

          /* ===== Colapsables y márgenes (sin tocar tipografías globales) ===== */
          .mdnv-collapsible > summary::-webkit-details-marker { display: none; }
          .mdnv-collapsible > summary::after {
            content: "▾";
            margin-left: .5rem;
            display: inline-block;
            transition: transform .15s ease;
          }
          .mdnv-collapsible[open] > summary::after { transform: rotate(180deg); }
          .mdnv-collapsible { margin-top: .25rem; margin-bottom: .65rem; }
          .mdnv-collapsible[open] { margin-bottom: 1rem; }
          section#equipo-y-consejo-asesor,
          section#colaboradores,
          section#auspiciantes,
          section#comunidades-amigas,
          section#colaboraron-con-metadocencia {
            margin-top: .25rem !important;
            padding-top: .25rem !important;
          }
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
            {{< people_list group="Team and Advisory Committee" columns=9 gapx="8rem" gapy="3rem" >}}
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
            {{< people_list group="Current" columns=5 gapx="12rem" gapy="3rem" >}}
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
            {{< people_list group="Fellow Communities" columns=10 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Colaboraron con MetaDocencia ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: "Former Contributors"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Former Contributors" columns=10 gapx="8rem" gapy="3rem" >}}
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
            bg="#C83737" fg="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#C83737"
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
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]

  # ===== Estilos locales SOLO para este hero (bloque invisible) =====
  - block: markdown
    id: estilos-hero-qs
    content:
      title: ""
      text: |
        <style>
          /* Ocultar COMPLETAMENTE este section para no ocupar espacio */
          section#estilos-hero-qs {
            display: none !important;
            margin: 0 !important;
            padding: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          /* Solo Quienes somos: #hero-qs (ajustes de alto en móvil) */
          @media (max-width: 768px) {
            section#hero-qs.hero-max-bounded,
            section#hero-qs.hero-max-bounded .hero-bg {
              max-height: 64vh;
              min-height: 44vh;
            }
            section#hero-qs .container {
              padding-top: .75rem !important;
              padding-bottom: .75rem !important;
            }
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---
