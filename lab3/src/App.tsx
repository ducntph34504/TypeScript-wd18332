import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { TProduct } from './interfaces/product'
// import axios from 'axios'

function App() {
  const [product, setProduct] = useState({
		title: 'Gia tri khoi tao',
		price: 0,
		description: '',
	});

  useEffect(() => {
		fetch('http://localhost:3000/products/11')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			});
		return () => {
			// cleanup function
		};
	}, []);

	// cleanup with useEffect
	/**
	 * ! Không có dependency: cứ có sự thay đổi về state thì gọi lại callback.
	 * ! [] : Chỉ chạy lại 1 lần componentDidMount
	 * ! [state1, state2, ...] : Gọi lại khi một trong số các state được liệt kê có sự thay đổi.
	 */

	const Shop = (props: { product: TProduct }) => {
		return (
			<div>
				<p>{props.product.id}</p>
				<p>{props.product.title}</p>
				<p>{props.product.price}</p>
			</div>
		);
	};

  return (
    <>
      <Header/>
      {/* <button className='btn btn-primary mt-3' onClick={updateProduct}>cap nhat</button> */}
      <Shop product={product}/>
      <Footer/>
    </>
  )
}

export default App
