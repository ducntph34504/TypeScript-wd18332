import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import style from './FormLogin.module.scss'
import { User } from '~/interfaces/User'
import instance from '~/apis'
import { access } from 'fs'

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().min(2).max(255),
    password: Joi.string().required().min(6).max(255)
})

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<User>({
        resolver: joiResolver(loginSchema)
    })

    const onSubmit = (user: User) => {
        ;(async () => {
            const { data } = await instance.post('/login', user)
            console.log(data)
            if (data.user) {
                sessionStorage.setItem("accessToken", data.accessToken);
                const isConfirm = confirm('Login success!, switch to home page!')
                if (isConfirm) {
                    navigate('/home')
                }
            }
        })()
    }
    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div className={style.formGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='email'
                        {...register('email', {
                            required: true
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='password'>Password</label>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='password'
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 255
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className={style.formGroup}>
                    <button className='btn btn-primary w-100' type='submit'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
