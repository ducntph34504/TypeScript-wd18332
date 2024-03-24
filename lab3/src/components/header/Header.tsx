import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <nav className='navbar navbar-expand-sm bg-dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link text-light '>
                                Trang chủ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-link text-light'>
                                Sản phẩm
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
