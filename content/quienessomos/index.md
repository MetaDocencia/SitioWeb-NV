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
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">Quiénes somos</span>'
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto">
          Somos una comunidad de personas y organizaciones que trabajan en red, de América Latina al mundo, desde 2020.
        </p>

        <!-- Botones centrados (3) -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <a href="/institucional#institucional"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Institucional</a>
          <a href="/institucional#vision"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Visión y Misión</a>
          <a href="/institucional#valores"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">Valores</a>
        </div>

        <div class="flex justify-center mt-6">
          <a href="/post/origenmd/" class="cta-tablero"
             style="display:inline-flex;align-items:center;gap:.5rem;padding:.6rem 1.15rem;border-radius:999px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#FFFFFF;font-weight:600;font-size:1rem;line-height:1.5;text-decoration:none;">
            Nuestros orígenes
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

  # ===== MetaDocencia en números =====
  - block: stats
    id: numeros
    content:
      title: "MetaDocencia en números"
      items:
        - statistic: "35+"
          description: "alianzas y patrocinadores"
        - statistic: "60+"
          description: "personas colaboran con MetaDocencia"
        - statistic: "1.300+"
          description: "integrantes en Slack"
        - statistic: "6.000+"
          description: "personas conectadas"
        - statistic: "2.600+"
          description: "suscripciones activas a nuestro boletín"
        - statistic: "6+"
          description: "años en comunidad"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["-3rem", 0, "3rem", 0]

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

          /* ===== Dark mode para el bloque "Vamos por 5 años más" ===== */
          :root.dark section#solutions {
            background: #00506F !important;
            color: #FFFFFF !important;
          }
          :root.dark section#solutions a { color:#FFFFFF !important; }

          /* ===== Márgenes de las secciones de personas ===== */
          section#equipo-y-consejo-asesor,
          section#colaboradores,
          section#confian,
          section#anteriores,
          section#comunidades-amigas,
          section#colaboraron-con-metadocencia {
            margin-top: .25rem !important;
            padding-top: .25rem !important;
          }
          section#equipo-y-consejo-asesor .mdnv-people-name,
          section#colaboradores .mdnv-people-name,
          section#anteriores .mdnv-people-name,
          section#confian .mdnv-people-name,
          section#comunidades-amigas .mdnv-people-name,
          section#colaboraron-con-metadocencia .mdnv-people-name {
            font-size: 0.95rem !important;
          }
          @media (max-width: 640px) {
            section#equipo-y-consejo-asesor .mdnv-people-name,
            section#colaboradores .mdnv-people-name,
            section#confian .mdnv-people-name,
            section#anteriores .mdnv-people-name,
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
      title: "Equipo y Consejo Asesor"
      text: |
        {{< people_list group="Equipo y Consejo Asesor" columns=9 gapx="8rem" gapy="3rem" >}}

  # --- Colaboran con MetaDocencia ---
  - block: markdown
    id: colaboradores
    content:
      title: "Colaboran con MetaDocencia"
      text: |
        {{< people_list group="Colaboradores" columns=10 gapx="8rem" gapy="3rem" >}}

  # --- Comunidades Amigas ---
  - block: markdown
    id: comunidades-amigas
    content:
      title: "Comunidades Amigas"
      text: |
        {{< people_list group="Comunidades amigas" columns=10 gapx="8rem" gapy="3rem" >}}

  # --- confian ---
  - block: markdown
    id: confian
    content:
      title: "Confían en MetaDocencia"
      text: |
        {{< people_list group="Confían en MetaDocencia" columns=10 gapx="8rem" gapy="3rem" >}}

  # --- Colaboraron con MetaDocencia ---
  - block: markdown
    id: colaboraron-con-metadocencia
    content:
      title: "Colaboraron con MetaDocencia"
      text: |
        {{< people_list group="Colaboraron con MetaDocencia" columns=10 gapx="8rem" gapy="3rem" >}}

  # ===== Estilos locales SOLO para este hero (bloque invisible) =====
  - block: markdown
    id: estilos-hero-qs
    content:
      title: ""
      text: |
        <style>
          /* Ocultar este section (no ocupa espacio) */
          section#estilos-hero-qs { display:none !important; margin:0 !important; padding:0 !important; height:0 !important; overflow:hidden !important; }

          /* Quienes somos → hero más alto y sin recortes en móvil */
          @media (max-width: 768px) {
            section#hero-qs.hero-max-bounded,
            section#hero-qs.hero-max-bounded .hero-bg {
              max-height: none !important;   /* ← no recortar */
              min-height: 72vh !important;   /* ← más alto que antes */
            }
            section#hero-qs .container {
              padding-top: 1.1rem !important;   /* más respiro */
              padding-bottom: 1.1rem !important;
            }
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---
