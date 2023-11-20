import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'edge',
        // browserVersion: 'stable',
        // 'ms:edgeOptions': {
        //   args: ['headless'],
        // },
      },
    ],
  },
}
