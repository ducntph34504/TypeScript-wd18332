import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <nav className='navbar navbar-expand-sm bg-dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className=''>
                                Trang chủ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className=''>
                                Đăng nhập
                            </Link>
                            <Link to='/register' className=''>
                                Đăng ký
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/admin' className=''>
                                adminPage
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
