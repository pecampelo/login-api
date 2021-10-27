const assert = require('assert');
const http = require('http');
const { config } = require('../dist/config');
const { default: server } = require('../dist/src/server');

server.listen(config);

const address = (`http://${config.host}:${config.port}`)
const intendedRoute = `http://${config.host}:${config.port}`;


describe("API", () => {

  it(`should listen to server on ${intendedRoute}`, () => {
    assert.equal(address, intendedRoute);
  });

  it(`should output method and endpoint to the console when receiving requests`, () => {

  });

});

describe("Router", () => {

  it(`should return HTTP 200 when making a POST request to /signup`, () => {
    assert.equal(true, true)
  });
  
  it(`should return HTTP 200 when making a GET request to /signin`, () => {
    assert.equal(true, true)
  });
  
  it(`should not allow PUT, DELETE, PATCH requests to any endpoint`, () => {
    assert.equal(true, true)
  });

});

describe("Body Parser"), () => {

  it(`should not receive undefined when there is no body`, () =>{
    assert.equal(true, true)
  });

  it(`should receive a body as an object`, () => {
    assert.equal(true, true)
  });

}

describe("/signup", () => {
  
  it(`must receive user data in the controller`, () => {
    assert.equal(true, true)
  });

  it(`should store user in database`, () => {
    assert.equal(true, true)
  });
  
  it(`returns a confirmation that the user was created when username, password, e-mail, full name, age and address are provided correctly`, () => {
    assert.equal(true, true)
  })
  
  it('should migrate the user to the database', () => {

  });

})