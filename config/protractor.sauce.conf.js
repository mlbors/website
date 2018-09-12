const { SpecReporter } = require('jasmine-spec-reporter');

const buildNumber = 'travis-build#' + process.env.TRAVIS_BUILD_NUMBER;
const tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  allScriptsTimeout: 84000,
  getPageTimeout: 84000,
  maxSessions: 1,
  specs: [
    '../out-tsc/e2e/**/*.e2e-spec.js',
    '../out-tsc/e2e/**/*.po.js'
  ],
  multiCapabilities: [
    {
      browserName: 'safari',
      platform: 'macOS 10.13',
      name: "safari-osx-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'chrome',
      platform: 'macOS 10.13',
      name: "chrome-macos-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'chrome',
      platform: 'Windows 10',
      name: "chrome-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'firefox',
      platform: 'macOS 10.13',
      name: "firefox-macos-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'firefox',
      platform: 'Windows 10',
      name: "firefox-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      name: "ie-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      name: "edge-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'safari',
      name: 'safari-ios-tests',
      platformName: 'iOS',
      platformVersion: '11.3',
      deviceName: 'iPhone 8 Simulator',
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'chrome',
      name: 'chrome-android-tests',
      platformName: 'Android',
      platformVersion: '6.0',
      deviceName: 'Android Emulator',
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'chrome',
      platform: 'Linux',
      name: "chrome-linux-tests",
      shardTestFiles: true,
      maxInstances: 3
    },
    {
      browserName: 'firefox',
      platform: 'Linux',
      name: "firefox-linux-tests",
      shardTestFiles: true,
      maxInstances: 3
    }
  ],
  sauceBuild: buildNumber,
  tunnelIdentifier: tunnelIdentifier,
  directConnect: false,
  maxDuration: 8400,
  idleTimeout: 480,
  commandTimeout: 540,
  baseUrl: 'https://mlbors.github.io/website/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 84000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};