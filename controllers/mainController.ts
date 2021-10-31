/* eslint-disable arrow-body-style */
export default (req: any, res: any) => {
	// const { body } = req;

	return res.send(200, {
		message: 'server is online!',
		endpoints: [
			'/signup',
			'/signin',
		],
	});
};
