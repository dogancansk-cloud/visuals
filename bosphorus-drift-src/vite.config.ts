import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  publicDir: false,
  build: { outDir: '../bosphorus-drift', emptyOutDir: false, sourcemap: false, chunkSizeWarningLimit: 1200, target: 'es2022' },
});
