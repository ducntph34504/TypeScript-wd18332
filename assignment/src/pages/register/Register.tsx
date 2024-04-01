import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { User } from '~/interfaces/User';

const registerSchema = Joi.object({
	email: Joi.string().email({tlds: false}).required().min(2).max(255),
	password: Joi.string().required().min(6).max(255),
});

type Props = {
	onRegister: (user: User) => void;
};

const Register = ({ onRegister }: Props) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: joiResolver(registerSchema),
	});

	const onSubmit: SubmitHandler<User> = (user) => {
		onRegister(user);
		navigate('/login');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Register</h2>
				<div className='form-control w-100'>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="email"
						{...register('email', {
							required: true,
							minLength: 2,
							maxLength: 255,
						})}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div className='form-control w-100'>
					<label htmlFor="password">Password</label>
					<input 
						type="text"
						placeholder="password"
						{...register('password', {
							required: true,
							minLength: 6,
							maxLength: 20,
						})}
					/>
					{errors.password && <p>{errors.password.message}</p>}
				</div>
				<div className='form-control w-100'>
					<button className="btn btn-primary w-100" type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
