import http from 'http';

const server = http.createServer((req: any, res: any): void => {
  // TODO: Parse URL

  // TODO: Receive body

  //

  res.send = (statusCode: number, body: any) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  }

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
    return res.send(200, { message: 'server is online' });
  }

	else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end(`Cannot ${req.method} ${req.url}`);
		return;
  }


});

export default server;
