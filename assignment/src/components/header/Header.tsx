import React from 'react'
import style from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <nav className='navbar navbar-expand-sm bg-dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href='/' className=''>
                                Trang chủ
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/login' className=''>
                                Đăng nhập
                            </a>
                            <a href='/register' className=''>
                                Đăng ký
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/admin' className=''>
                                adminPage
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
