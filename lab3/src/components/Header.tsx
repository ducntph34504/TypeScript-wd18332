import React from 'react'

const Header: React.FC = () => {
    return (
        <nav className='navbar navbar-expand-sm bg-dark'>
            <div className='container-fluid'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link text-light ' href='#'>
                            Trang chủ
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-light' href='#'>
                            Sản phẩm
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-light' href='#' />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
