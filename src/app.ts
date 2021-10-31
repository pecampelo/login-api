import server from './server';

export const address = server.address();

export const config = {
	'host': process.env.HOST || 'localhost',
	'port': process.env.PORT || 8005,
	'exclusive': true,
	'backlog': process.env.BACKLOG || 2,
};

export const dbConfig = {
	port: 5432,
};

server.listen(config, () => {
	console.log(`\nServer is listening on ${config.host}:${config.port}/`);
});
