---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "0"

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
            py="1.25rem" px="clamp(1rem,4vw,3rem)"
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
            py="1.25rem" px="clamp(1rem,4vw,3rem)"
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

  # ---------- Comunidades amigas (logos desde authors) ----------
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
            py="1.25rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
        </p>

        <!-- Logos traídos de authors.user_groups = "Comunidades amigas" -->
        <div class="mt-4">
          {{< people_list group="Comunidades amigas" columns=6 gapx="2rem" gapy="1.25rem" fit="contain" >}}
        </div>
        {{< /cta_fullwidth >}}

  # ---------- Auspiciantes / Apoya (logos desde authors) ----------
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
            py="1.25rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión. 
        </p>

        <!-- Logos traídos de authors.user_groups = "Auspiciantes" -->
        <div class="mt-4">
          {{< people_list group="Auspiciantes" columns=6 gapx="2rem" gapy="1.25rem" fit="contain" >}}
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
            py="1.25rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="max-w-3xl mx-auto text-white">
          <p>
            Acompañanos en nuestras redes sociales:
            <strong>@metadocencia</strong>
          </p>
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
        {{< /cta_fullwidth >}}
---
