---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ---------- Boletín (1 columna: título, texto, form y link debajo) ----------
  - block: cta-card
    id: boletin-embed
    content:
      title: "Boletín MetaDocencia"
      text: |
        <div class="mx-auto max-w-3xl text-white">
          <p class="text-lg leading-relaxed mb-4">
            Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
          </p>

          <!-- Formulario embebido -->
          <div class="mt-2">
            {{< mc_form >}}
          </div>

          <!-- Link centrado, blanco, en bold -->
          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
              Ver ediciones anteriores
            </a>
          </p>
        </div>
    design:
      card:
        css_class: ""
        css_style: "background-color:#00506F;color:#FFFFFF;"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: [0, 0, 0, 0]

 # ---------- Slack (cta-image-paragraph con más margen lateral e imagen centrada) ----------
  - block: cta-image-paragraph
    id: slack
    content:
      items:
        - title: "Súmate a nuestra comunidad en Slack"
          text: |
            <!-- Estilos locales SOLO para este section -->
            <style>
              /* Contenedor más angosto en desktop/tablet para generar mayor margen lateral */
              section#slack .container {
                max-width: 1000px !important;          /* ajusta si quieres más/menos margen */
                padding-left: clamp(1rem, 4vw, 2rem) !important;
                padding-right: clamp(1rem, 4vw, 2rem) !important;
              }
  
              /* Imagen al 40% en desktop/tablet y 100% en móvil, centrada en su columna */
              section#slack img {
                width: 40% !important;
                max-width: 40% !important;
                height: auto !important;
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important; /* centra horizontalmente */
              }
              @media (max-width: 768px) {
                section#slack img {
                  width: 100% !important;
                  max-width: 100% !important;
                }
              }
            </style>
  
            Conecta con más de <strong>+1070 personas</strong> que comparten interés por la <strong>educación</strong>, la <strong>ciencia abierta</strong>
            y la <strong>colaboración</strong>. Comparte experiencias, aprende de otros y participa de conversaciones que inspiran nuevas ideas.
  
            <p class="mt-3">
              <a href="https://mdnv.netlify.app/post/20231219-mdenslack/" class="underline font-semibold">Qué es y cómo sumarme</a>
            </p>
          image: "slack.png"
          button:
            text: "Unirme al espacio de MetaDocencia"
            url: "https://w3id.org/metadocencia/slack"
    design:
      css_style: "background-color:#FFFFFF;color:#111827;"



  # ---------- Comunidades amigas (sin logos) ----------
  - block: cta-card
    id: comunidades
    content:
      title: "Comunidades amigas"
      text: |
        Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.  
        <a href="https://mdnv.netlify.app/quienes-somos/#comunidades-amigas" class="underline font-semibold" style="color:#FFFFFF">Conoce la red de comunidades</a>
      button:
        text: "Suma tu comunidad"
        url: "mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"

  # ---------- Apoya a MetaDocencia (sin logos) ----------
  - block: cta-card
    id: auspiciantes
    content:
      title: "Apoya a MetaDocencia"
      text: |
        <!-- Fuerza links blancos en TODO el bloque -->
        <style>
          section#auspiciantes a { color:#FFFFFF !important; font-weight:600; text-decoration: underline; }
        </style>

        Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.  
        <a href="https://mdnv.netlify.app/quienes-somos/#auspiciantes">Conoce a nuestros auspiciantes</a>

        Si tu organización comparte nuestra misión, escribinos a
        <a href="mailto:direccion@metadocencia.org">direccion@metadocencia.org</a>
        para explorar cómo colaborar.

        Podés hacer tu aporte a través de nuestro
        <a href="https://www.metadocencia.org/donar/">formulario de donación</a>
        y ayudarnos a sostener y ampliar nuestras actividades.
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#00506F;color:#FFFFFF;"

  # ---------- Redes (botones clicables en grid) ----------
  - block: cta-card
    id: redes
    content:
      title: "Sigue el intercambio"
      text: |
        <div style="color:#FFFFFF">
          <p>Acompañanos en nuestras redes sociales y seguinos para no perderte novedades, debates y recursos: <strong style="color:#FFFFFF">@metadocencia</strong></p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3">
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Twitter
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               LinkedIn
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               YouTube
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Instagram
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://mastodon.social/@metadocencia" target="_blank" rel="me noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Mastodon
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://bsky.app/profile/metadocencia.org" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Bluesky
            </a>
          </div>
        </div>
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#C83737;color:#FFFFFF;"
---
