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

          section#comunidades,
          section#auspiciantes {
            --mdnv-logo-size: clamp(56px, 9vw, 92px);
            --mdnv-gap: clamp(0.6rem, 2.2vw, 1.25rem);
            color: #FFFFFF !important;
          }
          section#comunidades a, section#auspiciantes a {
            color: #FFFFFF !important;
          }

          section#comunidades .mdnv-logos .grid,
          section#auspiciantes .mdnv-logos .grid {
            gap: var(--mdnv-gap) !important;
            justify-items: center !important;
            align-items: center !important;
          }
          section#comunidades .mdnv-logos .grid > *,
          section#auspiciantes .mdnv-logos .grid > * {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }

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
          }

          section#comunidades .mdnv-logos [class*="p-"],
          section#auspiciantes .mdnv-logos [class*="p-"] {
            padding: 0 !important;
          }

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

          section#comunidades p a,
          section#auspiciantes p a {
            font-size: inherit !important;
          }

          /* Botón blanco con texto naranja */
          .mdnv-btn-white-orange {
            display: inline-block;
            font-weight: 700;
            padding: .5rem .9rem;
            border-radius: .5rem;
            background: #FFFFFF !important;
            color: #F77B20 !important; /* Texto naranja visible */
            text-decoration: none !important;
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Comunidades amigas ----------
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
        

        <div class="mt-4 mdnv-logos">
          {{< people_list group="Comunidades amigas" columns=7 gapx="8rem" gapy="3rem" >}}
        </div>

        <p class="mt-5">
          <a href="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad" class="mdnv-btn-white-orange">
            Suma tu comunidad
          </a>
        </p>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Auspiciantes ----------
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

        <div class="mt-4 mdnv-logos">
          {{< people_list group="Auspiciantes" columns=6 gapx="8rem" gapy="3rem" >}}
        </div>

        <p class="mt-6 max-w-3xl mx-auto">
          Si tu organización comparte nuestra misión, escribinos a
          <a href="mailto:direccion@metadocencia.org" class="underline font-semibold">direccion@metadocencia.org</a>
          para explorar cómo colaborar.
        </p>
        <p class="mt-2 max-w-3xl mx-auto">
          Podés hacer tu aporte a través de nuestro
          <a href="https://www.metadocencia.org/donar/" class="underline font-semibold">formulario de donación</a>
          y ayudarnos a sostener y ampliar nuestras actividades.
        </p>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]
---
