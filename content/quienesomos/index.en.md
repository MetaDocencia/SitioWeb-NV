---
title: "Join & support our community"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ===== Local styles: logos (Partner Communities & Sponsors) =====
  - block: markdown
    id: estilos-logos
    content:
      title: ""
      text: |
        <style>
          /* Remove extra vertical whitespace on these blocks */
          section#boletin-embed, section#slack, section#comunidades,
          section#auspiciantes, section#redes {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          /* General adjustments for sections with logos */
          section#comunidades,
          section#auspiciantes {
            --mdnv-logo-size: clamp(56px, 9vw, 92px);   /* circle size */
            --mdnv-gap: clamp(0.6rem, 2.2vw, 1.25rem);  /* consistent spacing */
            --mdnv-cell-minh: calc(var(--mdnv-logo-size) + 2.2rem); /* uniform cell height */
            color: #FFFFFF !important;                  /* white text on color bg */
          }
          section#comunidades a,
          section#auspiciantes a {
            color: #FFFFFF !important;
          }

          /* Scope ONLY inside the logos grid */
          section#comunidades .mdnv-logos .grid,
          section#auspiciantes .mdnv-logos .grid {
            gap: var(--mdnv-gap) !important;
            justify-items: center !important;     /* center items in their cells (horizontal) */
            align-items: center !important;       /* center items in their cells (vertical) */
            justify-content: center !important;   /* center the whole grid content */
            align-content: center !important;     /* center rows as a block */
          }

          /* Each item: centered layout & uniform minimum height to align circles vertically */
          section#comunidades .mdnv-logos .grid > *,
          section#auspiciantes .mdnv-logos .grid > * {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            min-height: var(--mdnv-cell-minh) !important; /* keeps circles aligned across rows */
          }

          /* Round logos/avatars, uniform size & vertical alignment */
          section#comunidades .mdnv-logos img,
          section#auspiciantes .mdnv-logos img,
          section#comunidades .mdnv-logos .avatar,
          section#auspiciantes .mdnv-logos .avatar {
            width: var(--mdnv-logo-size) !important;
            height: var(--mdnv-logo-size) !important;
            border-radius: 9999px !important;
            object-fit: cover !important;
            display: block !important;
            margin: 0 !important;
            background: transparent !important;
          }

          /* Remove inner paddings that misalign circles */
          section#comunidades .mdnv-logos [class*="p-"],
          section#auspiciantes .mdnv-logos [class*="p-"] {
            padding: 0 !important;
          }

          /* Small, white captions ONLY under each logo (smaller than before) */
          section#comunidades .mdnv-logos .font-semibold,
          section#auspiciantes .mdnv-logos .font-semibold,
          section#comunidades .mdnv-logos .text-sm,
          section#auspiciantes .mdnv-logos .text-sm,
          section#comunidades .mdnv-logos .opacity-70,
          section#auspiciantes .mdnv-logos .opacity-70 {
            font-size: 0.65rem !important;
            line-height: 1.05 !important;
            color: #FFFFFF !important;
          }

          /* Outside the logos grid: keep default paragraph/link sizes */
          section#comunidades p a,
          section#auspiciantes p a {
            font-size: inherit !important;
          }

          /* Enforce 5 centered columns on Sponsors at large screens */
          @media (min-width: 1024px) {
            section#auspiciantes .mdnv-logos .grid {
              grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
              justify-content: center !important;   /* center the 5-col grid block */
            }
          }

          /* White button with orange text (strong specificity) */
          .mdnv-btn-white-orange,
          section#comunidades .mdnv-btn-white-orange {
            display: inline-block;
            font-weight: 700;
            padding: .5rem .9rem;
            border-radius: .5rem;
            background: #FFFFFF !important;
            color: #F77B20 !important;
            text-decoration: none !important;
            border: 1px solid rgba(0,0,0,.06);
          }
        </style>
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Newsletter (full-bleed) ----------
  - block: markdown
    id: boletin-embed
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="MetaDocencia Newsletter"
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
            Receive our latest news, training opportunities, calls, and events in your inbox.
          </p>

          <div class="mt-2">
            {{< mc_form >}}
          </div>

          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
              See past editions
            </a>
          </p>
        </div>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Slack (full-bleed) ----------
  - block: markdown
    id: slack
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Join our Slack community"
            text=""
            button_text="Join MetaDocencia’s space"
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
            Connect with <strong style="color:#FFFFFF">1,070+ people</strong> interested in
            <strong style="color:#FFFFFF">education</strong>, <strong style="color:#FFFFFF">open science</strong>, and
            <strong style="color:#FFFFFF">collaboration</strong>. Share experiences, learn from others, and join conversations that spark new ideas.
          </p>
          <p class="mt-2">
            <a href="https://mdnv.netlify.app/post/20231219-mdenslack/"
               style="color:#FFFFFF; text-decoration:underline;">
               What it is and how to join
            </a>
          </p>
        </div>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Partner Communities (full-bleed) ----------
  - block: markdown
    id: comunidades
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Partner Communities"
            text=""
            bg="#F77B20" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          We amplify the work of organizations that make open science a global, collective, community-driven effort.
        </p>

        <!-- Dynamic list from authors: user_groups: Fellow communities + (Spanish) Comunidades amigas -->
        <div class="mt-4 mdnv-logos">
          {{< people_list group="Fellow communities" columns=7 gapx="8rem" gapy="3rem" >}}
        </div>
        <div class="mt-4 mdnv-logos">
          {{< people_list group="Comunidades amigas" columns=7 gapx="8rem" gapy="3rem" >}}
        </div>

        <!-- Button below the logos -->
        <p class="mt-5">
          <a href="mailto:comunidades@metadocencia.org?subject=Add%20my%20community" class="mdnv-btn-white-orange">
            Add your community
          </a>
        </p>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Sponsors / Support (full-bleed, text + dynamic logos) ----------
  - block: markdown
    id: auspiciantes
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Support MetaDocencia"
            text=""
            bg="#00506F" fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <p class="max-w-3xl mx-auto">
          Our work is possible thanks to institutions and organizations that share our mission.
        </p>

        <!-- Dynamic list from authors: user_groups: Sponsors + (Spanish) Auspiciantes -->
        <div class="mt-4 mdnv-logos">
          {{< people_list group="Sponsors" columns=5 gapx="8rem" gapy="3rem" >}}
        </div>
        <div class="mt-4 mdnv-logos">
          {{< people_list group="Auspiciantes" columns=5 gapx="8rem" gapy="3rem" >}}
        </div>

        <p class="mt-6 max-w-3xl mx-auto">
          If your organization shares our mission, email us at
          <a href="mailto:direccion@metadocencia.org" class="underline font-semibold" style="color:#FFFFFF">direccion@metadocencia.org</a>
          to explore ways to collaborate.
        </p>
        <p class="mt-2 max-w-3xl mx-auto">
          You can also make a contribution through our
          <a href="https://www.metadocencia.org/donar/" class="underline font-semibold" style="color:#FFFFFF">donation form</a>
          to help sustain and expand our activities.
        </p>
        {{< /cta_fullwidth >}}
    design:
      spacing:
        padding: [0, 0, 0, 0]

  # ---------- Social (full-bleed) ----------
  - block: markdown
    id: redes
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            title="Keep the conversation going"
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
            Join us on social media and follow <strong style="color:#FFFFFF">@metadocencia</strong> for updates, discussions, and resources:
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
---
