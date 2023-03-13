import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: 'index.js',
      output: {
        format: 'esm',
      },
    },
  },
});
