import { PrismaClient } from "@prisma/client";
interface bodyType {
	email: string,
	password: string,
	username: string,
	fullName: string,
	age: number,
	address: string,
}

const prisma = new PrismaClient();

export default async (req: any, res: any) => {

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

				await prisma.user.create({
					data: {
						email: email,
						password: password,
						username: username,
						fullname: fullName,
						age: age,
						address: address,
					}
				}).then((user: any) => {
					return res.send(200, { message: `User ${user.username} was created!`})
				}).catch((e: any) => {
					console.log(e.message)

					return res.send(400, { message: 'Database is unavailable!'})
				})

			} else {

				return res.send(400, { error: 'Request body is invalid!'})

			}

		}

		catch (e: any) {

			console.log(e.message)

			return res.send(400, { message: 'Request body is invalid!'})
		}

	}

}
