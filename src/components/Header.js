import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <div>
            <h1 className="site-heading text-center text-white d-none d-lg-block">
                {/*<span class="site-heading-upper text-primary mb-3">Um super asilo</span>*/}
                {/*<span class="site-heading-lower">Nossa Senhora de Fátima</span>*/}
                <img src='img/logo.png'/>
            </h1>

            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" to="/">Asilo
                        Melhor Idade</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded" to="/">Início
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded" to="/about">Sobre</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded"
                                      to="/products">Campanhas</Link>
                            </li>
                            <li className="nav-item px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded" to="/contact">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header