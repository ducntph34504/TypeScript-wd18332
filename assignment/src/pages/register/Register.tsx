import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import style from './FormRegister.module.scss';
import { User } from '~/interfaces/User';
import instance from '~/apis/index';

const registerSchema = Joi.object({
	email: Joi.string().email({tlds: false}).required().min(8).max(255),
	password: Joi.string().required().min(6).max(255),
});

const Register = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: joiResolver(registerSchema),
	});

	const onSubmit = (user: User) => {
		(async () => {
      const { data } = await instance.post('/register', user);
      console.log(data);
      if(data.user){
        const isConfirm = confirm("Register success!, switch to login page!");
        if(isConfirm){
          navigate('/login');
        }
      } 

    })()
	};
	return (
		<div className={style.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Register</h2>
				<div className={style.formGroup}>
					<label htmlFor="email">Email</label>
					<input
            className='form-control'
						type="email"
						placeholder="email"
						{...register('email', {
							required: true,
							minLength: 8,
							maxLength: 255,
						})}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div className={style.formGroup}>
					<label htmlFor="password">Password</label>
					<input 
            className='form-control'
						type="password"
						placeholder="password"
						{...register('password', {
							required: true,
							minLength: 6,
							maxLength: 20,
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
