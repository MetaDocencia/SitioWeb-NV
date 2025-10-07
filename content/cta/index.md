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
            <a href="/boletines/" class="underline font-semibold" style="color:#FFFFFF">
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
            <!-- Estilos locales SOLO para esta sección -->
            <style>
              /* Contenedor alineado con otras CTAs tipo “card” */
              section#slack .container {
                max-width: 1100px !important;
                padding-left: clamp(1rem, 4vw, 2rem) !important;
                padding-right: clamp(1rem, 4vw, 2rem) !important;
              }
  
              /* Dos columnas, imagen a la derecha en desktop */
              section#slack [data-2col],
              section#slack .flex,
              section#slack .grid {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: clamp(1rem, 3vw, 2rem) !important;
                align-items: center !important;
              }
              @media (min-width: 769px) {
                section#slack [data-2col] > *:first-child { order: 2 !important; } /* texto */
                section#slack [data-2col] > *:last-child  { order: 1 !important; } /* imagen */
              }
              @media (max-width: 768px) {
                section#slack [data-2col], section#slack .grid { grid-template-columns: 1fr !important; }
                section#slack [data-2col] > *:first-child { order: 1 !important; }
                section#slack [data-2col] > *:last-child  { order: 2 !important; }
              }
  
              /* Imagen al 40% y centrada */
              section#slack img {
                width: 40% !important; max-width: 40% !important; height: auto !important;
                display: block !important; margin-left: auto !important; margin-right: auto !important;
              }
  
              /* Pila vertical y espaciado del contenido de texto */
              section#slack .slack-stack { display: flex; flex-direction: column; gap: 0.9rem; }
  
              /* ======= Unificar botón con el resto (usar look nativo del tema) ======= */
              /* Opción A (si tu tema usa variable): forzamos el primario solo en #slack */
              section#slack { --color-primary: #C83737; } /* si el tema la respeta, listo */
  
              /* Opción B (fallback universal): solo color, sin sombra extra ni bold custom */
              section#slack a.btn.btn-primary {
                background-color: #C83737 !important;
                border-color: #C83737 !important;
                box-shadow: none !important;   /* sin sombra */
                /* No tocamos font-weight ni border-radius: heredan del tema */
              }
              section#slack a.btn.btn-primary:hover,
              section#slack a.btn.btn-primary:focus {
                background-color: #A92F2F !important;  /* tono hover */
                border-color: #A92F2F !important;
                box-shadow: none !important;
              }
  
              /* Enlace secundario: discreto, tipo link bajo el botón */
              section#slack .btn-secondary-link {
                text-decoration: underline;
                font-weight: 600;
              }
            </style>
  
            <div class="slack-stack">
              <p>Conecta con más de <strong>+1070 personas</strong> que comparten interés por la <strong>educación</strong>, la <strong>ciencia abierta</strong>
              y la <strong>colaboración</strong>. Comparte experiencias, aprende de otros y participa de conversaciones que inspiran nuevas ideas.</p>
  
              <!-- Botón principal UNIFICADO con el tema -->
              <p>
                <a class="btn btn-primary" href="https://w3id.org/metadocencia/slack">
                  Unirme al espacio de MetaDocencia
                </a>
              </p>
  
              <!-- Enlace secundario debajo -->
              <p class="mt-1">
                <a class="btn-secondary-link" href="/post/20231219-mdenslack/">
                  Qué es Slack y cómo puedo sumarme a la conversación
                </a>
              </p>
            </div>
          image: "slack.png"
          image_position: right
          # Importante: no usar la clave "button:" para mantener el orden deseado.
    design:
      css_style: "background-color:#FFFFFF;color:#111827;"


  # ---------- Comunidades amigas (sin logos) ----------
  - block: cta-card
    id: comunidades
    content:
      title: "Comunidades amigas"
      text: |
        Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.  
        <a href="/quienes-somos/#comunidades-amigas" class="underline font-semibold" style="color:#FFFFFF">Conoce la red de comunidades</a>
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
        <a href="/quienes-somos/#auspiciantes">Conoce a nuestros auspiciantes</a>

        Si tu organización comparte nuestra misión, escribinos a
        <a href="mailto:direccion@metadocencia.org">direccion@metadocencia.org</a>
        para explorar cómo colaborar.

        Podés hacer tu aporte a través de nuestro
        <a href="/donar/">formulario de donación</a>
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
