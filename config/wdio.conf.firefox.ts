import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'firefox',
        // browserVersion: 'latest',
        'moz:firefoxOptions': {
          args: ['-headless'],
        },
      },
    ],
  },
}
