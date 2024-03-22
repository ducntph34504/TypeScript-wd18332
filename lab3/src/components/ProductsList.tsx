import { useEffect, useState } from 'react'
import { TProduct } from '~/interfaces/product'
import style from './ProductList.module.scss'

const ProductsList = () => {
    const [products, setProducts] = useState<TProduct[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
        return () => {
            // cleanup function
        }
    }, [])
    return (
        <div>
            <h1 className='mt-3 mb-3'>Danh sách sản phẩm</h1>
            <div className={style.container}>
            {products.map((item) => (
                <div className={style.productCart} key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <h3 className='mt-3'>{item.title}</h3>
                    <p>{"$"}{item.price}</p>
                    <button className='btn btn-success mt-4'>Add to cart</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProductsList
