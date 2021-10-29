import { PrismaClient } from "@prisma/client";
interface resType {
	email: string,
	password: string,
}

const prisma = new PrismaClient();

export default async (req: any, res: any) => {

	const { body } = req;

	if (!body) {
		return res.send(400, { error: 'Request body is empty!'})
	}

	if (body) {

		const {	email, password }: resType = body;

		try {

			const result = email && password;

			if (result) {

				await prisma.user.findFirst({
					where: {
						email: email,
						password: password,
					}
				})
				.then(res.setHeader('Authorization', 'Bearer-Token'))

				.then((user: any) => {
					return res.send(200, { message: `${user?.username} has logged in successfully!`})
				})

				.catch((e: any) => {
					console.log(e)
					return res.send(400, { message: 'Access denied! Check credentials.'})
				})

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
