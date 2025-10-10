---
title: "Join and support our community"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ---------- Newsletter (1 column: title, text, form & link) ----------
  - block: cta-card
    id: boletin-embed
    content:
      title: "MetaDocencia Newsletter"
      text: |
        <div class="mx-auto max-w-3xl text-white">
          <p class="text-lg leading-relaxed mb-4">
            Receive our latest news, training opportunities, calls, and events in your inbox.
          </p>

          <!-- Embedded form -->
          <div class="mt-2">
            {{< mc_form >}}
          </div>

          <!-- Centered link, white, bold -->
          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
              See past editions
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

  # ---------- Slack (cta-image-paragraph with wide margins, image 40% on the right) ----------

  - block: markdown
    id: slack
    content:
      title: ""   # el título se muestra dentro de la columna de texto
      text: |
        <style>
          /* Texto un poco más grande (término medio) dentro de este bloque */
          section#slack p { font-size: 1.05rem; line-height: 1.65; }
          /* Mantener el tamaño del título h2 controlado */
          section#slack h2 { font-size: clamp(1.25rem, 2.2vw, 1.6rem); }
          /* Botón rojo (solo en esta sección) */
          section#slack .btn-slack {
            display:inline-block; text-decoration:none; color:#FFFFFF !important;
            background:#C83737; padding:.6rem 1.1rem; border-radius:.375rem;
          }
          section#slack .btn-slack:hover { filter: brightness(1.05); }
        </style>

        {{< two_col
             image="/media/slack.png"
             side="img-left"
             mode="full"
             maxw="1100px"
             px="clamp(3rem,8vw,8rem)"
             gap="clamp(1rem,3vw,1rem)"
             imgw="266px"
             alt="Slack de MetaDocencia"
        >}}
          <h2 class="section-title" style="margin-top:0;margin-bottom:.5rem;">Join our Slack community</h2>

          <p>
            Connect with <strong>1,070+ people</strong> interested in <strong>education</strong>, <strong>open science</strong>, and <strong>collaboration</strong>.
            CShare experiences, learn from others, and join conversations that spark new ideas.<strong>+1070 personas</strong> que comparten interés por la
          </p>

          <!-- Botón rojo arriba -->
          <p class="mt-4">
            <a href="https://w3id.org/metadocencia/slack" class="btn-slack">
              Join MetaDocencia’s space
            </a>
          </p>

          <!-- Enlace informativo debajo -->
          <p class="mt-3">
            <a href="/post/20231219-mdenslack/" class="underline font-semibold">
              What it is and how to join
            </a>
          </p>
        {{< /two_col >}}
    design:
      css_style: "background-color:#FFFFFF;color:#111827;"

  # ---------- Partner Communities (no logos) ----------
  - block: cta-card
    id: comunidades
    content:
      title: "Partner Communities"
      text: |
        We amplify the work of organizations that make open science a global, collective, community-driven effort.  
        <a href="https://mdnv.netlify.app/quienes-somos/#comunidades-amigas" class="underline font-semibold" style="color:#FFFFFF">Meet the community network</a>
      button:
        text: "Add your community"
        url: "mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"

  # ---------- Support MetaDocencia (no logos) ----------
  - block: cta-card
    id: auspiciantes
    content:
      title: "Support MetaDocencia"
      text: |
        <!-- Force white links across the entire block -->
        <style>
          section#auspiciantes a { color:#FFFFFF !important; font-weight:600; text-decoration: underline; }
        </style>

        Our work is possible thanks to institutions and organizations that share our mission.  
        <a href="https://mdnv.netlify.app/quienes-somos/#auspiciantes">Meet our sponsors</a>

        If your organization shares our mission, email us at
        <a href="mailto:direccion@metadocencia.org">direccion@metadocencia.org</a>
        to explore ways to collaborate.

        You can also make a contribution through our
        <a href="https://www.metadocencia.org/donar/">donation form</a>
        to help sustain and expand our activities.
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#00506F;color:#FFFFFF;"

  # ---------- Social (clickable buttons in grid) ----------
  - block: cta-card
    id: redes
    content:
      title: "Keep the conversation going"
      text: |
        <div style="color:#FFFFFF">
          <p>Join us on social media and follow <strong style="color:#FFFFFF">@metadocencia</strong> for updates, discussions, and resources.</p>
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
