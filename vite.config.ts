/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupThunks.ts'],
    exclude: ['node_modules', 'dist', 'coverage', 'cypress'],
  },
  server: {
    host: true,
    port: 8080,
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
