import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/product'
import style from './style/Form.module.scss'

type Props = {
    onSubmit: (product: TProduct) => void
}

const productSchema = Joi.object({
    title: Joi.string().required().min(3).max(255),
    price: Joi.number().required().min(0),
    description: Joi.string().allow(null, '')
})

const EditProduct = ({ onSubmit }: Props) => {
    const [product, setProduct] = useState<TProduct | null>(null)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        ;(async () => {
            const { data } = await instance.get(`/products/${id}`)
            setProduct(data)
        })()
    }, [])
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TProduct>({
        resolver: joiResolver(productSchema)
    })

    const onEdit = (product: TProduct) => {
        onSubmit({ ...product, id: Number(id) })
        navigate('/admin')
    }
    return (
        <div className={style.wrapper}>
            <div className='container'>
                <form onSubmit={handleSubmit(onEdit)} encType=''>
                    <h2>EditProduct</h2>
                    <div className={style.formGroup}>
                        <label htmlFor='title'>Product Title</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='title'
                            {...register('title', { required: true, minLength: 1, maxLength: 255 })}
                            defaultValue={product?.title}
                        />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor='price'>Product Price</label>
                        <input
                            className='form-control'
                            type='number'
                            placeholder='price'
                            {...register('price', { required: true, min: 0 })}
                            defaultValue={product?.price}
                        />
                        {errors.price && <p>{errors.price.message}</p>}
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor='description'>Product Description</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='desc'
                            {...register('description')}
                            defaultValue={product?.description}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <button className='btn btn-primary w-100' type='submit'>
                            Edit Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct
