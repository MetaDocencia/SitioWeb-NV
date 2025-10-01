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

  # ===== Valores (sin fondo, con línea NARANJA arriba) =====
  - block: features
    id: valores
    content:
      title: ""
      text: |
        <div class="text-center">
          <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 auto 1.25rem auto;width:120px;"></div>
          <!-- Igual tamaño que Visión/Misión -->
          <h3 class="text-2xl font-semibold mb-3">Valores</h3>
        </div>
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

  # ===== Botones de Gobernanza (fondo gris, botones en fila) =====
  - block: markdown
    id: gobernanza-enlaces
    content:
      title: "Gobernanza MD"
      text: |
        <div class="max-w-3xl mx-auto text-center">
          <p class="mb-4">
            Si quieres conocer más sobre nuestra gobernanza, consulta estas publicaciones:
          </p>
          <div class="flex flex-wrap md:flex-nowrap justify-center gap-3">
            <a href="https://zenodo.org/records/12522913"
               class="inline-block px-5 py-2 rounded-md font-semibold text-white no-underline"
               style="background:#C83737;">
               Gobernanza MD 2.0 (2024)
            </a>
            <a href="https://zenodo.org/records/7398893#.Y7gW1HaZNPY"
               class="inline-block px-5 py-2 rounded-md font-semibold text-white no-underline"
               style="background:#00506F;">
               Gobernanza MD (2022)
            </a>
          </div>
        </div>
    design:
      css_class: "bg-gray-50 dark:bg-gray-800"

  # ===== Nos organizamos (CTA card con botón a Zenodo) =====
  - block: cta-card
    id: organizacion
    content:
      title: "Nos organizamos"
      text: "En MetaDocencia definimos una estructura organizacional eficiente y versátil para afrontar los desafíos que tenemos por delante."
      button:
        text: "Conoce el organigrama completo en Zenodo"
        url: "https://doi.org/10.5281/zenodo.11456152"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"

---
