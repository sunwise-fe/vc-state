import { defineConfig } from 'rollup'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import nodeResolver from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import bundleSize from 'rollup-plugin-bundle-size'
import { browser, main, module, typings } from './package.json'

const input = 'src/index.ts'
const external = ['vue']

export default defineConfig([
  {
    input,
    plugins: [nodeResolver(), commonjs(), esbuild()],
    external,
    output: [
      {
        format: 'esm',
        file: module
      },
      {
        format: 'cjs',
        file: main
      },
      {
        format: 'umd',
        file: browser,
        plugins: [minify(), bundleSize()],
        globals: {
          vue: 'Vue'
        },
        name: 'VCState'
      }
    ]
  },
  {
    input,
    plugins: [dts()],
    output: {
      format: 'esm',
      file: typings
    }
  }
])
