import server from './server';
import { config } from './config';

server.listen(config, () => {
  console.log(`Server is listening on ${config.host}:${config.port}/`);
});

const address = server.address();

export default address;
