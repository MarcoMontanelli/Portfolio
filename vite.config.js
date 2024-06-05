import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('pdfjs-dist/build/pdf.worker.min.js')) {
            return 'pdf-worker';
          }
        },
      },
    },
  },
});
