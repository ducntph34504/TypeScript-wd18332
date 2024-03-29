import { useForm, SubmitHandler } from 'react-hook-form';
import { TProduct } from '~/interfaces/product';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import style from './Form.module.scss';
import { useNavigate } from 'react-router-dom';

const productSchema = Joi.object({
	title: Joi.string().required().min(3).max(255),
	price: Joi.number().required().min(0),
});

const AddProduct = (props: { onAdd: () => {}}) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TProduct>({
		resolver: joiResolver(productSchema),
	});

const onSubmit: SubmitHandler<TProduct> = (product) => {
  props.onAdd(product);
  navigate('/admin');
};

	return (
		<div className='container'>
			<h2>AddProduct</h2>
			<form onSubmit={handleSubmit(onSubmit)} encType=''>
				<div className={style.formGroup}>
					<label htmlFor="title">Title product</label>
					<input type="text" placeholder="title" {...register('title', {required:true, minLength: 1, maxLength: 255})} />
					{errors.title && <p>{errors.title.message}</p>}
				</div>
				<div className="formGroup">
					<label htmlFor="price">Price product</label>
					<input type="number" placeholder="price" {...register('price', {required:true, min: 0})} />
					{errors.price && <p>{errors.price.message}</p>}
				</div>
        <div className="formGroup">
					<label htmlFor="price">Description</label>
					<input type="text" placeholder="desc" {...register('description')} />
				</div>
				<div className="formGroup">
					<button type="submit">Add Product</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
