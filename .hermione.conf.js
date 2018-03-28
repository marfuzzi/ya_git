module.exports = {
    baseUrl: 'http://0.0.0.0:3000',
    gridUrl: 'http://0.0.0.0:4444/wd/hub',
    sets: {
      desktop: {
          files: 'test/hermione'
      }
    },
    browsers: {
      chrome: {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      },
      firefox: {
          desiredCapabilities: {
              browserName: 'firefox'
          }
      }
    }
}
