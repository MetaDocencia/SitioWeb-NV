# ---------- Slack (markdown: imagen derecha, texto izquierda, padding reducido) ----------
- block: markdown
  id: slack
  content:
    title: "Súmate a nuestra comunidad en Slack"
    text: |
      <style>
        /* Contenedor alineado con el resto del sitio */
        section#slack .mdnv-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding-left: clamp(0.75rem, 3vw, 1.5rem);
          padding-right: clamp(0.75rem, 3vw, 1.5rem);
        }
        /* Grid 2 columnas (texto izquierda, imagen derecha) */
        section#slack .mdnv-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(1rem, 3vw, 2rem);
          align-items: center;
        }
        /* En móviles, apilado */
        @media (max-width: 900px) {
          section#slack .mdnv-grid { grid-template-columns: 1fr; }
        }
        /* Texto con padding lateral más chico */
        section#slack .mdnv-text { padding: 0 clamp(.25rem, 2vw, .75rem); }
        /* Imagen más chica y responsive */
        section#slack .mdnv-img { text-align: center; }
        section#slack .mdnv-img img {
          width: min(360px, 100%);
          height: auto;
        }
      </style>

      <div class="mdnv-wrap">
        <div class="mdnv-grid">
          <!-- Columna de TEXTO (izquierda) -->
          <div class="mdnv-text">
            <p>
              Conecta con más de <strong>+1070 personas</strong> que comparten interés por la
              <strong>educación</strong>, la <strong>ciencia abierta</strong> y la <strong>colaboración</strong>.
              Comparte experiencias, aprende de otros y participa de conversaciones que inspiran nuevas ideas.
            </p>
            <p class="mt-3">
              <a href="/post/20231219-mdenslack/" class="underline font-semibold">Qué es y cómo sumarme</a>
            </p>
            <p class="mt-4">
              <a href="https://w3id.org/metadocencia/slack"
                 class="inline-block no-underline font-semibold px-5 py-2 rounded-md"
                 style="background:#111827;color:#FFFFFF;">
                 Unirme al espacio de MetaDocencia
              </a>
            </p>
          </div>

          <!-- Columna de IMAGEN (derecha) -->
          <div class="mdnv-img">
            <img src="/media/slack.png" alt="Slack de MetaDocencia">
          </div>
        </div>
      </div>
  design:
    css_style: "background-color:#FFFFFF;color:#111827;"
