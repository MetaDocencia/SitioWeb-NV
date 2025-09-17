---
title: "Blog"
type: landing
slug: "blog"

sections:
  - block: collection
    content:
      title: ""
      text: ""
      # Filtrar por la sección 'blog' (singular: 'folder')
      filters:
        folder: "blog"
      count: 60
      sort_by: "date"
      sort_ascending: false
      page_size: 12
      view: "card"
      show_image: true
      show_date: true
      show_read_time: true
      show_authors: true
      show_tags: true
      show_excerpt: true
      link_to_item: true
    design:
      columns: 2
      card:
        css_class: "hb-card-article"
---
