export const config = {
	'host': process.env.HOST || '0.0.0.0',
	'port': process.env.PORT || 8005,
	'exclusive': true,
	'backlog': process.env.BACKLOG || 2,
}
