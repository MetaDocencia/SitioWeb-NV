---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
design:
  spacing: "3rem"

sections:

  # ---------- Boletín (full-width, formulario arreglado) ----------
  - block: markdown
    id: boletin-embed
    content:
      text: |
        {{< cta_fullwidth
            id="boletin-embed"
            title="Boletín MetaDocencia"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}

        <style>
        /* ====== SCOPE ESTRICTO AL BLOQUE ====== */
        #boletin-embed * { box-sizing: border-box; }

        /* Contenedores del embed más comunes (Mailchimp y genéricos) */
        #boletin-embed #mc_embed_shell,
        #boletin-embed #mc_embed_signup,
        #boletin-embed .mc-embed,
        #boletin-embed form {
          width: 100% !important;
          max-width: 48rem !important; /* ~768px */
          margin: 0 auto !important;
          background: transparent !important;
          color: #FFFFFF !important;
        }

        /* Layout de filas */
        #boletin-embed .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          width: 100%;
        }
        #boletin-embed .form-row--split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        @media (min-width: 640px) {
          #boletin-embed .form-row--split {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Etiquetas */
        #boletin-embed label,
        #boletin-embed .mc-field-group label {
          display: block !important;
          margin-bottom: 0.25rem !important;
          font-weight: 700 !important;
          color: #FFFFFF !important;
        }

        /* Campos (forzamos estilo sobre posibles inline-styles del embed) */
        #boletin-embed input[type="email"],
        #boletin-embed input[type="text"],
        #boletin-embed input[type="tel"],
        #boletin-embed select,
        #boletin-embed textarea,
        #boletin-embed .mc-field-group input,
        #boletin-embed .mc-field-group select,
        #boletin-embed .mc-field-group textarea {
          width: 100% !important;
          background: #FFFFFF !important;
          color: #111827 !important;
          border: 1px solid rgba(0,0,0,0.15) !important;
          border-radius: 0.5rem !important;
          padding: 0.65rem 0.8rem !important;
          line-height: 1.4 !important;
          min-height: 2.5rem !important;
        }

        /* Placeholders legibles */
        #boletin-embed ::placeholder { color: #6B7280 !important; opacity: 1; }

        /* Foco accesible */
        #boletin-embed input:focus,
        #boletin-embed select:focus,
        #boletin-embed textarea:focus {
          outline: 3px solid rgba(255,255,255,0.6) !important;
          outline-offset: 1px !important;
          border-color: #FFFFFF !important;
        }

        /* Botones de envío del embed (Mailchimp: .button, input[type=submit]) */
        #boletin-embed .button,
        #boletin-embed button[type="submit"],
        #boletin-embed input[type="submit"] {
          display: inline-block !important;
          background: #FFFFFF !important;
          color: #00506F !important;
          border: none !important;
          font-weight: 800 !important;
          border-radius: 9999px !important;
          padding: 0.65rem 1rem !important;
          cursor: pointer !important;
          text-decoration: none !important;
          white-space: nowrap !important;
        }
        #boletin-embed .button:hover,
        #boletin-embed button[type="submit"]:hover,
        #boletin-embed input[type="submit"]:hover {
          filter: brightness(0.95) !important;
        }

        /* Mensajes de estado */
        #boletin-embed .error, #boletin-embed .mce_inline_error {
          color: #FFE4E6 !important;
          background: rgba(255, 0, 0, 0.15) !important;
          padding: 0.4rem 0.6rem !important;
          border-radius: 0.375rem !important;
        }
        #boletin-embed .success, #boletin-embed .mc4wp-success {
          color: #ECFDF5 !important;
          background: rgba(16,185,129,0.2) !important;
          padding: 0.4rem 0.6rem !important;
          border-radius: 0.375rem !important;
        }

        /* Reset de listas/espacios que a veces rompen el layout del embed */
        #boletin-embed ul, #boletin-embed ol {
          padding-left: 1rem !important;
          margin: 0.5rem 0 !important;
        }
        </style>

        <div class="mx-auto max-w-3xl">
          <p class="text-lg leading-relaxed mb-4">
            Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés.
          </p>

          <!-- Wrapper opcional; el shortcode inserta el form dentro -->
          <div class="mt-2">
            {{< mc_form >}}
          </div>

          <p class="text-center mt-4">
            <a href="https://mdnv.netlify.app/boletines/" class="underline font-semibold" style="color:#FFFFFF">
              Ver ediciones anteriores
            </a>
          </p>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Slack (full-width con imagen + texto) ----------
  - block: markdown
    id: slack
    content:
      text: |
        {{< cta_fullwidth
            id="slack"
            title="Súmate a nuestra comunidad en Slack"
            bg="#E01E5A"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <!-- Columna imagen -->
          <div class="flex justify-center md:justify-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"
              alt="Slack"
              style="width:min(180px,40vw); height:auto;"
              loading="lazy">
          </div>

          <!-- Columna texto + botón -->
          <div>
            <p>
              Conecta con más de <strong style="color:#FFFFFF">+1070 personas</strong> interesadas en
              <strong style="color:#FFFFFF">educación</strong>, la <strong style="color:#FFFFFF">ciencia abierta</strong>
              y la <strong style="color:#FFFFFF">colaboración</strong>. Comparte experiencias, aprende de otras personas
              y participa de conversaciones que inspiran nuevas ideas.
            </p>
            <p class="mt-2">
              <a href="https://mdnv.netlify.app/post/20231219-mdenslack/"
                 style="color:#FFFFFF; text-decoration:underline;">
                 Qué es y cómo sumarme
              </a>
            </p>

            <div class="mt-4">
              <a href="https://w3id.org/metadocencia/slack"
                 class="inline-block font-semibold px-4 py-2 rounded-full"
                 style="background:#FFFFFF;color:#E01E5A;text-decoration:none;border:0;">
                 Unirme al espacio de MetaDocencia
              </a>
            </div>
          </div>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Comunidades amigas (full-width) ----------
  - block: markdown
    id: comunidades
    content:
      text: |
        {{< cta_fullwidth
            id="comunidades"
            title="Comunidades amigas"
            bg="#F77B20"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl">
          <p class="mb-6">
            Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
          </p>

          <!-- Logos -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            <img src="/media/sponsors/2i2c-sponsor.png" alt="2i2c" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo05.png" alt="Comunidad 5" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo06.png" alt="Comunidad 6" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo07.png" alt="Comunidad 7" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo08.png" alt="Comunidad 8" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo09.png" alt="Comunidad 9" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo10.png" alt="Comunidad 10" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo11.png" alt="Comunidad 11" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo12.png" alt="Comunidad 12" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo13.png" alt="Comunidad 13" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo14.png" alt="Comunidad 14" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo15.png" alt="Comunidad 15" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo16.png" alt="Comunidad 16" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo17.png" alt="Comunidad 17" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo18.png" alt="Comunidad 18" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo19.png" alt="Comunidad 19" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/logos/comunidades/logo20.png" alt="Comunidad 20" class="max-h-10 w-auto opacity-95" loading="lazy">
          </div>

          <!-- Botón -->
          <div class="mt-6">
            <a href="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
               class="inline-block font-semibold px-4 py-2 rounded"
               style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;text-decoration:none;">
               Suma tu comunidad
            </a>
          </div>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Apoya a MetaDocencia (full-width) ----------
  - block: markdown
    id: auspiciantes
    content:
      text: |
        {{< cta_fullwidth
            id="auspiciantes"
            title="Apoya a MetaDocencia"
            bg="#00506F"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl">
          <p>
            Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión.
          </p>

          <!-- Logos auspiciantes -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center mt-4">
            <img src="/media/sponsors/2i2c-sponsor.png" alt="2i2c" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/CSS_sponsor.png" alt="Center for Scientific Software" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/NASA_sponsor.png" alt="NASA" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/arecibo-sponsor.jpg" alt="Arecibo" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/czi_sponsor.png" alt="Chan Zuckerberg Initiative" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/gbmf_sponsor.png" alt="Gordon and Betty Moore Foundation" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/ioi_sponsor.png" alt="Invest in Open Infrastructure" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/inta_sponsor.jpg" alt="INTA" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/labi-sponsor.jpg" alt="Latin American Bioimaging" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/obf_sponsor.png" alt="Open Bioinformatics Foundation" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/ols-sponsor.jpg" alt="Open Life Science" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/quest_sponsor.jpg" alt="QUEST" class="max-h-10 w-auto opacity-95" loading="lazy">
            <img src="/media/sponsors/rladiesba_sponsor.jpg" alt="R-Ladies Buenos Aires" class="max-h-10 w-auto opacity-95" loading="lazy">
          </div>

          <!-- Texto de contacto + donación -->
          <p class="mt-6">
            Si tu organización comparte nuestra misión, escribinos a
            <a href="mailto:direccion@metadocencia.org" class="underline font-semibold" style="color:#FFFFFF">direccion@metadocencia.org</a>
            para explorar cómo colaborar.
          </p>
          <p class="mt-2">
            Podés hacer tu aporte a través de nuestro
            <a href="https://www.metadocencia.org/donar/" class="underline font-semibold" style="color:#FFFFFF">formulario de donación</a>
            y ayudarnos a sostener y ampliar nuestras actividades.
          </p>
        </div>
        {{</ cta_fullwidth >}}

  # ---------- Sigue el intercambio (redes, full-width) ----------
  - block: markdown
    id: redes
    content:
      text: |
        {{< cta_fullwidth
            id="redes"
            title="Sigue el intercambio"
            bg="#C83737"
            color="#FFFFFF"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
        >}}
        <div class="mx-auto max-w-6xl">
          <p>
            Acompañanos en nuestras redes sociales y seguinos para no perderte novedades, debates y recursos:
            <strong style="color:#FFFFFF">@metadocencia</strong>
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3">
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Twitter
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               LinkedIn
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               YouTube
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Instagram
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://mastodon.social/@metadocencia" target="_blank" rel="me noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Mastodon
            </a>
            <a class="inline-block text-center no-underline font-semibold px-3 py-2 rounded-full"
               href="https://bsky.app/profile/metadocencia.org" target="_blank" rel="noopener"
               style="background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.35);color:#FFFFFF;">
               Bluesky
            </a>
          </div>
        </div>
        {{</ cta_fullwidth >}}
---
