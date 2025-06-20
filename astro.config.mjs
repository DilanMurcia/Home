// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: node({
    mode: 'middleware', // También podés usar 'standalone' o 'development'
  }),
  vite: {
    resolve: {
      alias: {//rutas relativas para importar módulos
        '@routes': '/src/backend/infraestructure/express/routes',
        '@controllers': '/src/backend/interfaces/controllers',
        '@middlewares': '/src/backend/infraestructure/express/middlewares',
        '@schemas': '/src/backend/shared/schemas',
        '@lib': '/src/backend/shared/lib',
        '@models': '/src/backend/infraestructure/db',
        '@usecases': '/src/backend/domain/auth/user-cases',
      },
    },
  },
});
