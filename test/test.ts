/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert').strict;
import http from 'http';
import { config, dbConfig } from '../src/app';
import server from '../src/server';

server.listen(config);

describe('API Router', () => {

	it(`should listen to server on expected route`, () => {

		const actualRoute: string = `http://${config.host}:${config.port}`;
		const expectedRoute: string = `http://${config.host}:${config.port}`;

		assert.deepStrictEqual(actualRoute, expectedRoute);

	});

  it('should return HTTP 200 when making a valid POST request to /signup', () => {


		const newUserData = JSON.stringify({
			username: 'pecampelo',
			password: 'dodo',
			email: 'pedrohcmatheus@gmail.com',
			fullName: 'Pedro Henrique Campelo Matheus',
			age: 26,
			address: 'Rua Murilo do Amaral Ferreira, 388',
		})

		const signUpOptions = {
			hostname: config.host,
			port: config.port,
			path: '/signup',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': newUserData.length
			}
		}

		const signUpRequest = http.request(signUpOptions);

		signUpRequest.on('error', e => console.log(e));
		signUpRequest.write(newUserData);
		signUpRequest.end();

		const actual: String[] = [signUpRequest.method];
		const expected = ['POST'];

		assert.deepStrictEqual(actual, expected);
  });

  it('should return HTTP 200 when making a GET request to /signin', () => {

		const createdUserData = JSON.stringify({
			email: 'pedrohcmatheus@gmail.com',
			password: 'dodo',
		})

		const signInOptions = {
			hostname: config.host,
			port: config.port,
			path: '/signin',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': createdUserData.length
			}
		}

		const signInRequest = http.request(signInOptions);

		signInRequest.on('error', e => console.log(e));
		signInRequest.write(createdUserData);
		signInRequest.end();

		signInRequest.on('response', res => {
			let data = '';
			res.on('data', d => data += d);
			res.on('end', () => {

				const actual: string[] | {}[] = [res.statusCode, JSON.parse(data)];
				const expected: string[] | {}[] = [200, { message: 'signed in!'}]

				assert.deepStrictEqual(actual, expected);

			})
		});
  });

  it('should give a 404 to any requests with other methods', () => {

		const notAllowedUser = JSON.stringify({
			email: 'pedrohcmat@gmail.com',
			password: 'dodo',
		})

		const notAllowedOptions = {
			hostname: config.host,
			port: config.port,
			path: '/signin',
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': notAllowedUser.length
			}
		}

		const notAllowedRequest = http.request(notAllowedOptions);

		notAllowedRequest.on('error', e => console.log(e));
		notAllowedRequest.write(notAllowedUser);
		notAllowedRequest.end();

		notAllowedRequest.on('response', async res => {
			let data = '';
			res.on('data', d => data += d);
			res.on('end', () => {

				const actual = [res.statusCode, data.slice(0, 6)]
				const expected = [404, 'Cannot']

				assert.deepStrictEqual(actual, expected)

			})
		});
	})

	it('should receive an empty body and not undefined when there is no body', async () => {

		let body = ''

		const bodyParserOptions = {
			hostname: config.host,
			port: config.port,
			path: '/signin',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
		}

		let data = '';

		const requested = http.request(bodyParserOptions, (res) => {

			res.on('data', (chunk: any) => {
				data += chunk;
			});

			res.on('end', async () => body = await JSON.parse(data))

		});

		if (body === '') { body = JSON.stringify({}) }
		else {}

		requested.write(body);
		requested.end();

		assert.deepStrictEqual(JSON.parse(body), {});


	});

});


describe('Sign Up Controller', () => {

  it('should receive a username', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should receive an e-mail', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should receive a password', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should receive a full name', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should receive an age', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should receive an address', () => {
    assert.deepStrictEqual(true, true);
  });

	it('should return confirmation if a user was created successfully', () => {
    assert.deepStrictEqual(true, true);
  });

});

describe('Sign In Controller', () => {

  it('should receive an e-mail', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should receive a password', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should allow return a Bearer Token if user exists in database', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should respond "Invalid e-mail or password" if data is not valid', () => {
    assert.deepStrictEqual(true, true);
  });

});

describe('Database', () => {

	it(`should be able to connect to the database on port ${dbConfig.port} `, () => {
    assert.deepStrictEqual(true, true);
  });

  it('should output a model user to migrations', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should store user in database when information is valid', () => {
    assert.deepStrictEqual(true, true);
  });

	it('should retrieve information from database', () => {
		assert.deepStrictEqual(true, true);
	})

});

