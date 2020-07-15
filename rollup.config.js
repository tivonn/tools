import { babel } from '@rollup/plugin-babel'

export default {
  input: 'src/main.js',
  output:[
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
    })
  ]
}
