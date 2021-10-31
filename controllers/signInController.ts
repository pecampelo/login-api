import { PrismaClient } from '@prisma/client';

interface resType {
	email: string,
	password: string,
}

const prisma = new PrismaClient();

export default async (req: any, res: any) => {
	const { body } = req;

	if (!body) {
		return res.send(400, { error: 'Request body is empty!' });
	}

	if (body) {
		const { email, password }: resType = body;

		const result = email && password;

		if (result) {

			const find = new Promise((resolve) => {

				try {
					resolve(
						prisma.user.findFirst({
							where: {
								email: email,
							},
						}),

					);
				} catch (err: any) {
					console.log(err.message);
				}

				setTimeout(() => {

				}, 5000);

			}).catch((e: any) => {

				console.log(e);
				return res.send(400, { error: 'Couldn\'t connect to database!' });

			}).then((user: any) => {

				if (user !== null && user.password !== password) {
					return res.send(400, { message: 'Access denied! Check credentials.' });
				}
				res.setHeader('Authorization', 'Bearer-Token');
				return res.send(200, { message: `${user?.username} has logged in successfully!` });
			});

			find.finally(async () => await prisma.$disconnect());

		} else {
			return res.send(400, { error: 'Please input an e-mail and a password.' });
		}

	}
};
