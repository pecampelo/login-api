import { PrismaClient } from '@prisma/client';

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
		return res.send(400, { error: 'Request body is empty!' });
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

		const result = Boolean(email && password && username && fullName && age && address);

		// console.log(result);

		if (result) {

			console.log('🔨3');

			try {
				const user = await prisma.user.findFirst({
					where: {
						email: email,
					},
				});

				if (!user) {
					await prisma.user.create({
						data: {
							email: email,
							password: password,
							username: username,
							fullname: fullName,
							age: age,
							address: address,
						},
					});

				}	else {

					return res.send(400, { error: 'User already exists!' });

				}
			} catch (e: any) {

				console.log(e);
				return res.send(400, { message: 'Database is unavailable!' });

			} finally {

				await prisma.$disconnect();

			}

		} else {

			return res.send(400, { error: 'Request body is invalid!' });

		}

	}

};
