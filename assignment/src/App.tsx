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
import { User } from './interfaces/User.ts'
import EditProduct from './pages/admin/EditProduct.tsx'

const App: React.FC = () => {
    const [products, setProducts] = useState<TProduct[]>([])
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await instance.get(`/products`)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleSubmit = (product: TProduct) => {
        ;(async () => {
            const data = await createProduct(product)
            setProducts([...products, data])
        })()
    }

    const handleEdit = (product: TProduct) => {
        ;(async () => {
            const { data } = await instance.put(`/products/${product.id}`, product)
            setProducts(products.map((item) => (item.id === data.id ? data : item)))
        })()
    }

    const handleDelete = (id: Number) => {
        ;(async () => {
            const isConfirm = confirm('You want to delete me? (ToT)')
            if (isConfirm) {
                await instance.delete(`/products/${id}`)
                setProducts(products.filter((item) => item.id !== id && item))
            }
        })()
    }   

    return (
        <>
            <Header />
            <Routes>
                <Route path='/'>
                    <Route index element={<Shop products={products} />} />
                    <Route path='/shop/:productId' element={<ProductsDetail />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route path='/admin'>
                    <Route index element={<Dashboard onDelete={handleDelete} products={products} />} />
                    <Route path='/admin/add' element={<AddProduct onAdd={handleSubmit} />} />
                    <Route path='/admin/edit/:id' element={<EditProduct onSubmit={handleEdit} />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
