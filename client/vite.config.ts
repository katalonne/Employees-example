import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    })
  ],
  build: {
    outDir: 'build', // <-- changed this from 'dist' to 'build'
    // optional: to resolve paths relative to project root
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/src/components/FormDialog.tsx')) {
            return 'form-dialog';
          }
          if (
            id.includes('/src/components/') ||
            id.includes('/src/features/')
          ) {
            return 'ui';
          }
        },
        
      },
    },
  },
});
