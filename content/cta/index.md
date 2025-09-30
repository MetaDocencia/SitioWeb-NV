- block: markdown
  id: estilos-logos
  content:
    title: ""
    text: |
      <style>
        /* ===== Ajustes para bloques con logos (Comunidades & Auspiciantes) ===== */
        section#comunidades,
        section#auspiciantes {
          --mdnv-logo-size: clamp(56px, 8vw, 84px);   /* tamaño de los círculos */
          --mdnv-gap: clamp(0.6rem, 2vw, 1.1rem);     /* separación consistente */
          color: #FFFFFF !important;                   /* texto blanco */
        }

        /* Enlaces en blanco (mantiene subrayado si lo tenés globalmente) */
        section#comunidades a,
        section#auspiciantes a {
          color: #FFFFFF !important;
        }

        /* Grilla: misma distancia y centrado de cada item */
        section#comunidades .grid,
        section#auspiciantes .grid {
          gap: var(--mdnv-gap) !important;
          justify-items: center !important;
          align-items: center !important;
        }

        /* Círculos (avatares/logos) con tamaño uniforme */
        section#comunidades img,
        section#auspiciantes img,
        section#comunidades .avatar,
        section#auspiciantes .avatar {
          width: var(--mdnv-logo-size) !important;
          height: var(--mdnv-logo-size) !important;
          border-radius: 9999px !important;
          object-fit: cover !important;
          display: block !important;
          margin: 0 !important; /* quita márgenes desalineados */
        }

        /* Quita paddings que a veces meten separación desigual en cada tarjeta */
        section#comunidades .p-6, section#comunidades .p-5, section#comunidades .p-4,
        section#comunidades .p-3, section#comunidades .p-2, section#comunidades .p-1,
        section#auspiciantes .p-6, section#auspiciantes .p-5, section#auspiciantes .p-4,
        section#auspiciantes .p-3, section#auspiciantes .p-2, section#auspiciantes .p-1 {
          padding: 0 !important;
        }

        /* Texto mucho más chico y blanco bajo cada logo (si existe) */
        section#comunidades .font-semibold,
        section#auspiciantes .font-semibold,
        section#comunidades .text-sm,
        section#auspiciantes .text-sm,
        section#comunidades .opacity-70,
        section#auspiciantes .opacity-70 {
          font-size: 0.72rem !important;
          line-height: 1.1 !important;
          color: #FFFFFF !important;
          text-align: center !important;
        }

        /* Centrado vertical del contenido dentro de cada item */
        section#comunidades .flex,
        section#auspiciantes .flex {
          align-items: center !important;
          justify-content: center !important;
        }
      </style>
