import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/product'
import style from './productsDetail.module.scss'

type Props = {}

const ProductsDetail: React.FC = (props: Props) => {
    const params = useParams()
    const [product, setProducts] = useState<TProduct | null>(null)

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await instance.get(`/products/${params.productId}`)
            setProducts(data)
        }
        getProducts()
    }, [])

    return (
        <div className={style.detail}>
            <div className='container d-flex mt-5'>
                <div className={style.thumbnail}>
                    <img src={product?.thumbnail} alt={product?.title} />
                </div>
                <div className={style.desc}>
                    <div className='container'>
                        <h1>{product?.title}</h1>
                        <h2>Product price: {'$'}{product?.price}</h2>
                        <select className='col-lg-12 my-3'>
                          <option>Select color</option>
                          <option>Black</option>
                          <option>White</option>
                          <option>Pink</option>
                          <option>Red</option>
                        </select><br />
                        <input type="number"/>
                        <button className='btn btn-success mb-2'>Add to cart</button><button className='btn btn-danger mb-2'>Buy now</button>
                        <h4>Description: {product?.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetail
