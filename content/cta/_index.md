---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ---------- Boletín + Form (2 columnas, ancho correcto) ----------
  - block: cta-card
    id: boletin-embed
    content:
      title: "Boletín MetaDocencia"
      text: |
        <div class="mx-auto max-w-5xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <!-- Columna izquierda: texto -->
            <div>
              <p class="text-lg leading-relaxed mb-4">
                Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
              </p>
              <p class="mb-0">
                <a href="https://www.metadocencia.org/boletines/" class="underline font-semibold" target="_blank" rel="noopener">
                  Ver ediciones anteriores
                </a>
              </p>
            </div>

            <!-- Columna derecha: shortcode del formulario -->
            <div class="w-full">
              {{< mc_form >}}
            </div>
          </div>
        </div>
    design:
      card:
        css_class: "text-gray-900 dark:text-gray-100"
        css_style: "background-color:#F9FAFB;"
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: [0, 0, 0, 0]

  # ---------- Slack ----------
  - block: cta-card
    id: slack
    content:
      title: "Súmate a nuestro Slack"
      text: |
        Conecta con más de **+1000 personas** que comparten interés por la educación, la ciencia abierta y la colaboración.
        <a href="https://zenodo.org/records/10028136" style="color:#1F2937;text-decoration:underline;">Qué es Slack y cómo puedo sumarme a la conversación</a>
      button:
        text: "Unirme al espacio de Slack de MetaDocencia"
        url: "https://w3id.org/metadocencia/slack"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#E01E5A;color:#FFFFFF;"

  # ---------- Comunidades amigas ----------
  - block: cta-card
    id: comunidades
    content:
      title: "Comunidades amigas"
      text: |
        Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center mt-4">
          <img src="/media/sponsors/2i2c-sponsor.png" alt="Comunidad 4" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo05.png" alt="Comunidad 5" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo06.png" alt="Comunidad 6" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo07.png" alt="Comunidad 7" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo08.png" alt="Comunidad 8" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo09.png" alt="Comunidad 9" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo10.png" alt="Comunidad 10" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo11.png" alt="Comunidad 11" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo12.png" alt="Comunidad 12" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo13.png" alt="Comunidad 13" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo14.png" alt="Comunidad 14" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo15.png" alt="Comunidad 15" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo16.png" alt="Comunidad 16" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo17.png" alt="Comunidad 17" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo18.png" alt="Comunidad 18" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo19.png" alt="Comunidad 19" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo20.png" alt="Comunidad 20" class="max-h-10 w-auto opacity-95">
        </div>
      button:
        text: "Suma tu comunidad"
        url: "mailto:info@metadocencia.org?subject=Sumar%20mi%20comunidad"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"

  # ---------- Auspiciantes / Apoya (botones centrados) ----------
  - block: cta-card
    id: auspiciantes
    content:
      title: "Apoya a MetaDocencia"
      text: |
        Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.

        <!-- Logos auspiciantes (sirviéndose desde /static/media/sponsors/) -->
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
          <img src="/media/sponsors/rladiesba_sponsor.jpg" alt="RLadies Buenos Aires" class="max-h-10 w-auto opacity-95" loading="lazy">
        </div>

        <!-- Botones centrados -->
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <a href="https://www.metadocencia.org/contacto/"
             class="inline-block no-underline font-semibold px-4 py-2 rounded-md"
             style="background:#FFFFFF;color:#00506F;">
             Acompáñanos
          </a>
          <a href="https://www.metadocencia.org/contacto/"
             class="inline-block no-underline font-semibold px-4 py-2 rounded-md"
             style="background:transparent;border:1px solid #FFFFFF;color:#FFFFFF;">
             Dona
          </a>
        </div>
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#00506F;color:#FFFFFF;"

  # ---------- Redes (botones clicables en grid) ----------
  - block: cta-card
    id: redes
    content:
      title: "Sigue el intercambio"
      text: |
        Escribe a info@metadocencia.org o súmate al intercambio en redes sociales: @metadocencia
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
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#C83737;color:#FFFFFF;"
---
