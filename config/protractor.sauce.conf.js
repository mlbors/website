const { SpecReporter } = require('jasmine-spec-reporter');

var buildNumber = 'travis-build#'+process.env.TRAVIS_BUILD_NUMBER;

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  allScriptsTimeout: 72000,
  getPageTimeout: 72000,
  specs: [
    '../out-tsc-e2e/**/*.e2e-spec.js',
    '../out-tsc-e2e/**/*.po.js'
  ],
  multiCapabilities: [
    {
      browserName: 'safari',
      platform: 'macOS 10.12',
      name: "safari-osx-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'chrome',
      platform: 'Linux',
      name: "chrome-linux-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'chrome',
      platform: 'macOS 10.12',
      name: "chrome-macos-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'chrome',
      platform: 'Windows 10',
      name: "chrome-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'firefox',
      platform: 'Linux',
      name: "firefox-linux-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'firefox',
      platform: 'macOS 10.12',
      name: "firefox-macos-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'firefox',
      platform: 'Windows 10',
      name: "firefox-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      name: "ie-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 5
    },
    {
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      name: "edge-latest-windows-tests",
      shardTestFiles: true,
      maxInstances: 5
    }
  ],
  sauceBuild: buildNumber,
  directConnect: false,
  baseUrl: 'https://mlbors.github.io/website/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};