import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import style from '../Form.module.scss';
import { User } from '~/interfaces/User';

const registerSchema = Joi.object({
	email: Joi.string().email().required().min(2).max(255),
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
				<div className={style.formGroup}>
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
				<div className={style.formGroup}>
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
				<div className={style.formGroup}>
					<button className="btn btn-primary w-100" type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
