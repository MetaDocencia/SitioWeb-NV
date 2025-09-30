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
          Conecta con más de <strong style="color:#FFFFFF">+1070 personas</strong> …
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
          button_text="Suma tu comunidad"
          button_url="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
          bg="#F77B20" fg="#FFFFFF" btn_bg="#FFFFFF" btn_fg="#F77B20"
          variant="background"
          maxw="1600px"
          content_maxw="1100px"
          align="center"
          py="2.5rem" px="clamp(1rem,4vw,3rem)"
      >}}
      <p class="max-w-3xl mx-auto">
        Amplificamos el trabajo de organizaciones…
      </p>
      <div class="mt-4">
        {{< people user_group="Comunidades Amigas" columns="7" >}}
      </div>
      {{< /cta_fullwidth >}}
  design:
    spacing:
      padding: [0, 0, 0, 0]
      margin: [0, 0, 0, 0]

# ---------- Auspiciantes / Apoya (full-bleed) ----------
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
        Nuestro trabajo es posible gracias al apoyo…
      </p>
      <div class="mt-4">
        {{< people user_group="Auspiciantes" columns="6" >}}
      </div>
      <p class="mt-6 max-w-3xl mx-auto">
        Si tu organización comparte nuestra misión, escribinos a
        <a href="mailto:direccion@metadocencia.org" class="underline font-semibold" style="color:#FFFFFF">direccion@metadocencia.org</a>
        …
      </p>
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
        …
      </div>
      {{< /cta_fullwidth >}}
  design:
    spacing:
      padding: [0, 0, 0, 0]
      margin: [0, 0, 0, 0]
