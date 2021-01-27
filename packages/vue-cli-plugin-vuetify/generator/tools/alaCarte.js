function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
      'vuetify-loader': '^1.7.0',
      sass: '^1.32.0',
      'sass-loader': '^8.0.0',
    },
  })
}

module.exports = {
  addDependencies,
}
