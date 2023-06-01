const httpServer = require('http-server')

httpServer.createServer({
  root: __dirname,
}).listen(8083);

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {},
  },
}
