# ---------- Boletín (1 columna: título, texto, form y botón debajo) ----------
- block: cta-card
  id: boletin-embed
  content:
    title: "Boletín MetaDocencia"
    text: |
      <div class="mx-auto max-w-3xl">
        <p class="text-lg leading-relaxed mb-4">
          Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
        </p>

        <!-- Formulario embebido -->
        <div class="mt-2">
          {{< mc_form >}}
        </div>
      </div>
    button:
      text: "Ver ediciones anteriores"
      url: "https://www.metadocencia.org/boletines/"
  design:
    card:
      css_class: "text-gray-900 dark:text-gray-100"
      css_style: "background-color:#F9FAFB;"
    spacing:
      padding: ["0.75rem", 0, "0.75rem", 0]
      margin: [0, 0, 0, 0]
