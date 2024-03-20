import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Shop from './pages/Shop'


const App: React.FC = () => {
    return (
        <>
            <Header />
            <Shop />
            <Footer />
        </>
    )
}

export default App
