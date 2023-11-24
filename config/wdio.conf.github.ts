import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'chrome',
        // browserVersion: 'stable',
        'goog:chromeOptions': {
          args: ['--window-size=1920,1080', '--headless'],
        },
      },
      {
        browserName: 'firefox',
        // browserVersion: 'latest',
        'moz:firefoxOptions': {
          args: ['-headless'],
        },
      },
      {
        browserName: 'edge',
        // browserVersion: 'stable',
        'ms:edgeOptions': {
          args: ['--window-size=1920,1080', 'headless'],
        },
      },
    ],
  },
}
