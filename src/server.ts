import http from 'http';
import bodyParser from './helpers/parsers';
import Router from './router/router';
import routes from './router/routes';

const router = new Router();

const server = http.createServer(async (req: any, res: any) => {
	console.log('🔨1');

	res.send = (statusCode: number, body: any) => {
		res.writeHead(statusCode, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(body));
	};

	// TODO: Parse URL

	// TODO: Receive body

	router.use(routes);

	const route = await router.find(req.url, req.method);
	console.log('🔨2');
	if (route) {

		if (req.method === 'POST' || req.method === 'GET') {

			try {

				await bodyParser(req, () => route.handler(req, res));

			} catch (err: any) {

				console.log(`\n${err.stack}\n`);
				return res.send(400, { error: 'Please check request.' });
			}

		} else {
			route.handler(req, res);

		}

	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end(`Cannot ${req.method} ${req.url}`);

	}

});

export default server;
