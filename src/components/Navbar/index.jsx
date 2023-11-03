import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../routes/Home/home.css"
import "./navbar.css"

import logo from "../../assets/logo.png"

import { AiOutlineClose } from "react-icons/ai"
import { BsList } from "react-icons/bs"


export default function Navbar () {
    const [menuOpen, setMenuOpen ] = useState(false);

    const abrirMenu = () => {
        setMenuOpen(true);
    }

    const fecharMenu = () => {
        setMenuOpen(false)
    }
    
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

        <div className="btn-abrir-menu">
            <BsList onClick={abrirMenu}/>
        </div>
        {menuOpen && (
            <>
                <div className="menu-mobile" id="menu-mob">
                    <div className="btn-fechar">
                        <AiOutlineClose onClick={fecharMenu}/>
                    </div>

                    <div className="navbar-itens-mobile">
                        <p><Link>Faculdades</Link></p>
                        <p><Link>Cursos</Link></p>
                        <p><Link>Profissões</Link></p>
                        <p><Link>Sobre Nós</Link></p>
                        <p><Link>Ajuda</Link></p>
                    </div>
                
                </div>

                <div className="overlay-menu"></div>
            </>
        )}


    </div>
        
    </>
}