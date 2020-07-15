import { babel } from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'tools'
    }
  ],
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    }),
    typescript()
  ]
}
