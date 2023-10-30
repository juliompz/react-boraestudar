import React from "react";

import "./navbar.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export default function Navbar () {
    return <>
    <div className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="logo-boraestudar" />
        </div>

        <div className="navbar-itens">
            <p><Link>Faculdades</Link></p>
            <p><Link>Cursos</Link></p>
            <p><Link>Profissões</Link></p>
            <p><Link>Sobre Nós</Link></p>
            <p><Link>Ajuda</Link></p>
            <p className="navbar-entrar"><Link>Entrar</Link></p>
        </div>

    </div>
        
    </>
}