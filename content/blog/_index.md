---
title: "Blog"
type: landing
slug: "blog"
design:
  spacing: "3rem"

sections:
  # Título simple (sin hero)
  - block: cta-card
    content:
      title: '<h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 my-0">Blog</h1>'
      text: ""
    design:
      spacing:
        padding: ["0.5rem", 0, "0.5rem", 0]
        margin: [0, 0, 0, 0]
      card:
        css_class: "bg-transparent shadow-none p-0"
        css_style: "border:0;box-shadow:none;"

  # Listado de posts en tarjetas (similar al ejemplo)
  - block: collection
    id: blog-list
    content:
      search:
        enabled: true
        placeholder: "Buscar notas…"
      # Ajustá según dónde tengas tus posts (usa UNA o ambas carpetas)
      filters:
        folders: ["post", "blog"]
      count: 24
      sort_by: "date"
      sort_ascending: false
      page_size: 12
      view: "card"          # tarjetas con imagen, título, meta, extracto
      show_image: true
      show_date: true
      show_read_time: true
      show_authors: true
      show_tags: true
      show_excerpt: true
      link_to_item: true
      empty_text: "Pronto publicaremos más notas."
    design:
      columns: 2
      card:
        css_class: "hb-card-article"
---
