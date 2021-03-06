import base from '../../rollup.config'
const pkg = require('./package.json')

export default {
  ...base,
  input: 'src/main.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ]
}
