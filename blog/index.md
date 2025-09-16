---
title: "Blog"
type: landing
slug: "blog"

design:
  spacing: "3rem"

sections:
  # Encabezado simple
  - block: cta-card
    content:
      title: "Blog"
      text: "Estamos renovando el sitio. Mientras tanto, acá podés explorar las notas de nuestro archivo histórico."
    design:
      card:
        css_class: "bg-gray-50 dark:bg-gray-900"

  # Listado de notas (lee el feed del sitio viejo)
  - block: rss-list
    id: feed-blog
    content:
      # Opción A (recomendada con Netlify): usa el proxy local para evitar CORS
      feed_url: "/blog/feed"
      limit: 12
      show_excerpt: true
      show_date: true
    design:
      columns: 3
      css_class: "text-gray-900 dark:text-gray-100"

  # CTA al archivo completo
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
