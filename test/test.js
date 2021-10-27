const assert = require('assert');
const { config } = require('../dist/config');
const { default: server} = require('../dist/src/server');

server.listen(config);

address = (`http://${config.host}:${config.port}`)


describe("API", () => {
  const intendedRoute = `http://${config.host}:${config.port}`;

  it(`should listen to server on ${intendedRoute}`, () => {
    assert.equal(address, intendedRoute);
  });

});