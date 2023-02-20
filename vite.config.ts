import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// Change this to your local domain
const host = 'ritin.test';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react(),
    mkcert(),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
  ssr: {
    noExternal: ['@inertiajs/server'],
  },
  server: {
    host,
    hmr: { host },
    https: true,
  },
});
