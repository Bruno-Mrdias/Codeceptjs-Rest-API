const { bootstrap, teardown } = require("./server/server");
const server = require('./server/server.js')

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://swapi.dev/api/'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'

  },
  name: 'backend',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    bootstrap: async () => {
      await server.start();
    },

    teardown: async () => {
      await server.stop();
    }
  },
}