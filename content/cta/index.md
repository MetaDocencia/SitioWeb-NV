---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
aliases: ["/contacto/"]
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

  - block: cta-card
    id: slack
    content:
      title: "Súmate a nuestra comunidad en Slack"
      text: |
        Conecta con más de <strong style="color:#FFFFFF;">1.070 personas</strong> que comparten interés por la
        <strong style="color:#FFFFFF;">educación</strong>, la <strong style="color:#FFFFFF;">ciencia abierta</strong> y la <strong style="color:#FFFFFF;">colaboración</strong>.<br>
        Comparte experiencias, aprende de otras personas y participa de conversaciones que inspiran nuevas ideas.<br><br>
        <a href="/post/20231219-mdenslack/" class="underline font-semibold" style="color:#FFFFFF">
          Qué es y cómo sumarme
        </a>
      button:
        text: "Unirme al espacio de MetaDocencia"
        url: "https://w3id.org/metadocencia/slack"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#E01E5A;color:#FFFFFF;"

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

    
  # ===== CTA final =====
  - block: markdown
    id: apoya
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            id="apoya"
            title="Sigue el intercambio"
            text=""
            bg="#F3F4F6" color="#111827" btn_bg="#C83737" btn_fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
            inner="raw"
        >}}
        <p>Join us on social media and follow @metadocencia for updates, discussions, and resources</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-4">
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Twitter
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             LinkedIn
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             YouTube
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Instagram
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://floss.social/@MetaDocencia" target="_blank" rel="me noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Mastodon
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://bsky.app/profile/metadocencia.org" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Bluesky
          </a>
        </div>
        {{< /cta_fullwidth >}}


  - block: cta-card
    id: redes
    content:
      title: "Sigue el intercambio"
      text: |
        <div style="color:#FFFFFF">
          <p>Acompáñanos en nuestras redes sociales y síguenos para no perderte novedades, debates y recursos: @metadocencia</p>
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
