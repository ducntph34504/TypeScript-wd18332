import { TProduct } from '~/interfaces/product'
import style from './Shop.module.scss'
import { Link } from 'react-router-dom';

type Props = {
  products: TProduct[];
}

const Shop: React.FC<Props> = ({ products }) => {
  return (
    <div className={style.list}>
        <h1 className='mt-3 mb-3'>Danh sách sản phẩm</h1>
        <div className={style.container}>
        {products.map((item) => (
            <div className={style.productCart} key={item.id}>
                <a href={`/shop/${item.id}`}><img src={item.thumbnail} alt={item.title} /></a>
                <a href={`/shop/${item.id}`}><h3 className='mt-3'>{item.title}</h3></a>
                <p>{"$"}{item.price}</p>
                <Link to={`/shop/${item.id}`} className='btn btn-success mt-4 mx-1'>Add to cart</Link><Link to={`/shop/${item.id}`} className='btn btn-danger mt-4 mx-1'>Buy now</Link>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Shop
