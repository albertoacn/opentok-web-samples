const DEBUG = process.env.DEBUG;

const config = {

  // set to true it starts the test runner processes with an open debugger port
  debug: DEBUG,

  name: 'UI Tests',

  // sets the global timeout for all waitFor commands
  waitforTimeout: !DEBUG ? 30 * 1000 : Infinity,

  specs: [
    'test/*.js'
  ],

  
  maxInstances: !DEBUG ? 10 : 1,

  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'verbose',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './errorShots/',
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: 'http://localhost:8080',

  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: [],
  
  capabilities: [],

  framework: 'jasmine',

  mochaOpts: {
    timeout: !DEBUG ? 2 * 60 * 1000 : Infinity,
    ui: 'bdd'
  }
};

config.port = '9515';
config.path = '/';
config.services.push('chromedriver');
config.capabilities.push({
  browserName: 'chrome',
  chromeOptions: {
    args: ['use-fake-device-for-media-stream',
      'use-fake-ui-for-media-stream'],
  }
});
exports.config = config;