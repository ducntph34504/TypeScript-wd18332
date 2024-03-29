import { TProduct } from '~/interfaces/product';
import instance from './index';

export const createProduct = async (product: TProduct) => {
	try {
		const { data } = await instance.post('/products', product);
		return data;
	} catch (error) {
		console.log(error);
	}
};
