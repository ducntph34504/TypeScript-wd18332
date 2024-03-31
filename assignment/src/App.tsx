import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import ProductsDetail from './pages/productsDetail/ProductsDetail'
import NotFound from './pages/notFound/NotFound.tsx'
import AddProduct from './pages/admin/AddProduct.tsx'
import Dashboard from './pages/admin/Dashboard.tsx'
import { useEffect, useState } from 'react'
import instance from './apis/index.tsx'
import { TProduct } from './interfaces/product.ts'
import { createProduct } from './apis/product.tsx'
import Shop from './pages/shop/Shop.tsx'

const App: React.FC = () => {
    const [products, setProducts] = useState<TProduct[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await instance.get(`/products`)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleSubmit = (product: TProduct) => {
        ;async () => {
            const data = await createProduct(product)
            setProducts([...products, data])
        }
    }

    return (
        <>
            <Header />
            <main id='main' className=''>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Shop products={products} />} />
                        <Route path='/shop/:productId' element={<ProductsDetail />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>
                    <Route path='/admin'>
                        <Route index element={<Dashboard products={products} />} />
                        <Route path='/admin/add' element={<AddProduct onAdd={handleSubmit} />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
