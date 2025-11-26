---
title: "Join and support our community"
type: landing
slug: "cta"
aliases: ["/en/contacto/"]
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
            <a href="/en/newsletters/" class="underline font-semibold" style="color:#FFFFFF">
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

  # ---------- Slack ----------
  - block: cta-card
    id: slack
    content:
      title: "Join our Slack community"
      text: |
        Connect with <strong style="color:#FFFFFF;">1,070+ people</strong> interested in
        <strong style="color:#FFFFFF;">education</strong>, <strong style="color:#FFFFFF;">open science</strong>, and
        <strong style="color:#FFFFFF;">collaboration</strong>.<br>
        Share experiences, learn from others, and join conversations that spark new ideas.
      button:
        text: "Join MetaDocencia’s space"
        url: "https://w3id.org/metadocencia/slack"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#E01E5A;color:#FFFFFF;"

  # ---------- Partner Communities (no logos) ----------
  - block: cta-card
    id: comunidades
    content:
      title: "Partner Communities"
      text: |
        We amplify the work of organizations that make open science a global, collective, community-driven effort.  
        <a href="/en/quienes-somos/#comunidades-amigas" class="underline font-semibold" style="color:#FFFFFF">Meet the community network</a>
      button:
        text: "Add your community"
        url: 'mailto:comunidades@metadocencia.org?subject=Add%20my%20community'
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
        <a href="/en/quienes-somos/#trust">Meet our sponsors</a>

        If your organization shares our mission, email us at
        <a href="mailto:direccion@metadocencia.org">direccion@metadocencia.org</a>
        to explore ways to collaborate.

        You can also make a contribution through our
        <a href="/en/donar/">donation form</a>
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
