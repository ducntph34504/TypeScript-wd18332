import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Shop from './pages/Shop'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import ProductsDetail from './pages/productsDetail/ProductsDetail'
import NotFound from './pages/notFound/NotFound.tsx'


const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Shop />} />
                <Route path="/shop/:productId" element={<ProductsDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
