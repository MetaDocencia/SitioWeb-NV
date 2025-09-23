---
title: "Institucional"
type: landing
slug: "institucional"
design:
  spacing: "2rem"

sections:

  # ===== Gobernanza (1 columna ancha) =====
  - block: markdown
    id: gobernanza
    content:
      title: "Nuestra gobernanza"
      text: |
        <div class="max-w-none">
          <p>
            Si quieres conocer más sobre nuestra gobernanza, consulta estas publicaciones:
          </p>
          <ul class="list-disc pl-5">
            <li><a href="https://www.metadocencia.org/proyecto/gobernanza-2022/" class="underline">Gobernanza de MetaDocencia (2022)</a></li>
            <li><a href="https://www.metadocencia.org/proyecto/gobernanza-2024/" class="underline">Gobernanza 2.0 (2024)</a></li>
          </ul>
          <p class="opacity-90 mt-3">
            Nuestro enfoque de gobernanza prioriza la construcción de confianza, la rendición de cuentas y la transparencia (con atención a la privacidad), apoyando procesos abiertos y la participación comunitaria.
          </p>
        </div>

  # ===== Visión y Misión (2 columnas) =====
  - block: markdown
    id: vision-mision
    content:
      title: ""
      text: |
        <div class="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 class="text-2xl font-semibold mb-2">Visión</h3>
            <p>
              Trabajamos para que la producción, la comunicación y la aplicación de saberes
              científicos y técnicos sean globalmente equitativas.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-2">Misión</h3>
            <p>
              Construir capacidades científicas y técnicas en forma responsable y con mirada local,
              a través de la co-creación de redes, espacios de aprendizaje y recursos accesibles
              para comunidades hispanohablantes.
            </p>
          </div>
        </div>

  # ===== Valores (tarjetas) =====
  - block: features
    id: valores
    content:
      title: "Valores"
      items:
        - name: "Comunidad"
          description: "Trabajar para y con otras personas, anteponiendo los intereses colectivos por sobre los intereses individuales."
        - name: "Integridad"
          description: "Actuar siguiendo estos valores, construyendo y cuidando la confianza, mediante la apertura y la transparencia (con atención a la privacidad), rindiendo cuentas por nuestras acciones."
        - name: "Educación"
          description: "Contribuir al progreso de la sociedad mediante los aprendizajes comunitarios y personales."
        - name: "Bienestar"
          description: "Tratar a las demás personas con amabilidad, empatía y respeto, priorizando la salud mental y física, para mantener un ambiente de trabajo saludable y seguro."
        - name: "Diversidad"
          description: "Reconocer nuestras diferencias con las demás personas y darle la bienvenida respetuosa a todas las diferencias."
        - name: "Inclusión"
          description: "Abrir todas las puertas para la mayor cantidad de personas posible, mediante la accesibilidad universal y el reconocimiento por el trabajo realizado."
        - name: "Ciencia e Investigación"
          description: "Promover la ciencia y la investigación basándose en la teoría, el razonamiento, la experiencia y la evidencia resultante."
        - name: "Autonomía"
          description: "Actuar con responsabilidad y criterio individual, colectivo o regional, según corresponda en cada caso."
        - name: "Versatilidad"
          description: "Adaptar las acciones a las situaciones que se presentan."
    design:
      columns: 3

  # ===== Nos organizamos (imagen + texto) =====
  - block: cta-image-paragraph
    id: organizacion
    content:
      items:
        - title: "Nos organizamos"
          text: |
            En MetaDocencia diseñamos este mapa conceptual que institucionaliza nuestra forma de trabajo.
            Lo hicimos pensando en una estructura organizacional eficiente y versátil a la altura de los desafíos que tenemos por delante.
            Así, este esquema permite identificar grados de responsabilidad pero, a la vez, busca ser lo suficientemente dinámico
            para promover el trabajo colaborativo y el compromiso, la confianza, el reconocimiento y las oportunidades de crecimiento
            de las personas que hacemos MetaDocencia.

            <br><br>
            👉 <a href="https://zenodo.org/" class="underline">Para conocer más sobre la organización de MetaDocencia, accede al documento completo sobre el organigrama publicado en Zenodo.</a>
          image: "organigramaES.png"   # coloca esta imagen en static/media/organigrama.png o ajusta la ruta
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

  # ===== PdC y Accesibilidad (1 columna ancha) =====
  - block: markdown
    id: pautas-accesibilidad
    content:
      title: ""
      text: |
        <div class="max-w-none space-y-8">
          <section>
            <h3 class="text-2xl font-semibold mb-2">Pautas de convivencia</h3>
            <p>
              Nuestras <strong>Pautas de Convivencia (PdC)</strong> son la base que guía cada actividad y colaboración en MetaDocencia.
              Fueron construidas colectivamente y reflejan nuestra visión, misión y valores.
              Todas las personas que participan en nuestras iniciativas se comprometen a respetarlas y promoverlas.
            </p>
            <p class="mt-2">
              👉 <a href="https://www.metadocencia.org/pdc/" class="underline">Consulta las Pautas de Convivencia</a>
            </p>
          </section>

          <section>
            <h3 class="text-2xl font-semibold mb-2">Política de accesibilidad</h3>
            <p>
              Consulta la política de accesibilidad que sigue MetaDocencia para conocer los criterios y buenas prácticas
              que configuran nuestro marco de trabajo.
            </p>
            <p class="mt-2">
              👉 <a href="https://www.metadocencia.org/politica_accesibilidad/" class="underline">Política de Accesibilidad</a>
            </p>
          </section>
        </div>
---
