---
title: "Qué hacemos"
type: landing
slug: "que-hacemos"
design:
  spacing: "3rem"

sections:
  # ---------- HERO ----------
  - block: hero
    content:
      title: '<span class="block text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">Potenciamos el ecosistema científico latinoamericano con infraestructura, formación y comunidad</span>'
    design:
      spacing:
        padding: ["0.75rem", 0, "0.75rem", 0]
        margin: [0, 0, 0, 0]
      css_style: "min-height: 20vh;"
      background:
        image:
          filename: "1naranjaazul.png"
          filters:
            brightness: 0.45
          size: cover
          position: center
        text_color_light: true

  # ---------- PILARES ----------
  - block: features
    id: pilares
    content:
      items:
        - name: "Impulsamos infraestructura"
          description: |
            <div style="height:4px;background:#00506F;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Promovemos infraestructura científica y tecnológica que soporta la producción, gestión y reutilización de conocimiento.
            <br>
            <a href="#infra"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#00506F;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Ver más
            </a>
        - name: "Formamos capacidades"
          description: |
            <div style="height:4px;background:#C83737;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Creamos programas de aprendizaje basados en evidencia, que transforman el conocimiento en acción y fortalecen a la comunidad científica con competencias de impacto local.
            <br>
            <a href="#formacion"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#C83737;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Ver más
            </a>
        - name: "Construimos comunidad"
          description: |
            <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 0 0.75rem 0;"></div>
            Fomentamos redes de apoyo y colaboración que trascienden disciplinas, instituciones y países, para crecer y visibilizar la ciencia desde América Latina hacia el mundo.
            <br>
            <a href="#comunidad"
               class="mt-3 inline-block no-underline font-semibold"
               style="background:#F77B20;color:#FFFFFF;padding:0.5rem 0.9rem;border-radius:0.5rem;">
               Ver más
            </a>
    design:
      columns: 3
      css_class: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"

  # ---------- PROYECTOS DESTACADOS ----------
  - block: features
    id: destacados
    content:
      title: "Proyectos destacados"
      items:
        - name: "Financiamiento a iniciativas científicas"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos formación estratégica para investigadores, fortaleciendo iniciativas, capacidades y redes para mejorar el acceso a financiación internacional.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/acceso-financiacion/">Ver más →</a>
        - name: "Formación en Ciencia Abierta"
          description: |
            <div style="height:3px;background:#C83737;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Con el apoyo de la NASA, diseñamos cohortes en español, pensadas para América Latina, para promover principios y herramientas de Ciencia Abierta.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/nasa-spanish/">Ver más →</a>
        - name: "Gobernanza"
          description: |
            <div style="height:3px;background:#F77B20;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Ofrecemos herramientas y asesoramiento en gobernanza para que personas y organizaciones logren mayor impacto y eficiencia.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/gobernanza-2022/">Ver más →</a>
    design:
      columns: 3

  # ---------- INFRA ----------
  - block: cta-card
    id: infra
    content:
      title: "Impulsamos Infraestructura"
      text: "Promovemos infraestructura científica y tecnológica que soporta la producción, gestión y reutilización de conocimiento"
    design:
      card:
        css_style: "background-color:#00506F;color:#FFFFFF;"

  - block: features
    id: infra-proyectos
    content:
      items:
        - name: "Catalyst"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Facilitamos la accesibilidad y la utilidad de la infraestructura en la nube para comunidades globales.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/catalyst/">Ver más →</a>
        - name: "Contextualización"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Desarrollamos recursos de calidad en español a partir de material originalmente publicado en otro idioma.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/contextualizacion/">Ver más →</a>
        - name: "Revisión abierta y equitativa en Latinoamérica"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Empoderamos redes latinoamericanas para promover la revisión abierta y equitativa de preimpresiones académicas y conjuntos de datos.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/revision-abierta/">Ver más →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Proyecto a incubar</span>
        - name: "Procesamiento de datos abiertos investigación"
          description: |
            <div style="height:3px;background:#00506F;border-radius:6px;margin:0 0 0.5rem 0;"></div>
            Garantizamos el acceso a computación de alto rendimiento (HPC) para redes de investigación nacionales y regionales de Latinoamérica.
            <a class="mt-2 inline-block font-semibold underline underline-offset-4"
               href="https://mdnv.netlify.app/proyecto/datosabiertos-latam/">Ver más →</a><br>
            <span class="mt-2 inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#E5E7EB;color:#374151;">Proyecto a incubar</span>
    design:
      columns: 4

  # ---------- FORMACIÓN ----------
  - block: cta-card
    id: formacion
    content:
      title: "Formamos capacidades"
      text: "Creamos programas de aprendizaje basados en evidencia..."
    design:
      card:
        css_style: "background-color:#C83737;color:#FFFFFF;"


---

