
module.exports = function(config) {
  var configuration = {
      basePath: '.',
      plugins: ['karma-*'],
      frameworks: ['jasmine', 'browserify'],
      crossOriginAttribute: false,
      files: [
        'https://static.opentok.com/v2/js/opentok.min.js',
        'js/config.js', 
        'test/unit/app_spec.js'
      ],
      exclude: [
      ],
      preprocessors: {
       'js/app.js': ['coverage'],
       'js/*.js': [ 'browserify' ],
       'test/unit/app_spec.js': [ 'browserify' ],
      },
      reporters: ['progress', 'coverage'],
      port: 9877,
      colors: true,
      autoWatch: true,
      browsers: [],
      singleRun: true,
      logLevel: config.LOG_INFO,
      coverageReporter: {
          dir: 'test/coverage',
          instrumenter: {
              'js/app.js': ['istanbul']
          },
          reporters: [
              { type: 'lcov', subdir: 'report-lcov' }
          ]
      },
      customLaunchers: {
        Chrome_test: {
          base: 'Chrome',
          flags: ['--no-sandbox']
        }
      }
  };
configuration.browsers = ['Chrome_test'];
config.set(configuration);
};