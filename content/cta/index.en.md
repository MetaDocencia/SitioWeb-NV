---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "0"   # quita márgenes globales extra

sections:

  # ---------- Boletín ----------
  - block: markdown
    id: boletin-embed
    content:
      text: |
        {{< cta_fullwidth
            title="Boletín MetaDocencia"
            text=""
            bg="#00506F" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="1.5rem" px="clamp(1rem,4vw,3rem)"
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

  # ---------- Slack ----------
  - block: markdown
    id: slack
    content:
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
            py="1.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="max-w-3xl mx-auto text-white">
          <p>
            Conecta con más de <strong>+1070 personas</strong> que comparten interés por la
            <strong>educación</strong>, la <strong>ciencia abierta</strong> y la <strong>colaboración</strong>.
          </p>
          <p class="mt-2">
            <a href="https://mdnv.netlify.app/post/20231219-mdenslack/"
               class="underline font-semibold">Qué es y cómo sumarme</a>
          </p>
        </div>
        {{< /cta_fullwidth >}}

  # ---------- Comunidades amigas ----------
  - block: markdown
    id: comunidades
    content:
      text: |
        {{< cta_fullwidth
            title="Comunidades amigas"
            text=""
            button_text="Suma tu comunidad"
            button_url="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
            bg="#F77B20" fg="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#F77B20"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="1.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center mt-4">
          <!-- logos -->
          <img src="/media/sponsors/2i2c-sponsor.png" class="max-h-10 w-auto opacity-95">
          <!-- ... resto de logos ... -->
        </div>
        {{< /cta_fullwidth >}}

  # ---------- Auspiciantes / Apoya ----------
  - block: markdown
    id: auspiciantes
    content:
      text: |
        {{< cta_fullwidth
            title="Apoya a MetaDocencia"
            text=""
            bg="#00506F" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="1.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión. 
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center mt-4">
          <!-- logos -->
        </div>
        <p class="mt-6 max-w-3xl mx-auto">
          Si tu organización comparte nuestra misión, escribinos a
          <a href="mailto:direccion@metadocencia.org" class="underline font-semibold">direccion@metadocencia.org</a>.
        </p>
        <p class="mt-2 max-w-3xl mx-auto">
          Podés hacer tu aporte a través de nuestro
          <a href="https://www.metadocencia.org/donar/" class="underline font-semibold">formulario de donación</a>.
        </p>
        {{< /cta_fullwidth >}}

  # ---------- Redes ----------
  - block: markdown
    id: redes
    content:
      text: |
        {{< cta_fullwidth
            title="Sigue el intercambio"
            text=""
            bg="#C83737" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="1.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="max-w-3xl mx-auto text-white">
          <p>
            Acompañanos en nuestras redes sociales:
            <strong>@metadocencia</strong>
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3">
            <!-- botones redes -->
          </div>
        </div>
        {{< /cta_fullwidth >}}
---
