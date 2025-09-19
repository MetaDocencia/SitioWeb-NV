---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ---------- Boletín + Form (dos columnas con shortcode) ----------
  - block: features
    id: boletin-embed
    content:
      title: ""
      text: ""
      items:
        - name: "Boletín MetaDocencia"
          description: |
            <p class="text-lg leading-relaxed mb-4">
              Recibí en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
            </p>
            <p class="mb-0">
              <a href="https://www.metadocencia.org/boletines/" class="underline font-semibold" target="_blank" rel="noopener">
                Ver ediciones anteriores
              </a>
            </p>
        - name: "Suscribite"
          description: |
            {{< mc_form >}}
    design:
      columns: 2
      css_class: "text-gray-900 dark:text-gray-100 bg-gray-50"


  # ---------- Slack (BLANCO con texto oscuro + link oscuro) ----------
  - block: cta-card
    id: slack
    content:
      title: "Sumate a nuestro Slack"
      text: |
        Conectá con más de **+1000 personas** que comparten interés por la educación, la ciencia abierta y la colaboración.
        <a href="https://zenodo.org/records/10028136" style="color:#1F2937;text-decoration:underline;">Qué es Slack y cómo puedo sumarme a la conversación</a>
      button:
        text: "Unirme al espacio de Slack de MetaDocencia"
        url: "https://w3id.org/metadocencia/slack"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#E01E5A;color:#FFFFFF;"

  # ---------- Comunidades amigas (NARANJA #F77B20, logos debajo del texto) ----------
  - block: cta-card
    id: comunidades
    content:
      title: "Comunidades amigas"
      text: |
        Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center mt-4">
          <img src="/media/logos/comunidades/logo01.png" alt="Comunidad 1" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo02.png" alt="Comunidad 2" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo03.png" alt="Comunidad 3" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo04.png" alt="Comunidad 4" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo05.png" alt="Comunidad 5" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo06.png" alt="Comunidad 6" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo07.png" alt="Comunidad 7" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo08.png" alt="Comunidad 8" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo09.png" alt="Comunidad 9" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo10.png" alt="Comunidad 10" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo11.png" alt="Comunidad 11" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo12.png" alt="Comunidad 12" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo13.png" alt="Comunidad 13" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo14.png" alt="Comunidad 14" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo15.png" alt="Comunidad 15" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo16.png" alt="Comunidad 16" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo17.png" alt="Comunidad 17" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo18.png" alt="Comunidad 18" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo19.png" alt="Comunidad 19" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/comunidades/logo20.png" alt="Comunidad 20" class="max-h-10 w-auto opacity-95">
        </div>
      button:
        text: "Sumá tu comunidad"
        url: "mailto:info@metadocencia.org?subject=Sumar%20mi%20comunidad"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"

  # ---------- Auspiciantes / Apoya (AZUL #00506F, logos debajo del texto) ----------
  - block: cta-card
    id: auspiciantes
    content:
      title: "Apoya a MetaDocencia"
      text: |
        Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center mt-4">
          <img src="/media/logos/auspiciantes/logo01.png" alt="Auspiciante 1" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/auspiciantes/logo02.png" alt="Auspiciante 2" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/auspiciantes/logo03.png" alt="Auspiciante 3" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/auspiciantes/logo04.png" alt="Auspiciante 4" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/auspiciantes/logo05.png" alt="Auspiciante 5" class="max-h-10 w-auto opacity-95">
          <img src="/media/logos/auspiciantes/logo06.png" alt="Auspiciante 6" class="max-h-10 w-auto opacity-95">
        </div>
      button:
        text: "Acompañanos"
        url: "https://www.metadocencia.org/contacto/"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#00506F;color:#FFFFFF;"

  # ---------- Doná (solo botón, SIN recuadro rojo) ----------
  - block: cta-card
    id: dona
    content:
      title: ""
      text: ""
      button:
        text: "Doná — Formulario de donación"
        url: "https://www.metadocencia.org/contacto/"
    design:
      card:
        css_class: "border-0 shadow-none p-0"
        css_style: "background-color:transparent;color:#111827;"

  # ---------- Redes (nativo, sin íconos locales) ----------
  - block: features
    id: redes
    content:
      title: "Seguí la conversación"
      text: "@metadocencia · Sumate al intercambio en redes sociales."
      items:
        - name: "X (Twitter) →"
          link: "https://twitter.com/metadocencia"
        - name: "LinkedIn →"
          link: "https://www.linkedin.com/company/metadocencia/"
        - name: "YouTube →"
          link: "https://www.youtube.com/@metadocencia"
        - name: "Instagram →"
          link: "https://www.instagram.com/metadocencia/"
        - name: "Mastodon →"
          link: "https://mastodon.social/@metadocencia"
    design:
      columns: 5
      css_class: "text-gray-900 dark:text-gray-100"
---
