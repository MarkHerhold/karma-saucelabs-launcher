module.exports= function(config) {
  config.set({
    logLevel: 'INFO',

    autoWatch: false,
    basePath: '',
    frameworks: ['mocha'],
    files: [
      '*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    port: 9876,
    colors: true,
  })
}