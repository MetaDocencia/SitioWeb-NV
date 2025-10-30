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
          /* === Forzar fondo blanco y texto oscuro (incluye modo oscuro) === */
          section#slack { background-color:#FFFFFF !important; }
          .dark section#slack { background-color:#FFFFFF !important; }

          /* Colores de texto base */
          section#slack :where(h1,h2,h3,h4,h5,h6,p,li,span,a,strong,em) {
            color:#111827 !important;
          }
          .dark section#slack :where(h1,h2,h3,h4,h5,h6,p,li,span,a,strong,em) {
            color:#111827 !important;
          }

          /* Enlaces (excepto botón principal) */
          section#slack a:not(.btn-slack) {
            color:#111827 !important;
            text-decoration: underline;
            font-weight: 600;
          }

          /* Tipografía */
          section#slack p { font-size: 1.05rem; line-height: 1.65; }
          section#slack h2 { font-size: clamp(1.25rem, 2.2vw, 1.6rem); margin-top:0; margin-bottom:.5rem; }

          /* Botón rojo principal */
          section#slack .btn-slack {
            display:inline-block; text-decoration:none; color:#FFFFFF !important;
            background:#C83737; padding:.6rem 1.1rem; border-radius:.375rem; font-weight:600;
          }
          section#slack .btn-slack:hover { filter: brightness(1.05); }

          /* === SOLO MÓVIL: ocultar imagen y centrar texto === */
          @media (max-width: 768px) {
            section#slack img { display: none !important; }
            section#slack .slack-text { text-align: center !important; }
            section#slack .slack-text p { margin-left:auto; margin-right:auto; }
          }
        </style>

        {{< two_col
             image="/media/slack.png"
             side="img-left"
             mode="full"
             maxw="1100px"
             px="clamp(3rem,8vw,8rem)"
             gap="clamp(1rem,3vw,1rem)"
             imgw="266px"
             alt="Slack de MetaDocencia"
        >}}
        <div class="slack-text">
          <h2 class="section-title">Súmate a nuestra comunidad en Slack</h2>

          <p>
            Conecta con más de <strong>1.070 personas</strong> que comparten interés por la
            <strong>educación</strong>, la <strong>ciencia abierta</strong> y la <strong>colaboración</strong>.<br>
            Comparte experiencias, aprende de otras personas y participa de conversaciones que inspiran nuevas ideas.
          </p>

          <p class="mt-4">
            <a href="https://w3id.org/metadocencia/slack" class="btn-slack">
              Unirme al espacio de MetaDocencia
            </a>
          </p>

          <p class="mt-3">
            <a href="/post/20231219-mdenslack/">
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
        <style>
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

  - block: cta-card
    id: redes
    content:
      title: "Sigue el intercambio"
      text: |
        <div style="color:#FFFFFF">
          <p>Acompáñanos en nuestras redes sociales y síguenos para no perderte novedades, debates y recursos: <strong style="color:#FFFFFF">@metadocencia</strong></p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3">
            <a class="flex items-center justify-center text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Twitter
            </a>
            <a class="flex items-center justify-center text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               LinkedIn
            </a>
            <a class="flex items-center justify-center text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               YouTube
            </a>
            <a class="flex items-center justify-center text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Instagram
            </a>
            <a class="flex items-center justify-center text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://floss.social/@MetaDocencia" target="_blank" rel="me noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Mastodon
            </a>
            <a class="flex items-center justify-center text-center no-underline font-semibold px-3 py-2 rounded-full"
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
