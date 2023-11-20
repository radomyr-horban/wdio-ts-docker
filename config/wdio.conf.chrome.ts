import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'chrome',
        // browserVersion: 'stable',
        // 'goog:chromeOptions': {
        //   args: ['headless', 'disable-gpu'],
        // },
      },
    ],
  },
}
