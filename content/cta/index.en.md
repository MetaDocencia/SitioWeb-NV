---
title: "Join and support our community"
type: landing
slug: "cta"
aliases: ["/en/contacto/"]
design:
  spacing: "0rem"

sections:
  # ===== Entrada: título de la página + boletín =====
  - block: markdown
    id: boletin
    content:
      title: ""
      text: |
        {{< md_cta_hero
            title="Join and support our community"
            subtitle="MetaDocencia Newsletter"
            lead="Receive our latest news, training opportunities, calls, and events in your inbox."
            link_text="See past editions"
            link_url="/en/newsletters/"
        >}}
        {{< mc_form >}}
        {{< /md_cta_hero >}}
    design:
      background:
        color: "#00506F"
        text_color_light: true
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]

  # ===== Lista: las otras tres formas de participar =====
  - block: markdown
    id: participar
    content:
      title: ""
      text: |
        {{< md_cta_item
            id="slack"
            title="Join our Slack community"
            accent="#E01E5A"
            btn_text="Join MetaDocencia’s space"
            btn_url="https://w3id.org/metadocencia/slack"
        >}}
        Connect with **1,070+ people** interested in **education**, **open science**, and **collaboration**. Share experiences, learn from others, and join conversations that spark new ideas.
        {{< /md_cta_item >}}

        {{< md_cta_item
            id="comunidades"
            title="Partner Communities"
            accent="#F77B20"
            btn_fg="#111827"
            link_text="Meet the community network"
            link_url="/en/quienes-somos/#comunidades-amigas"
            btn_text="Add your community"
            btn_url="mailto:comunidades@metadocencia.org?subject=Add%20my%20community"
        >}}
        We amplify the work of organizations that make open science a global, collective, community-driven effort.
        {{< /md_cta_item >}}

        {{< md_cta_item
            id="auspiciantes"
            title="Support MetaDocencia"
            accent="#C83737"
        >}}
        Our work is possible thanks to institutions and organizations that share our mission. [Meet our sponsors](/en/quienes-somos/#trust)

        If your organization shares our mission, email us at [direccion@metadocencia.org](mailto:direccion@metadocencia.org) to explore ways to collaborate.

        You can also make a contribution through our [donation form](/en/donar/) to help sustain and expand our activities.
        {{< /md_cta_item >}}
    design:
      spacing:
        padding: ["1.5rem", 0, "1.5rem", 0]
        margin: [0, 0, 0, 0]

  # ===== CTA final (sin cambios respecto de la versión actual) =====
  - block: markdown
    id: apoya
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            id="apoya"
            title="Keep the conversation going"
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
---
