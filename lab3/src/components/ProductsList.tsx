import { useEffect, useState } from 'react'

const ProductsList = () => {
    const [products, setProducts] = useState([])

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
            {products.map((item, index) => (
                <div className='row d-flex mt-3 mb-3' key={index}>
                  <div className='col'>1
                    
                  </div>
                  <div className='col'>2
                  
                  </div>
                  <div className='col'>3
                  
                  </div>
                  <div className='col'>4
                  
                  </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
