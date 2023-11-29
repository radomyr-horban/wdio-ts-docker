import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--no-sandbox', '--start-fullscreen', '--disable-infobars', '--disable-notifications'].concat(
            process.env.SELENOID === 'true'
              ? [
                  // When debugging with Selenoid support headless mode is not enabled
                  // to allow viewing actions in the browser.
                ]
              : ['--headless', '--disable-gpu']
          ),
          prefs: {
            directory_upgrade: true,
            prompt_for_download: false,
          },
        },
        'selenoid:options': {
          enableLog: true,
          ...(process.env.SELENOID === 'true'
            ? {
                enableVNC: true,
                enableVideo: true,
              }
            : {}),
        },
      },
      {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['--window-size=1280x1024x24'].concat(
            process.env.SELENOID === 'true'
              ? [
                  // When debugging with Selenoid support headless mode is not enabled
                  // to allow viewing actions in the browser.
                ]
              : ['-headless', '--disable-gpu']
          ),
        },
        acceptInsecureCerts: true,
        'selenoid:options': {
          enableLog: true,
          ...(process.env.SELENOID === 'true'
            ? {
                enableVNC: true,
                enableVideo: true,
              }
            : {}),
        },
      },
    ],
  },
}
