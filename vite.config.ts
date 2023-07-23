import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      styles: '/src/styles',
      components: '/src/components',
      api: '/src/api',
      store: '/src/store',
      hooks: '/src/hooks',
    },
  },
});
