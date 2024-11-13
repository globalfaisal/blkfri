const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  'src/**/*.ts?(x)': () => 'tsc-files --noEmit',
  '*.{json,md,yml,yaml}': ['prettier --write'],
}
