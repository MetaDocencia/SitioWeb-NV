---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ---------- Boletín (full-width) ----------
  - block: markdown
    id: boletin-embed
    content:
      text: |
        {{< cta_fullwidth
            id="boletin-embed"
            title="Boletín MetaDocencia"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-3xl">
          <p class="text-lg leading-relaxed mb-4">
            Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
          </p>

          <!-- Formulario embebido -->
          <div class="mt-2">
            {{< mc_form >}}
          </div>

          <!-- Link centrado -->
          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
              Ver ediciones anteriores
            </a>
          </p>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Slack (se mantiene como card) ----------
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

  # ---------- Comunidades amigas (full-width) ----------
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

          <!-- Logos -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            <img src="/media/sponsors/2i2c-sponsor.png" alt="2i2c" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo05.png" alt="Comunidad 5" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo06.png" alt="Comunidad 6" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo07.png" alt="Comunidad 7" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo08.png" alt="Comunidad 8" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo09.png" alt="Comunidad 9" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo10.png" alt="Comunidad 10" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo11.png" alt="Comunidad 11" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo12.png" alt="Comunidad 12" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo13.png" alt="Comunidad 13" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo14.png" alt="Comunidad 14" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo15.png" alt="Comunidad 15" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo16.png" alt="Comunidad 16" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo17.png" alt="Comunidad 17" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo18.png" alt="Comunidad 18" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo19.png" alt="Comunidad 19" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo20.png" alt="Comunidad 20" class="max-h-10 w-auto opacity-95" loading="lazy">
          </div>

          <!-- Botón -->
          <div class="mt-6">
            <a href="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
               class="inline-block font-semibold px-4 py-2 rounded"
               style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;text-decoration:none;">
               Suma tu comunidad
            </a>
          </div>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Apoya a MetaDocencia (full-width) ----------
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

          <!-- Logos auspiciantes -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center mt-4">
            <img src="/media/sponsors/2i2c-sponsor.png" alt="2i2c" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/CSS_sponsor.png" alt="Center for Scientific Software" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/NASA_sponsor.png" alt="NASA" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/arecibo-sponsor.jpg" alt="Arecibo" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/czi_sponsor.png" alt="Chan Zuckerberg Initiative" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/gbmf_sponsor.png" alt="Gordon and Betty Moore Foundation" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/ioi_sponsor.png" alt="Invest in Open Infrastructure" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/inta_sponsor.jpg" alt="INTA" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/labi-sponsor.jpg" alt="Latin American Bioimaging" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/obf_sponsor.png" alt="Open Bioinformatics Foundation" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/ols-sponsor.jpg" alt="Open Life Science" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/quest_sponsor.jpg" alt="QUEST" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/rladiesba_sponsor.jpg" alt="R-Ladies Buenos Aires" class="max-h-10 w-auto opacity-95" loading="lazy">
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

  # ---------- Sigue el intercambio (redes, full-width) ----------
  - block: markdown
    id: redes
    content:
      text: |
        {{< cta_fullwidth
            id="redes"
            title="Sigue el intercambio"
            bg="#C83737"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl">
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
        {{</ cta_fullwidth >}}
---
