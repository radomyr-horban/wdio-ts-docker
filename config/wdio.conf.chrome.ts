import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'chrome',
        // browserVersion: 'stable',
        'goog:chromeOptions': {
          args: [
            // 'start-maximized',
            // 'start-fullscreen',
            '--window-size=1920,1080',
            '--headless',
            // 'disable-gpu',
            // 'no-sandbox',
            // 'disable-infobars',
          ],
        },
      },
    ],
  },
}
