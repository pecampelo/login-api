import mainController from '../../controllers/mainController';
import signInController from '../../controllers/signInController';
import signUpController from '../../controllers/signUpController';

const routes = [
	{
		endpoint: '/',
		method: 'GET',
		handler: mainController,
	},
	{
		endpoint: '/signup',
		method: 'POST',
		handler: signUpController,
	},
	{
		endpoint: '/signin',
		method: 'GET',
		handler: signInController,
	},
];

export default routes;
