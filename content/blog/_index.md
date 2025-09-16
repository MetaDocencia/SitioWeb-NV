---
title: "Blog"
type: landing
slug: "blog"

design:
  spacing: "3rem"

sections:
  - block: cta-card
    content:
      title: "Blog"
      text: "Estamos renovando el sitio. Mientras tanto, explorá las notas de nuestro archivo histórico."
    design:
      card:
        css_class: "bg-gray-50 dark:bg-gray-900"

  - block: rss-list
    id: feed-blog
    content:
      feed_url: "/blog/feed"   # ← ahora pega contra la Function
      limit: 12
      show_excerpt: true
      show_date: true
    design:
      columns: 3
      css_class: "text-gray-900 dark:text-gray-100"

  - block: cta-card
    content:
      title: ""
      text: ""
      button:
        text: "Ver archivo completo →"
        url: "https://www.metadocencia.org/post/"
    design:
      card:
        css_class: "bg-transparent shadow-none p-0"
---
