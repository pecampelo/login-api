import http from 'http';
import { bodyParser } from './helpers/parsers';

const server = http.createServer( async (req: any, res: any) => {

	res.send = (statusCode: number, body: any) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  }

	// TODO: Parse URL

  // TODO: Receive body

	await bodyParser(req);
  //



	if (req.method === 'GET' && req.url === '/') {
		return res.send(200, {
			endpoints: [
				'/signin',
				'/signup'
			]
		})
	}

  if (req.method === 'GET' && req.url === '/signin') {
    return res.send(200, { message: 'server is online' });
  }

	if (req.method === 'POST' && req.url === '/signup') {
		// console.log(req.body)
    return res.send(200, { message: 'posted'});
  }

	else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end(`Cannot ${req.method} ${req.url}`);
		return;
  }

});

export default server;
