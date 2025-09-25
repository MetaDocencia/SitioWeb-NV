---
title: "Institucional"
type: landing
slug: "institucional"
design:
  spacing: "2rem"

sections:

  # ===== Visión =====
  - block: markdown
    id: vision
    content:
      title: ""
      text: |
        <div class="text-center max-w-3xl mx-auto">
          <!-- Línea ROJA arriba de Visión -->
          <div style="height:4px;background:#C83737;border-radius:6px;margin:0 auto 1.5rem auto;width:120px;"></div>
          <h3 class="text-2xl font-semibold mb-3">Visión</h3>
          <p class="text-lg">
            Trabajamos para que la producción, la comunicación y la aplicación de saberes
            científicos y técnicos sean globalmente equitativas.
          </p>
        </div>

  # ===== Misión =====
  - block: markdown
    id: mision
    content:
      title: ""
      text: |
        <div class="text-center max-w-3xl mx-auto">
          <!-- Línea AZUL arriba de Misión -->
          <div style="height:4px;background:#00506F;border-radius:6px;margin:0 auto 1.5rem auto;width:120px;"></div>
          <h3 class="text-2xl font-semibold mb-3">Misión</h3>
          <p class="text-lg">
            Construir capacidades científicas y técnicas en forma responsable y con mirada local,
            a través de la co-creación de redes, espacios de aprendizaje y recursos accesibles
            para comunidades hispanohablantes.
          </p>
        </div>

  # ===== Valores (tarjetas, fondo gris) =====
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
      css_class: "bg-gray-50 dark:bg-gray-900"

  # ===== Texto con enlaces de Gobernanza (debajo de Valores) =====
  - block: markdown
    id: gobernanza-enlaces
    content:
      title: ""
      text: |
        <div class="max-w-3xl mx-auto">
          <p class="mb-3">
            Si quieres conocer más sobre nuestra gobernanza, consulta estas publicaciones:
          </p>
          <ul class="list-disc pl-5">
            <li>Gobernanza de MetaDocencia (2022) <a href="https://zenodo.org/records/7398893#.Y7gW1HaZNPY" class="underline">https://zenodo.org/records/7398893#.Y7gW1HaZNPY</a></li>
            <li>Gobernanza 2.0 (2024) <a href="https://zenodo.org/records/12522913" class="underline">https://zenodo.org/records/12522913</a></li>
          </ul>
        </div>

  # ===== Nos organizamos (fondo blanco en light / oscuro en dark) =====
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
            👉 <a href="https://doi.org/10.5281/zenodo.11456152" class="underline">Para conocer más sobre la organización de MetaDocencia, accede al documento completo sobre el organigrama publicado en Zenodo.</a>
          image: "organigramaES.jpg"
    design:
      css_class: "bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
---
