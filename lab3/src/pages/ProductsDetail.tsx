import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/product'

type Props = {}

const ProductsDetail: React.FC = (props: Props) => {
  const params = useParams();
  const [product, setProducts] = useState<TProduct | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await instance.get(`/products/${params.productId}`);
      setProducts(data);
    }
    getProducts();
  },[]);

  return (
    <div className='container d-flex'>
      <div className='row'>
        <img src={product?.thumbnail} alt={product?.title} />
      </div>
      <div className='row'>
        <h2>{product?.title}</h2>
        <h3>{product?.price}</h3>
        <p>{product?.description}</p>
      </div>
    </div>
  )
}

export default ProductsDetail
