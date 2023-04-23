/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupThunks.ts'],
    exclude: ['node_modules', 'dist', 'coverage'],
  },
  build: {
    outDir: './dist/client',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve('./src/entry-client.tsx'),
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
