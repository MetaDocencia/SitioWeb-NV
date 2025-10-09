---
title: "Home"
date: 2023-10-24
type: landing
translationKey: "home"
design:
  spacing: "6rem"

sections:
  - block: hero
    id: hero-home
    content:
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">Potenciemos la presencia de América Latina en la ciencia global</span>'
      text: |
        <p class="text-white text-xl md:text-2xl">
          <span class="block">Más colaboración.</span>
          <span class="block">Menos barreras para saberes que transforman.</span>
        </p>
        <a href="/cta"
           class="inline-block mt-6 text-lg md:text-xl font-extrabold px-7 py-4 rounded-2xl shadow-lg no-underline
                  bg-[#C83737] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C83737]
                  text-white">
          Súmate
        </a>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark hero-max-bounded"
      background:
        color: "navy"
        image:
          filename: "quienes-somos.jpg"
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: true
        text_color_light: true
  # === QUIÉNES SOMOS / QUÉ HACEMOS (sin fondo gris) ===
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "Quiénes somos"
          text: "MetaDocencia es una organización fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades locales para transformar la ciencia global. Hacemos crecer el conocimiento en red, desde América Latina hacia el mundo."
          image: "quienessomos.jpg"
          button:
            text: "Conócenos"
            url: "/quienes-somos"
        - title: "Qué hacemos"
          text: "Trabajamos para que la producción, la comunicación y la aplicación de saberes científicos y técnicos sean globalmente equitativos."
          feature_icon: check
          features:
            - "Impulsamos infraestructura"
            - "Formamos capacidades"
            - "Construimos comunidad"
          image: "circuloES.png"
          button:
            text: "Lee más sobre nuestros proyectos"
            url: "/que-hacemos"
    design:
      css_class: "features-unify"

  - block: stats
    content:
      items:
        - statistic: "+200"
          description: |
            documentos  
            en Zenodo
        - statistic: "+1500"
          description: |
            personas  
            formadas
        - statistic: "+1070"
          description: |
            integrantes  
            en Slack
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
          role: "Directora Senior de programas de CZI, tras co-organizar el [primer evento de CZI Open Science en Latinoamérica](https://chanzuckerberg.com/blog/open-science-latin-america-argentina/)"
          text: |
            Estoy impresionada por la profesionalidad, la consideración y la amabilidad de todo el equipo de MetaDocencia. Ha sido un placer poder trabajar con ustedes.
        - name: "Julio Zetter"
          role: "Coordinador en Jefe de la base de datos y hemeroteca virtual SciELO México, luego de participar de nuestra formación en Ciencia Abierta"
          text: |
            No cabe más que agradecer a los instructores que hicieron posible este curso, que sin duda es la semilla de grandes frutos. Gracias por tanto MetaDocencia.
    design:
      spacing:
        padding: ["6rem", 0, 0, 0]

  # --- Equipo y CA ---
  - block: markdown
    id: equipo-y-consejo-asesor
    content:
      title: "Equipo y Consejo Asesor"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Equipo y Consejo Asesor" columns=9 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Auspiciantes ---
  - block: markdown
    id: colaboradores
    content:
      title: "Colaboran con MetaDocencia"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="colaboradores" columns=5 gapx="12rem" gapy="3rem" >}}
          </div>
        </details>

  # --- Comunidades Amigas (gris claro) ---
  - block: markdown
    id: comunidades-amigas
    content:
      title: "Comunidades Amigas"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Comunidades amigas" columns=10 gapx="8rem" gapy="3rem" >}}
          </div>
        </details>
        
  # --- Confían en MetaDocencia ---
  - block: markdown
    id: confian
    content:
      title: "Confían en MetaDocencia"
      text: |
        <details class="mdnv-collapsible" open>
          <summary class="cursor-pointer select-none text-sm opacity-80">Mostrar/ocultar</summary>
          <div class="mt-2">
            {{< people_list group="Confían en MetaDocencia" columns=10 gapx="8rem" gapy="3rem" >}}
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
            title="Apoya a la ciencia latinoamericana"
            text=""
            button_text="Aquí te contamos cómo"
            button_url="/cta/"
            bg="#C83737" color="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#C83737"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
            inner="raw"
        >}}
        <p>Nuestras redes:</p>
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

  # ===== Estilos LOCALES solo para esta página (bloque invisible) =====
  - block: markdown
    id: estilos-collapsibles
    content:
      title: ""
      text: |
        <style>
          /* Ocultar el propio bloque de estilos para que no agregue espacio */
          section#estilos-collapsibles { display:none !important; margin:0 !important; padding:0 !important; height:0 !important; overflow:hidden !important; }

          /* ===== Ajuste de márgenes de secciones de logos ===== */
          section#equipo-y-consejo-asesor,
          section#confian,
          section#auspiciantes,
          section#comunidades-amigas,
          section#colaboraron-con-metadocencia {
            margin-top: .15rem !important;  
            margin-bottom: .5rem !important;
            padding-top: .25rem !important; /* pequeño respiro interno arriba */
          }

          /* Compactar espacio propio de los colapsables */
          .mdnv-collapsible { margin-top: .35rem; margin-bottom: .4rem; }
          .mdnv-collapsible[open] { margin-bottom: .6rem; }

          /* ====== Grid 2→1, con centrado vertical solo del texto ====== */
          [data-2col] { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; align-items:stretch; }
          @media (max-width: 900px) { [data-2col] { grid-template-columns: 1fr; } }
          .mdnv-vcenter { display:flex; flex-direction:column; justify-content:center; }
          .mdnv-text-pad { padding-left:clamp(.5rem, 3vw, 2rem); padding-right:clamp(.5rem, 3vw, 2rem); }

          /* Wrapper 16:9 para iframes */
          [data-16x9]{ position:relative; width:100%; padding-top:56.25%; border-radius:.5rem; overflow:hidden; }
          [data-16x9] iframe{ position:absolute; inset:0; width:100%; height:100%; border:0; border-radius:.5rem; }

          /* Estética de los toggles */
          .mdnv-collapsible > summary::-webkit-details-marker { display:none; }
          .mdnv-collapsible > summary::after { content:"▾"; margin-left:.5rem; display:inline-block; transition:transform .15s ease; }
          .mdnv-collapsible[open] > summary::after { transform:rotate(180deg); }

          /* Tipos en nombres */
          section#equipo-y-consejo-asesor .mdnv-people-name,
          section#confian .mdnv-people-name,
          section#auspiciantes .mdnv-people-name,
          section#comunidades-amigas .mdnv-people-name,
          section#colaboraron-con-metadocencia .mdnv-people-name { font-size:0.95rem !important; }
          @media (max-width: 640px) {
            section#equipo-y-consejo-asesor .mdnv-people-name,
            section#confian .mdnv-people-name,
            section#auspiciantes .mdnv-people-name,
            section#comunidades-amigas .mdnv-people-name,
            section#colaboraron-con-metadocencia .mdnv-people-name { font-size:0.9rem !important; }
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]

  # ===== Estilos del HERO (bloque invisible) =====
  - block: markdown
    id: estilos-hero-home
    content:
      title: ""
      text: |
        <style>
          section#estilos-hero-home { display:none !important; margin:0 !important; padding:0 !important; height:0 !important; overflow:hidden !important; }

          section#hero-home.hero-max-bounded,
          section#hero-home.hero-max-bounded .hero-bg { max-height: 90vh; min-height: 70vh; }
          @media (max-width: 768px) {
            section#hero-home.hero-max-bounded,
            section#hero-home.hero-max-bounded .hero-bg { max-height: 90vh; min-height: 44vh; }
            section#hero-home .container { padding-top:.75rem !important; padding-bottom:.75rem !important; }
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
---
