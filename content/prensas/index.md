---
title: "MetaDocencia en los medios"
type: landing
slug: "en-los-medios"
design:
  spacing: "2.25rem"

sections:
  # ===== Hero compacto =====
  - block: hero
    content:
      title: "MetaDocencia en los medios"
      text: "Coberturas, entrevistas y menciones publicadas en medios y blogs (en su idioma original)."
    design:
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
      css_style: "min-height:auto;"

  # ===== Intro (markdown) =====
  - block: markdown
    content:
      text: |
        <p class="text-gray-700 dark:text-gray-300">
          A continuación verás el mismo conjunto de notas de prensa presentado en <strong>seis formatos diferentes</strong>.
          Esto facilita elegir el estilo que mejor se adapte a cada momento del sitio.
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Tip: si algo no aparece, verificá que cada ítem tenga <code>type: "prensa"</code> o esté en la carpeta <code>content/prensas/</code>.
        </p>

  # ===== CTA (features) =====
  - block: features
    content:
      items:
        - name: "Suscribite por RSS"
          description: "Recibí automáticamente las nuevas apariciones en medios."
          icon: rss
          link: "/index.xml"
    design:
      columns: 1

  # ====== 1) Vista Tarjetas (cards) ======
  - block: collection
    id: vista-cards
    content:
      title: "Formato tarjeta"
      filters:
        # Usá uno o ambos según tu estructura
        page_type: "prensa"
        folders: ["prensas"]
      sort:
        by: date
        order: desc
    design:
      view: card
      columns: 3

  # ====== 2) Vista Compacta ======
  - block: collection
    id: vista-compact
    content:
      title: "Formato compacto"
      filters:
        page_type: "prensa"
        folders: ["prensas"]
      sort:
        by: date
        order: desc
    design:
      view: compact
      columns: 1

  # ====== 3) Vista Lista ======
  - block: collection
    id: vista-list
    content:
      title: "Formato lista"
      filters:
        page_type: "prensa"
        folders: ["prensas"]
      sort:
        by: date
        order: desc
    design:
      view: list
      columns: 1

  # ====== 4) Vista Showcase (filas alternadas) ======
  - block: collection
    id: vista-showcase
    content:
      title: "Formato showcase"
      filters:
        page_type: "prensa"
        folders: ["prensas"]
      sort:
        by: date
        order: desc
    design:
      view: showcase
      flip_alt_rows: true

  # ====== 5) Vista Masonry ======
  - block: collection
    id: vista-masonry
    content:
      title: "Formato masonry"
      filters:
        page_type: "prensa"
        folders: ["prensas"]
      sort:
        by: date
        order: desc
    design:
      view: masonry
      columns: 3

  # ====== 6) Cards 2 columnas (alternativa) ======
  - block: collection
    id: vista-cards-2col
    content:
      title: "Formato tarjeta (2 columnas)"
      filters:
        page_type: "prensa"
        folders: ["prensas"]
      sort:
        by: date
        order: desc
    design:
      view: card
      columns: 2
---
