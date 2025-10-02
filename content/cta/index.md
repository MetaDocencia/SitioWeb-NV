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

# ---------- Slack (cta-image-paragraph con margen lateral amplio, imagen 40% y a la derecha) ----------
  - block: cta-image-paragraph
    id: slack
    content:
      items:
        - title: "Súmate a nuestra comunidad en Slack"
          text: |
            <!-- Estilos locales SOLO para este section -->
            <style>
              /* Igualar ancho al de cta-card (mismo que usamos en otros CTAs) */
              section#slack .container {
                max-width: 1100px !important;              /* ⇦ mismo ancho “card” */
                padding-left: clamp(1rem, 4vw, 2rem) !important;
                padding-right: clamp(1rem, 4vw, 2rem) !important;
              }
  
              /* Dos columnas iguales y separación coherente */
              section#slack [data-2col],
              section#slack .flex, /* fallback si el bloque usa flex */
              section#slack .grid { 
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: clamp(1rem, 3vw, 2rem) !important;
                align-items: center !important;
              }
  
              /* --- Fallback universal para pasar la imagen a la DERECHA ---
                 Asumimos que el HTML renderiza primero el texto y luego la imagen.
                 Invertimos el orden con CSS en desktop y tablet. */
              @media (min-width: 769px) {
                section#slack [data-2col] > *:first-child { order: 2 !important; } /* texto */
                section#slack [data-2col] > *:last-child  { order: 1 !important; } /* imagen */
              }
  
              /* Imagen SIEMPRE al 40% y centrada en su columna (desktop y móvil) */
              section#slack img {
                width: 40% !important;
                max-width: 40% !important;
                height: auto !important;
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important;
              }
  
              /* En móviles mantenemos 40% y apilamos */
              @media (max-width: 768px) {
                section#slack [data-2col],
                section#slack .grid {
                  grid-template-columns: 1fr !important;
                }
                /* En mobile dejamos el orden natural: texto arriba, imagen abajo */
                section#slack [data-2col] > *:first-child { order: 1 !important; }
                section#slack [data-2col] > *:last-child  { order: 2 !important; }
              }
            </style>
  
            Conecta con más de <strong>+1070 personas</strong> que comparten interés por la <strong>educación</strong>, la <strong>ciencia abierta</strong>
            y la <strong>colaboración</strong>. Comparte experiencias, aprende de otros y participa de conversaciones que inspiran nuevas ideas.
  
            <p class="mt-3">
              <a href="https://mdnv.netlify.app/post/20231219-mdenslack/" class="underline font-semibold">Qué es y cómo sumarme</a>
            </p>
          image: "slack.png"
          image_position: right   # ⇦ si tu tema lo soporta, esto coloca la imagen a la derecha
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
