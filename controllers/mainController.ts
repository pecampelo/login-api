export default (req: any, res: any) => {
	return res.send(200, {
		message: 'server is online!',
		endpoints: [
			'/signup',
			'/signin'
		]
	})

}
