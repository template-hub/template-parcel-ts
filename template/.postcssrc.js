module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {
      grid: true
    },
    'postcss-modules': {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      scopeBehaviour: 'local',
      globalModulePaths: [/styles\.global\.scss/]
    }
  }
}
