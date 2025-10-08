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

  # ---------- Slack (markdown, imagen IZQUIERDA + texto DERECHA, CSS base) ----------
  - block: markdown
    id: slack
    content:
      title: "Súmate a nuestra comunidad en Slack"
      text: |
        <style>
          /* Contenedor coherente con el resto del sitio */
          section#slack .container {
            max-width: 1100px !important;
            margin-left: auto; margin-right: auto;
            padding-left: clamp(0.75rem, 3vw, 1.5rem) !important;
            padding-right: clamp(0.75rem, 3vw, 1.5rem) !important;
          }
          /* Grid 2 columnas en desktop, 1 en mobile */
          section#slack [data-2col] {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(1rem, 3vw, 2rem);
            align-items: center;
          }
          @media (max-width: 768px) {
            section#slack [data-2col] { grid-template-columns: 1fr; }
          }
          /* Imagen controlada (más chica) a la IZQUIERDA */
          section#slack .img-wrap {
            text-align: left;
          }
          section#slack .img-wrap img {
            width: clamp(220px, 34vw, 360px);
            height: auto;
            display: inline-block;
          }
          /* Texto con padding lateral suave */
          section#slack .text-wrap {
            padding-left: clamp(0.25rem, 2vw, 0.75rem);
            padding-right: clamp(0.25rem, 2vw, 0.75rem);
          }
          /* Botón de acción simple (no subrayado) */
          section#slack .cta-btn {
            display: inline-block;
            text-decoration: none;
            font-weight: 600;
            padding: .6rem 1rem;
            border-radius: .5rem;
            background: #111827;
            color: #FFFFFF;
          }
        </style>

        <div class="container">
          <div data-2col>
            <!-- Columna IZQUIERDA: Imagen -->
            <div class="img-wrap">
              <img src="/media/slack.png" alt="Slack de MetaDocencia">
            </div>

            <!-- Columna DERECHA: Texto + enlaces -->
            <div class="text-wrap">
              Conecta con más de <strong>+1070 personas</strong> que comparten interés por la <strong>educación</strong>,
              la <strong>ciencia abierta</strong> y la <strong>colaboración</strong>. Comparte experiencias, aprende de
              otros y participa de conversaciones que inspiran nuevas ideas.

              <p class="mt-3">
                <a href="/post/20231219-mdenslack/" class="underline font-semibold">Qué es y cómo sumarme</a>
              </p>

              <p class="mt-3">
                <a href="https://w3id.org/metadocencia/slack" class="cta-btn">Unirme al espacio de MetaDocencia</a>
              </p>
            </div>
          </div>
        </div>
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
        <style>
          /* Fuerza links blancos en TODO el bloque */
          section#auspiciantes a { color:#FFFFFF !important; font-weight:600; text-decoration: underline; }
        </style>
        Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.  
        <a href="/quienes-somos/#auspiciantes">Conoce a nuestros auspiciantes</a>
        Si tu organización comparte nuestra misión, escríbenos a
        <a href="mailto:direccion@metadocencia.org">direccion@metadocencia.org</a>
        para explorar cómo colaborar.
        Puedes hacer tu aporte a través de nuestro
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
          <p>Acompáñanos en nuestras redes sociales y seguinos para no perderte novedades, debates y recursos: <strong style="color:#FFFFFF">@metadocencia</strong></p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3">
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Twitter</a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">LinkedIn</a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">YouTube</a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Instagram</a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://mastodon.social/@metadocencia" target="_blank" rel="me noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Mastodon</a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://bsky.app/profile/metadocencia.org" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">Bluesky</a>
          </div>
        </div>
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#C83737;color:#FFFFFF;"
---
