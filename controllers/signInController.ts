export default (req: any, res: any) => {
	interface resType {
		email: string,
		password: string,
	}

	const { body } = req;

	if (!body) {
		return res.send(400, { error: 'Request body is empty!'})
	}

	if (body) {

		const {	email, password }: resType = body;

		try {

			const result = email && password;

			if (result) {

				res.setHeader('Authorization', 'Bearer-Token');
				return res.send(200, { message: 'You have logged-in successfully!'})

			} else {

				return res.send(400, { error: 'Invalid e-mail or password!'})

			}

		}

		catch (e) {
			console.log(e)
			return res.send(400, { error: 'Invalid e-mail or password!'})
		}



	}

}
