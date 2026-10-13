---
title: "Súmate y apoya a nuestra comunidad"
type: landing
slug: "cta"
aliases: ["/contacto/"]
design:
  spacing: "0rem"

sections:
  # ===== Entrada: título de la página + boletín =====
  - block: markdown
    id: boletin
    content:
      title: ""
      text: |
        {{< md_cta_hero
            title="Súmate y apoya a nuestra comunidad"
            subtitle="Boletín MetaDocencia"
            lead="Recibe en tu correo nuestras novedades, propuestas de formación, oportunidades y eventos de interés."
            link_text="Ver ediciones anteriores"
            link_url="/boletines/"
        >}}
        {{< mc_form >}}
        {{< /md_cta_hero >}}
    design:
      background:
        color: "#00506F"
        text_color_light: true
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]

  # ===== Lista: las otras tres formas de participar =====
  - block: markdown
    id: participar
    content:
      title: ""
      text: |
        {{< md_cta_item
            id="slack"
            title="Súmate a nuestra comunidad en Slack"
            accent="#E01E5A"
            link_text="Qué es y cómo sumarme"
            link_url="/post/20231219-mdenslack/"
            btn_text="Unirme al espacio de MetaDocencia"
            btn_url="https://w3id.org/metadocencia/slack"
        >}}
        Conecta con más de **1.070 personas** que comparten interés por la **educación**, la **ciencia abierta** y la **colaboración**. Comparte experiencias, aprende de otras personas y participa de conversaciones que inspiran nuevas ideas.
        {{< /md_cta_item >}}

        {{< md_cta_item
            id="comunidades"
            title="Comunidades amigas"
            accent="#F77B20"
            btn_fg="#111827"
            link_text="Conoce la red de comunidades"
            link_url="/quienes-somos/#comunidades-amigas"
            btn_text="Suma tu comunidad"
            btn_url="mailto:comunidades@metadocencia.org?subject=Sumar%20mi%20comunidad"
        >}}
        Amplificamos el trabajo de organizaciones que hacen de la ciencia abierta un esfuerzo global, colectivo y comunitario.
        {{< /md_cta_item >}}

        {{< md_cta_item
            id="auspiciantes"
            title="Apoya a MetaDocencia"
            accent="#C83737"
        >}}
        Nuestro trabajo es posible gracias al apoyo de instituciones y organizaciones que comparten nuestra misión. [Conoce a nuestros auspiciantes](/quienes-somos/#auspiciantes)

        Si tu organización comparte nuestra misión, escríbenos a [direccion@metadocencia.org](mailto:direccion@metadocencia.org) para explorar cómo colaborar.

        Puedes hacer tu aporte a través de nuestro [formulario de donación](/donar/) y ayudarnos a sostener y ampliar nuestras actividades.
        {{< /md_cta_item >}}
    design:
      spacing:
        padding: ["1.5rem", 0, "1.5rem", 0]
        margin: [0, 0, 0, 0]

  # ===== CTA final (sin cambios respecto de la versión actual) =====
  - block: markdown
    id: apoya
    content:
      title: ""
      text: |
        {{< cta_fullwidth
            id="apoya"
            title="Sigue el intercambio"
            text=""
            bg="#F3F4F6" color="#111827" btn_bg="#C83737" btn_fg="#FFFFFF"
            variant="background"
            maxw="1600px"
            content_maxw="1100px"
            align="center"
            py="2.5rem" px="clamp(1rem,4vw,3rem)"
            inner="raw"
        >}}
        <p>Acompáñanos en nuestras redes sociales y síguenos para no perderte novedades, debates y recursos: @metadocencia</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-4">
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://twitter.com/metadocencia" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Twitter
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.linkedin.com/company/metadocencia/" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             LinkedIn
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.youtube.com/@metadocencia" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             YouTube
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://www.instagram.com/metadocencia/" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Instagram
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://floss.social/@MetaDocencia" target="_blank" rel="me noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Mastodon
          </a>
          <a class="inline-block text-center no-underline font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm"
             href="https://bsky.app/profile/metadocencia.org" target="_blank" rel="noopener"
             style="background:#FFFFFF;border:1px solid rgba(148,163,184,0.6);color:#111827;">
             Bluesky
          </a>
        </div>
        {{< /cta_fullwidth >}}
---
