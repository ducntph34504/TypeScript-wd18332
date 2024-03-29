import { useEffect, useState } from 'react'
import { TProduct } from '~/interfaces/product'
import style from './ProductList.module.scss'
import instance from '~/apis'

const ProductsList = () => {
    const [products, setProducts] = useState<TProduct[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
          const { data } = await instance.get(`/products`);
          setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <div className={style.list}>
            <h1 className='mt-3 mb-3'>Danh sách sản phẩm</h1>
            <div className={style.container}>
            {products.map((item) => (
                <div className={style.productCart} key={item.id}>
                    <a href={`/shop/${item.id}`}><img src={item.thumbnail} alt={item.title} /></a>
                    <a href={`/shop/${item.id}`}><h3 className='mt-3'>{item.title}</h3></a>
                    <p>{"$"}{item.price}</p>
                    <button className='btn btn-success mt-4 mx-1'>Add to cart</button><button className='btn btn-danger mt-4 mx-1'>Buy now</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProductsList
