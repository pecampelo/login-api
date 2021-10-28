import http from 'http';
import { bodyParser } from './helpers/parsers';
import Router from './router/router';
import routes from './router/routes';

const router = new Router();

const server = http.createServer( async (req: any, res: any) => {

	res.send = (statusCode: number, body: any) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  }

	// TODO: Parse URL

  // TODO: Receive body

	router.use(routes)
	const route = await router.find(req.url, req.method);

	if (route) {

		if (req.method === 'POST') {
			try {
				await bodyParser(req, () => route.handler(req, res))
			}
			catch (err: any) {
				console.log(err.message)
			}

		} else {
			route.handler(req, res)

		}

	}

	else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end(`Cannot ${req.method} ${req.url}`);
		return;
  }

});

export default server;
