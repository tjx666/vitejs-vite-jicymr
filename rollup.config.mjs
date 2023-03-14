import nodeResolve from '@rollup/plugin-node-resolve';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'index.js',
  plugins: [
    nodeResolve({
      extensions: ['.js'],
    }),
  ],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
    {
      dir: 'dist/es',
      format: 'es',
    },
  ],
};
