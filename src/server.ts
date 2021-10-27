import http from 'http';

const server = http.createServer((req: any, res: any): void => {
  
  // TODO: Parse URL

  // TODO: Receive body
  
  // 

  res.send = (statusCode: number, body: any) => {
    res.writeHead(statusCode, { 'Content-Type' : 'application/json'})
    res.end(JSON.stringify(body));
  }

  if (req.method === "GET") {
    res.send(200, { 'message': 'server is online' });
  }

  else {
    res.send(404, { 'error': 'request not allowed'});
  }
  
  res.end();
})

export default server;
