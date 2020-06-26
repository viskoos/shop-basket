import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <nav className="navbar navbar-dark bg-dark header-position">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">Магазик</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/store" className="nav-link">
                                Товары
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/addproduct" className="nav-link">
                                Добавить товар
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="form-inline">
                <Link to="/basket" className="btn btn-outline-success my-2 my-sm-0">Корзина</Link>
            </div>
        </nav>

    )
}