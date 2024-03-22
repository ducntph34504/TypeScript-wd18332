import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductsDetail from './pages/ProductsDetail'
import NotFound from './pages/NotFound'


const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
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
