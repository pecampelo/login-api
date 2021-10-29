export default (req: any, res: any) => {

	interface bodyType {
		email: string,
		password: string,
		username: string,
		fullName: string,
		age: number,
		address: string,
	}

	const { body } = req;

	if (!body) {
		return res.send(400, { error: 'Request body is empty!'})
	}

	if (body) {

		const {
			email,
			password,
			username,
			fullName,
			age,
			address,
		}: bodyType = body;

		try {

			const result = email && password && username && fullName && age && address;

			if (result) {

				return res.send(200, { message: 'User was created!'})

			} else {

				return res.send(400, { error: 'Request body is invalid!'})

			}

		}

		catch (e) {
			console.log(e)
			return res.send(400, { message: 'body is either empty or invalid!'})
		}



	}

}
