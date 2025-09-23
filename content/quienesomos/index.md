---
title: "Quienes somos"
type: landing
slug: "quienes-somos"
design:
  spacing: "3rem"

sections:

  # ===== HERO con imagen de fondo + botones rojos centrados + textos =====
  - block: hero
    id: hero-qs
    content:
      title: "Quienes somos"
      text: |
        <p class="text-white text-lg md:text-xl leading-snug max-w-4xl">
          MetaDocencia es una organización fundada en 2020. Nuestra comunidad está formada por personas y organizaciones que trabajan construyendo capacidades científicas locales para transformar la ciencia global. Hacemos crecer el conocimiento en red, desde América Latina hacia el mundo.
        </p>

        <!-- Botones rojos centrados -->
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          <a href="https://www.metadocencia.org/pdc/"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">
             Pautas de Convivencia
          </a>
          <a href="https://www.metadocencia.org/institucional/"
             class="inline-block no-underline font-semibold px-5 py-2 rounded-md text-base"
             style="background:#C83737;color:#FFFFFF;">
             Institucional
          </a>
        </div>

        <!-- Textos adicionales -->
        <div class="mt-4 space-y-2 text-center">
          <p class="text-white/95 text-base md:text-lg">
            <a href="https://mdnv.netlify.app/post/" class="underline font-semibold text-white">Lee cómo nació MetaDocencia</a> en palabras de nuestra Co-Directora, Laura Ación.
          </p>
          <p class="text-white/95 text-base md:text-lg">
            MetaDocencia, un proyecto con patrocinio fiscal de Code for Science &amp; Society.
          </p>
        </div>
    design:
      spacing:
        padding: ["0.5rem", 0, "0.5rem", 0]   # hero más bajo
        margin: [0, 0, "0.5rem", 0]
      background:
        image:
          filename: "quienessomos.jpg"
          filters:
            brightness: 0.35
          size: cover
          position: center
          parallax: false
        text_color_light: true
      css_style: "min-height: 24vh;"

  # ===== Vamos por 5 años más (TEXTO + VIDEO YouTube 16:9, fondo blanco) =====
  - block: markdown
    id: solutions
    content:
      title: "Vamos por 5 años más"
      text: |
        <div class="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <p>
              Durante nuestros primeros 5 años tejimos lazos entre más de 2.000 profesionales de ciencia y técnica. Lo hicimos trabajando en equipo, de manera colectiva y en alianza con más de 40 comunidades. Gracias por estos primeros 5 años de aprendizaje, colaboración y crecimiento.
            </p>
          </div>
          <div class="relative w-full" style="padding-top:56.25%;">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/Mcq0-4cyGKQ"
              title="MetaDocencia - 5 años"
              loading="lazy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
    design:
      css_style: "background-color:#FFFFFF;color:#111827;"
      spacing:
        padding: ["2rem", 0, "1.25rem", 0]   # ↑ un poco más de espacio arriba del título

  # ===== MetaDocencia en números (fondo gris) =====
  - block: stats
    id: numeros
    content:
      title: "MetaDocencia en números"
      items:
        - statistic: "+40"
          description: "alianzas y patrocinadores"
        - statistic: "88"
          description: "personas colaboran con MetaDocencia"
        - statistic: "+1,070"
          description: "integrantes en Slack"
        - statistic: "+6,000"
          description: "personas conectadas en redes sociales"
        - statistic: "+2,600"
          description: "suscripciones activas a nuestro boletín"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["0.25rem", 0, "0.25rem", 0]   # ↓ bastante menos arriba/abajo del título

  # ===== Estilos locales: comprimir márgenes del título y aumentar gap entre stats =====
  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* Más espacio entre ítems de estadísticas */
          section#numeros .grid { gap: 1.75rem !important; }

          /* Comprimir margen del título en la sección de números */
          section#numeros h1, section#numeros h2, section#numeros .section-title {
            margin-top: 0.15rem !important;
            margin-bottom: 0.35rem !important;
          }
        </style>

  # --- Colaboran con MetaDocencia ---
- block: markdown
  id: colaboradores
  content:
    title: "Colaboran con MetaDocencia"
    text: |
      {{/* Lista de autores filtrada por user_groups = "Colaboradores" */}}
      {{ $grupo := slice "Colaboradores" }}
      {{ $autores := where site.Pages "Section" "authors" }}

      {{ $autores_filtrados := slice }}
      {{ range $autores }}
        {{ $ug := .Params.user_groups }}
        {{ if and $ug (gt (len (intersect $ug $grupo)) 0) }}
          {{ $autores_filtrados = $autores_filtrados | append . }}
        {{ end }}
      {{ end }}

      {{ $autores_filtrados = sort $autores_filtrados ".Params.weight" | sort "Title" }}

      <div class="w-full px-0">
        <div class="grid gap-x-8 gap-y-10 grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
          {{ range $p := $autores_filtrados }}
            {{ $img := "" }}
            {{ with $p.Resources.GetMatch "avatar*" }}{{ $img = .RelPermalink }}{{ else }}
              {{ with $p.Params.image }}{{ $img = ( . | relURL ) }}{{ end }}
            {{ end }}

            <a href="{{ $p.RelPermalink }}" class="block text-center no-underline hover:opacity-90">
              <div class="mx-auto">
                {{ if $img }}
                  <img
                    src="{{ $img }}"
                    alt="{{ $p.Title }}"
                    loading="lazy"
                    class="block rounded-full object-cover object-center"
                    style="width: 7rem; height: 7rem;"
                  />
                {{ else }}
                  <div class="rounded-full" style="width: 7rem; height: 7rem; background:#e5e7eb;"></div>
                {{ end }}
              </div>
              <div class="mt-3">
                <div class="font-semibold leading-tight">{{ $p.Title }}</div>
                {{ with $p.Params.role }}<div class="text-sm opacity-70 leading-tight">{{ . }}</div>{{ end }}
                {{ with (index $p.Params "organizations") }}
                  {{ with (index . 0) }}
                    {{ with .name }}<div class="text-sm opacity-70 leading-tight">{{ . }}</div>{{ end }}
                  {{ end }}
                {{ end }}
              </div>
            </a>
          {{ end }}
        </div>
      </div>

# --- Auspiciantes ---
- block: markdown
  id: auspiciantes
  content:
    title: "Auspiciantes"
    text: |
      {{/* Lista de autores filtrada por user_groups = "Auspiciantes" */}}
      {{ $grupo := slice "Auspiciantes" }}
      {{ $autores := where site.Pages "Section" "authors" }}

      {{ $autores_filtrados := slice }}
      {{ range $autores }}
        {{ $ug := .Params.user_groups }}
        {{ if and $ug (gt (len (intersect $ug $grupo)) 0) }}
          {{ $autores_filtrados = $autores_filtrados | append . }}
        {{ end }}
      {{ end }}

      {{ $autores_filtrados = sort $autores_filtrados ".Params.weight" | sort "Title" }}

      <div class="w-full px-0">
        <div class="grid gap-x-8 gap-y-10 grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
          {{ range $p := $autores_filtrados }}
            {{ $img := "" }}
            {{ with $p.Resources.GetMatch "avatar*" }}{{ $img = .RelPermalink }}{{ else }}
              {{ with $p.Params.image }}{{ $img = ( . | relURL ) }}{{ end }}
            {{ end }}

            <a href="{{ $p.RelPermalink }}" class="block text-center no-underline hover:opacity-90">
              <div class="mx-auto">
                {{ if $img }}
                  <img
                    src="{{ $img }}"
                    alt="{{ $p.Title }}"
                    loading="lazy"
                    class="block rounded-full object-cover object-center"
                    style="width: 7rem; height: 7rem;"
                  />
                {{ else }}
                  <div class="rounded-full" style="width: 7rem; height: 7rem; background:#e5e7eb;"></div>
                {{ end }}
              </div>
              <div class="mt-3">
                <div class="font-semibold leading-tight">{{ $p.Title }}</div>
                {{ with $p.Params.role }}<div class="text-sm opacity-70 leading-tight">{{ . }}</div>{{ end }}
                {{ with (index $p.Params "organizations") }}
                  {{ with (index . 0) }}
                    {{ with .name }}<div class="text-sm opacity-70 leading-tight">{{ . }}</div>{{ end }}
                  {{ end }}
                {{ end }}
              </div>
            </a>
          {{ end }}
        </div>
      </div>

  # CTA final
  - block: cta-card
    id: apoya
    content:
      title: "Apoya a la ciencia latinoamericana"
      text: "Aquí te contamos cómo"
      button:
        text: "Súmate"
        url: "https://www.metadocencia.org/contacto/"
    design:
      card:
        css_class: "bg-primary-700"
        css_style: ""
---
