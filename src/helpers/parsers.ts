export const bodyParser = async (req: any) => {

	const buffers = []

  for await (const chunk of req) {
		buffers.push(chunk);
  }

	const data = Buffer.concat(buffers).toString();

	const body: any = await JSON.parse(data);

	req.body = body;

	return req;

}
