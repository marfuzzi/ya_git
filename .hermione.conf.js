module.exports = {
    baseUrl: 'http://localhost:3000',

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
