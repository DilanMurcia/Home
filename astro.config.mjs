// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',  // Cambio de 'static' a 'server'
  adapter: node({
    mode: 'middleware', // Puedes usar 'development' en entorno de desarrollo
  }),
});
