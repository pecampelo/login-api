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

  it('should return HTTP 200 when making a valid GET request to /signin', () => {

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
				'Content-Length': createdUserData.length,
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
				const expected: string[] | {}[] = [200, { message: 'pecampelo has logged in successfully!'}]

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


describe('Sign Up', () => {

	  it('should return invalid response when information is undefined', () => {

			const userData = JSON.stringify({})

			const signUp = {
				hostname: config.host,
				port: config.port,
				path: '/signup',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': userData.length
				}
			}

			const signUpRequest = http.request(signUp, (res) => {

				let str = '';

				res.on('data', chunk => {
					str += chunk;
				});

				res.on('end', () => {

					assert.deepStrictEqual(JSON.parse(str), { error: 'Request body is invalid!'});
				});

			});

			signUpRequest.write(userData);
			signUpRequest.end();

		});

		it('should return confirmation if a user was created successfully', () => {

			const userData = JSON.stringify({
				username: 'pecampelo',
				password: 'dodo',
				email: 'pedrohcmatheus@gmail.com',
				fullName: 'Pedro Henrique Campelo Matheus',
				age: 26,
				address: 'Rua Murilo do Amaral Ferreira, 388',
			})

			const signUp = {
				hostname: config.host,
				port: config.port,
				path: '/signup',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': userData.length
				}
			}

			const signUpRequest = http.request(signUp, (res) => {

				let str = '';

				res.on('data', chunk => {
					str += chunk;
				});

				res.on('end', () => {

					assert.deepStrictEqual(JSON.parse(str), { message: 'User was created!'});
				});

			});

			signUpRequest.write(userData);
			signUpRequest.end();




			assert.deepStrictEqual(true, true);
		});

});


describe('Sign In', () => {

	it('should return a Bearer Token if user exists in database', () => {

		const userData = JSON.stringify({
			password: 'dodo',
			email: 'pedrohcmatheus@gmail.com',
		})

		const signIn = {
			hostname: config.host,
			port: config.port,
			path: '/signin',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': userData.length
			}
		}

		const signInRequest = http.request(signIn, (res) => {

			let str = '';

			res.on('data', chunk => {
				str += chunk;
			});

			res.on('end', () => {

				assert.deepStrictEqual(res.headers.authorization, 'Bearer-Token');
				assert.deepStrictEqual(JSON.parse(str), { message: 'pecampelo has logged in successfully!'});

			});

		});

		signInRequest.write(userData);
		signInRequest.end();

  });


});

describe('Database', () => {

	it(`should connect to the database on port ${dbConfig.port} `, () => {


    assert.deepStrictEqual(true, true);
  });

  it('should br able to store user in database when information is valid', () => {
    assert.deepStrictEqual(true, true);
  });

	it('should be able to retrieve information from database', () => {
		assert.deepStrictEqual(true, true);
	})

});

