---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

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
        margin: [0, 0, 0, 0]

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
        margin: [0, 0, 0, 0]

  # ---------- Comunidades amigas (full-bleed) ----------
  - block: markdown
    id: comunidades
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Comunidades amigas"
            text=""
            # Botón principal: "Suma tu comunidad"
            button_text="Suma tu comunidad"
            button_url="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
            bg="#F77B20" fg="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#F77B20"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="max-w-3xl mx-auto">
          <p class="mb-2">
            Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
          </p>
          <p class="mb-4">
            <a href="https://mdnv.netlify.app/quienes-somos/#comunidades-amigas"
               class="underline font-semibold" style="color:#FFFFFF">
               Conoce la red de organizaciones
            </a>
          </p>
        </div>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]

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
            # Botón principal: "Auspiciantes" → ancla en Quienes somos
            button_text="Auspiciantes"
            button_url="https://mdnv.netlify.app/quienes-somos/#auspiciantes"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="max-w-3xl mx-auto">
          <p class="mb-2">
            Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.
          </p>
        </div>

        <div class="mt-6 max-w-3xl mx-auto">
          <p class="mb-2">
            Si tu organización comparte nuestra misión, escribinos a
            <a href="mailto:direccion@metadocencia.org" class="underline font-semibold" style="color:#FFFFFF">direccion@metadocencia.org</a>
            para explorar cómo colaborar.
          </p>
          <p class="mt-2">
            Podés hacer tu aporte a través de nuestro
            <a href="https://www.metadocencia.org/donar/" class="underline font-semibold" style="color:#FFFFFF">
              formulario de donación
            </a>
            y ayudarnos a sostener y ampliar nuestras actividades.
          </p>
        </div>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]

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
        margin: [0, 0, 0, 0]
---
