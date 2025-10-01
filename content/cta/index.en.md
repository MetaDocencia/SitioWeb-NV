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

          <!-- Link centrado, blanco, sin botón -->
          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
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

  # ---------- Slack ----------
  - block: cta-card
    id: slack
    content:
      title: "Súmate a nuestra comunidad en Slack"
      text: |
        <div style="color:#FFFFFF">
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
      button:
        text: "Unirme al espacio de MetaDocencia"
        url: "https://w3id.org/metadocencia/slack"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#E01E5A;color:#FFFFFF;"

  # ---------- Comunidades amigas (FULL-WIDTH + people_list) ----------
  - block: markdown
    id: comunidades
    content:
      text: |
        {{< cta_fullwidth
            id="comunidades"
            title="Comunidades amigas"
            bg="#F77B20"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl">
          <p class="mb-6">
            Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
          </p>

          <!-- Logos generados automáticamente desde authors con user_group = "Comunidades Amigas" -->
          <div class="mt-4">
            {{< people_list group="Comunidades Amigas" columns="4" >}}
          </div>

          <div class="mt-6">
            <a href="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
               class="inline-block font-semibold px-4 py-2 rounded"
               style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;text-decoration:none;">
               Suma tu comunidad
            </a>
          </div>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Auspiciantes / Apoya (FULL-WIDTH + people_list en 5 columnas) ----------
  - block: markdown
    id: auspiciantes
    content:
      text: |
        {{< cta_fullwidth
            id="auspiciantes"
            title="Apoya a MetaDocencia"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl">
          <p>
            Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.
          </p>

          <!-- Logos generados automáticamente desde authors con user_group = "Auspiciantes" -->
          <div class="mt-6">
            {{< people_list group="Auspiciantes" columns="5" >}}
          </div>

          <!-- Texto de contacto + donación -->
          <p class="mt-6">
            Si tu organización comparte nuestra misión, escribinos a
            <a href="mailto:direccion@metadocencia.org" class="underline font-semibold" style="color:#FFFFFF">direccion@metadocencia.org</a>
            para explorar cómo colaborar.
          </p>
          <p class="mt-2">
            Podés hacer tu aporte a través de nuestro
            <a href="https://www.metadocencia.org/donar/" class="underline font-semibold" style="color:#FFFFFF">formulario de donación</a>
            y ayudarnos a sostener y ampliar nuestras actividades.
          </p>
        </div>
        {{</ cta_fullwidth >}}

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
