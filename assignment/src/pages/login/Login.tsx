import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { User } from '~/interfaces/User';

const loginSchema = Joi.object({
	email: Joi.string().email({tlds: false}).required().min(2).max(255),
	password: Joi.string().required().min(6).max(255),
});

type Props = {
	onLogin: (user: User) => void;
};

const Login = ({ onLogin }: Props) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: joiResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<User> = (user) => {
		onLogin(user);
		navigate('/admin');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Register</h2>
				<div className='form-control w-100'>
					<label htmlFor="email">Email</label>
					<input
						className="form-control"
						type="email"
						placeholder="email"
						{...register('email', {
							required: true,
						})}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div className='form-control w-100'>
					<label htmlFor="password">Password</label>
					<input
						className="form-control"
						type="password"
						placeholder="password"
						{...register('password', {
							required: true,
							minLength: 6,
							maxLength: 255,
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

export default Login;
