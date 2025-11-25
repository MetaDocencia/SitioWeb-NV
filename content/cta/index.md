---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
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

  - block: cta-card
    id: redes
    content:
      title: "Sigue el intercambio"
      text: |
        <div style="color:#FFFFFF">
          <p>Acompáñanos en nuestras redes sociales y síguenos para no perderte novedades, debates y recursos: <strong style="color:#FFFFFF">@metadocencia</strong></p>
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
