import { User } from '~/interfaces/User';
import instance from './index';

export const onRegister = async (user: User) => {
	try {
		const { data } = await instance.post('/register', user);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const onLogin = async (user: User) => {
	try {
		const { data } = await instance.post('/login', user);
		return data;
	} catch (error) {
		console.log(error);
	}
};