import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  devOptions: {
    // Deshabilitar la barra de herramientas de desarrollo
    devToolbar: false,
  },
});