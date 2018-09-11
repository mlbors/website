const { SpecReporter } = require('jasmine-spec-reporter');

const buildNumber = 'travis-build#'+process.env.TRAVIS_BUILD_NUMBER;
const tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  allScriptsTimeout: 12000,
  getPageTimeout: 12000,
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
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'chrome',
      platform: 'Linux',
      name: "chrome-linux-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'chrome',
      platform: 'macOS 10.13',
      name: "chrome-macos-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'chrome',
      platform: 'Windows 10',
      name: "chrome-latest-windows-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'firefox',
      platform: 'Linux',
      name: "firefox-linux-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'firefox',
      platform: 'macOS 10.13',
      name: "firefox-macos-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'firefox',
      platform: 'Windows 10',
      name: "firefox-latest-windows-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      name: "ie-latest-windows-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      name: "edge-latest-windows-tests",
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'safari',
      name: 'safari-ios-tests',
      platformName: 'iOS',
      platformVersion: '11.4',
      deviceName: 'iPhone 8',
      shardTestFiles: false,
      maxInstances: 1
    },
    {
      browserName: 'chrome',
      name: 'chrome-android-tests',
      platformName: 'Android',
      platformVersion: '8.0',
      deviceName: 'Android Emulator',
      shardTestFiles: false,
      maxInstances: 1
    }
  ],
  sauceBuild: buildNumber,
  tunnelIdentifier: tunnelIdentifier,
  directConnect: false,
  idleTimeout: 180,
  baseUrl: 'https://mlbors.github.io/website/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};