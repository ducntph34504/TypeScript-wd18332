import { useForm, SubmitHandler } from 'react-hook-form';
import { TProduct } from '~/interfaces/product';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import style from './style/Form.module.scss';
import { useNavigate } from 'react-router-dom';

const productSchema = Joi.object({
	title: Joi.string().required().min(3).max(255),
	price: Joi.number().required().min(0),
  description: Joi.string().allow(''),
});

type Props = {
  onAdd: (products: TProduct) => void;
}

const AddProduct = ({ onAdd }: Props ) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TProduct>({
		resolver: joiResolver(productSchema),
	});

const onSubmit = (product: TProduct) => {
  onAdd(product);
  navigate('/admin');
};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit(onSubmit)} encType=''>
        <h2>AddProduct</h2>
				<div className={style.formGroup}>
					<label htmlFor="title">Product Title</label>
					<input className='form-control' type="text" placeholder="title" {...register('title', {required:true, minLength: 1, maxLength: 255})} />
					{errors.title && <p>{errors.title.message}</p>}
				</div>
				<div className={style.formGroup}>
					<label htmlFor="price">Product Price</label>
					<input className='form-control' type="number" placeholder="price" {...register('price', {required:true, min: 0})} />
					{errors.price && <p>{errors.price.message}</p>}
				</div>
        <div className={style.formGroup}>
					<label htmlFor="description">Product Description</label>
					<input className='form-control' type="text" placeholder="desc" {...register('description')} />
				</div>
				<div className={style.formGroup}>
					<button className='btn btn-primary w-100' type="submit">Add Product</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
