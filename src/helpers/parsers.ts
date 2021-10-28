export const bodyParser = async (req: any, callback: () => any) => {

	const buffers = []

  for await (const chunk of req) {
		buffers.push(chunk);
  }

	const data = Buffer.concat(buffers).toString();

	if (!data) {
		req.body = {};

	} else {

		const body: any = await JSON.parse(data);
		req.body = body;

	}

	callback();
}
