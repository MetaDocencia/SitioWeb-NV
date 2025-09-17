/* ---- Estilo compacto para bloques 'people' ---- */
section.people-sm .container { /* asegurar un poco menos de padding interno */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

/* Grid: reducir el tamaño visual de cada tarjeta */
section.people-sm [class*="grid"] > * {
  padding: 0.25rem;
}

/* Avatar circular y más chico */
section.people-sm img {
  width: 90px !important;
  height: 90px !important;
  border-radius: 9999px !important; /* círculo */
  object-fit: cover !important;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

/* Tipografías más pequeñas en las tarjetas */
section.people-sm .font-semibold {
  font-size: 0.95rem;  /* ~15px */
  line-height: 1.2;
}
section.people-sm .text-sm,
section.people-sm .opacity-70 {
  font-size: 0.75rem;  /* ~12px */
  line-height: 1.1;
  opacity: 0.8;
}

/* Menos aire dentro de cada tarjeta */
section.people-sm .p-4 { padding: 0.5rem !important; }
section.people-sm .p-6 { padding: 0.5rem !important; }
section.people-sm .py-6 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }

/* Si el tema agrega sombras/bordes grandes, suavizarlos */
section.people-sm .shadow,
section.people-sm .shadow-sm {
  box-shadow: none !important;
}
