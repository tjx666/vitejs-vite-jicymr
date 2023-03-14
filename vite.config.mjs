import { defineConfig } from 'vite';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    rollupPluginNodeResolve({
      extensions: ['.js', '.ts', '.mjs', '.tsx', '.json', '.vue'],
    }),
  ],
  build: {
    rollupOptions: {
      input: 'index.js',
      output: {
        format: 'esm',
      },
    },
  },
});
