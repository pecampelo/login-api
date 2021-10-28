type Route = {
	endpoint: string,
	method: string,
	handler: (req: any, res: any) => () => {};
}

export default class Router {
	routes: Route[];
	controllers: any[];

	constructor() {
		this.routes = [];
		this.controllers = [];
	}

	use(routes: Route[]): void {
		this.routes = routes;
	}

	async find(endpoint: string, method: string) {
		if (this.routes) {

			try {

				const route = this.routes.find((route) => route.endpoint === endpoint);

				if (route == undefined) {
					return;
				}

				if (route.method === method) {
					return route;
				}


			} catch (err: any) {

				if (err.message === 'Cannot read property \'endpoints\' of undefined') {
					return undefined;
				}

				console.log(err);
			}

		}	else {

			return this.routes;

		}

	}
}
