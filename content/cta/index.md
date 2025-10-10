---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:
  - block: cta-card
    id: boletin-embed
    content:
      title: "Boletín MetaDocencia"
      text: |
        <div class="mx-auto max-w-3xl text-white">
          <p class="text-lg leading-relaxed mb-4">
            Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
          </p>
          <div class="mt-2">
            {{< mc_form >}}
          </div>
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

  - block: markdown
    id: slack
    content:
      title: ""   # el título se muestra dentro de la columna de texto
      text: |
        <style>
          /* Texto un poco más grande (término medio) dentro de este bloque */
          section#slack p { font-size: 1.05rem; line-height: 1.65; }
          /* Tamaño del título controlado */
          section#slack h2 { font-size: clamp(1.25rem, 2.2vw, 1.6rem); }
  
          /* Botón rojo (solo en esta sección) */
          section#slack .btn-slack {
            display:inline-block; text-decoration:none; color:#FFFFFF !important;
            background:#C83737; padding:.6rem 1.1rem; border-radius:.375rem;
          }
          section#slack .btn-slack:hover { filter: brightness(1.05); }
  
          /* --- Ajustes móviles --- */
          @media (max-width: 640px) {
            /* Asegurar que el logo se vea en móvil (por si el shortcode lo oculta) */
            section#slack img[alt="Slack de MetaDocencia"] {
              display:block !important;
              width: 70% !important;               /* ancho relativo amigable */
              max-width: 220px !important;         /* límite razonable en móvil */
              height:auto !important;
              margin: 0 auto 12px !important;      /* centrado + espacio inferior */
            }
  
            /* Márgenes laterales “de unos píxeles” para título, párrafos y CTAs */
            section#slack .slack-pad > * {
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
          }
        </style>
  
        {{< two_col
             image="/media/slack.png"
             side="img-left"
             mode="full"
             maxw="1100px"
             px="clamp(3rem,8vw,8rem)"
             gap="clamp(1rem,3vw,1rem)"
             imgw="266px"          # 30% más chico (antes 380px)
             alt="Slack de MetaDocencia"
        >}}
          <!-- Envolvemos todo el contenido textual en .slack-pad para dar padding en móvil -->
          <div class="slack-pad">
            <h2 class="section-title" style="margin-top:0;margin-bottom:.5rem;">Súmate a nuestra comunidad en Slack</h2>
  
            <p>
              Conecta con más de <strong>+1070 personas</strong> que comparten interés por la
              <strong>educación</strong>, la <strong>ciencia abierta</strong> y la <strong>colaboración</strong>.
              Comparte experiencias, aprende de otros y participa de conversaciones que inspiran nuevas ideas.
            </p>
  
            <!-- Botón rojo arriba -->
            <p class="mt-4">
              <a href="https://w3id.org/metadocencia/slack" class="btn-slack">
                Unirme al espacio de MetaDocencia
              </a>
            </p>
  
            <!-- Enlace informativo debajo -->
            <p class="mt-3">
              <a href="/post/20231219-mdenslack/" class="underline font-semibold">
                Qué es y cómo sumarme
              </a>
            </p>
          </div>
        {{< /two_col >}}
    design:
      css_style: "background-color:#FFFFFF;color:#111827;"

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

  - block: cta-card
    id: auspiciantes
    content:
      title: "Apoya a MetaDocencia"
      text: |
        <style>section#auspiciantes a { color:#FFFFFF !important; font-weight:600; text-decoration: underline; }</style>
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
