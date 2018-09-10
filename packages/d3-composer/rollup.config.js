import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const banner = `//! ${pkg.name} v${pkg.version} - ${pkg.homepage} - @license: ${
  pkg.license
}`;
const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/d3-composer.js',
    name: 'd3c',
    extend: true,
    banner
  },
  plugins: [resolve(), filesize()]
};

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: 'dist/d3-composer.min.js'
    },
    plugins: [...config.plugins, terser({ output: { preamble: banner } })]
  }
];