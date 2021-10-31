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

		try {

			const result = Boolean(email && password && username && fullName && age && address);

			// console.log(result);

			if (result) {

				console.log('🔨3');

				const user = await prisma.user.findFirst({
					where: {
						email: email,
						password: password,
					},
				});

				if (!user) {
					console.log('🔨4');
					await prisma.user.create({
						data: {
							email: email,
							password: password,
							username: username,
							fullname: fullName,
							age: age,
							address: address,
						},
					})

						.then((userOuted: any) => {

							res.send(200, { message: `User ${userOuted.username} was created!` });
							console.log('🔨5');
						})

						.catch((e: any) => {

							console.log(e.stack);

						})

						.finally(async () => await prisma.$disconnect());

				} else {

					return res.send(400, { error: 'User already exists!' });

				}

			} else {

				return res.send(400, { error: 'Request body is invalid!' });

			}

		} catch (e: any) {

			console.log(e.message);
			return res.send(400, { message: 'Database is unavailable!' });

		}

	}

};
