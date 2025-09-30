---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ===== Estilos locales: logos (Comunidades & Auspiciantes) =====
  - block: markdown
    id: estilos-logos
    content:
      title: ""
      text: |
        <style>
          /* Quitar espacio vertical extra de estos bloques */
          section#boletin-embed, section#slack, section#comunidades,
          section#auspiciantes, section#redes {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          /* Ajustes generales para secciones con logos */
          section#comunidades,
          section#auspiciantes {
            --mdnv-logo-size: clamp(56px, 9vw, 92px);   /* tamaño de los círculos */
            --mdnv-gap: clamp(0.6rem, 2.2vw, 1.25rem);  /* separación consistente */
            color: #FFFFFF !important;                  /* texto en blanco */
          }
          section#comunidades a,
          section#auspiciantes a {
            color: #FFFFFF !important;                  /* enlaces en blanco por defecto */
          }

          /* Scope SOLO dentro de la grilla de logos para no tocar otros textos/enlaces */
          section#comunidades .mdnv-logos .grid,
          section#auspiciantes .mdnv-logos .grid {
            gap: var(--mdnv-gap) !important;
            justify-items: center !important;
            align-items: center !important;             /* alinear verticalmente */
          }
          /* Cada item centrado y con el mismo alto interno */
          section#comunidades .mdnv-logos .grid > *,
          section#auspiciantes .mdnv-logos .grid > * {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }

          /* Avatares/logos redondos uniformes */
          section#comunidades .mdnv-logos img,
          section#auspiciantes .mdnv-logos img,
          section#comunidades .mdnv-logos .avatar,
          section#auspiciantes .mdnv-logos .avatar {
            width: var(--mdnv-logo-size) !important;
            height: var(--mdnv-logo-size) !important;
            border-radius: 9999px !important;
            object-fit: cover !important;
            display: block !important;
            margin: 0 !important;
            background: transparent !important;
          }

          /* Eliminar paddings internos que desalinean los círculos */
          section#comunidades .mdnv-logos [class*="p-"],
          section#auspiciantes .mdnv-logos [class*="p-"] {
            padding: 0 !important;
          }

          /* Nombre/leyendas bajo cada logo: chico y blanco SOLO dentro de la grilla */
          section#comunidades .mdnv-logos .font-semibold,
          section#auspiciantes .mdnv-logos .font-semibold,
          section#comunidades .mdnv-logos .text-sm,
          section#auspiciantes .mdnv-logos .text-sm,
          section#comunidades .mdnv-logos .opacity-70,
          section#auspiciantes .mdnv-logos .opacity-70 {
            font-size: 0.72rem !important;
            line-height: 1.1 !important;
            color: #FFFFFF !important;
          }

          /* Fuera de la grilla de logos, mantener tamaño normal de párrafos/enlaces */
          section#comunidades p a,
          section#auspiciantes p a {
            font-size: inherit !important;
          }

          /* Botón blanco con texto naranja (reforzado para Ganar sobre el scope de enlaces blancos) */
          .mdnv-btn-white-orange,
          section#comunidades .mdnv-btn-white-orange {
            display: inline-block;
            font-weight: 700;
            padding: .5rem .9rem;
            border-radius: .5rem;
            background: #FFFFFF !important;
            color: #F77B20 !important;   /* texto naranja visible */
            text-decoration: none !important;
            border: 1px solid rgba(0,0,0,.06);
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Boletín (full-bleed) ----------
  - block: markdown
    id: boletin-embed
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Boletín MetaDocencia"
            text=""
            bg="#00506F" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-3xl text-white">
          <p class="text-lg leading-relaxed mb-4">
            Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
          </p>

          <div class="mt-2">
            {{< mc_form >}}
          </div>

          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
              Ver ediciones anteriores
            </a>
          </p>
        </div>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Slack (full-bleed) ----------
  - block: markdown
    id: slack
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Súmate a nuestra comunidad en Slack"
            text=""
            button_text="Unirme al espacio de MetaDocencia"
            button_url="https://w3id.org/metadocencia/slack"
            bg="#E01E5A" fg="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#E01E5A"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div style="color:#FFFFFF" class="max-w-3xl mx-auto">
          <p>
            Conecta con más de <strong style="color:#FFFFFF">+1070 personas</strong> que comparten interés por la
            <strong style="color:#FFFFFF">educación</strong>, la <strong style="color:#FFFFFF">ciencia abierta</strong>
            y la <strong style="color:#FFFFFF">colaboración</strong>. Comparte experiencias, aprende de otros y participa de conversaciones que inspiran nuevas ideas.
          </p>
          <p class="mt-2">
            <a href="https://mdnv.netlify.app/post/20231219-mdenslack/"
               style="color:#FFFFFF; text-decoration:underline;">
               Qué es y cómo sumarme
            </a>
          </p>
        </div>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Comunidades amigas (full-bleed) ----------
  - block: markdown
    id: comunidades
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Comunidades amigas"
            text=""
            bg="#F77B20" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
        </p>
        

        <!-- Lista dinámica desde authors: user_groups: Fellow Communities -->
        <div class="mt-4 mdnv-logos">
          {{< people_list group="Fellow Communities" columns=7 gapx="8rem" gapy="3rem" >}}
        </div>

        <!-- Botón debajo de los logos con texto en naranja -->
        <p class="mt-5">
          <a href="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad" class="mdnv-btn-white-orange">
            Suma tu comunidad
          </a>
        </p>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Auspiciantes / Apoya (full-bleed, texto + logos dinámicos) ----------
  - block: markdown
    id: auspiciantes
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Apoya a MetaDocencia"
            text=""
            bg="#00506F" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.
        </p>

        <!-- Lista dinámica desde authors: user_groups: Current -->
        <div class="mt-4 mdnv-logos">
          {{< people_list group="Current" columns=5 gapx="8rem" gapy="3rem" >}}
        </div>

        <p class="mt-6 max-w-3xl mx-auto">
          Si tu organización comparte nuestra misión, escribinos a
          <a href="mailto:direccion@metadocencia.org" class="underline font-semibold" style="color:#FFFFFF">direccion@metadocencia.org</a>
          para explorar cómo colaborar.
        </p>
        <p class="mt-2 max-w-3xl mx-auto">
          Podés hacer tu aporte a través de nuestro
          <a href="https://www.metadocencia.org/donar/" class="underline font-semibold" style="color:#FFFFFF">formulario de donación</a>
          y ayudarnos a sostener y ampliar nuestras actividades.
        </p>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Redes (full-bleed) ----------
  - block: markdown
    id: redes
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Sigue el intercambio"
            text=""
            bg="#C83737" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div style="color:#FFFFFF" class="max-w-3xl mx-auto">
          <p>
            Acompañanos en nuestras redes sociales y seguinos para no perderte novedades, debates y recursos:
            <strong style="color:#FFFFFF">@metadocencia</strong>
          </p>
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
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]
---
