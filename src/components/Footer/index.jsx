import React from "react";
import "./footer.css"

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import imageLoading from "../../assets/macaco-loading.png"


export default function Footer() {
    return <>
        <footer className="rodape" id="contato">
                <div className="rodape-div">

                    <div className="rodape-div-1">
                        <div className="rodape-div-1-coluna">
                            
                            <span><img src={imageLoading} alt="" /></span>
                            <p>Desenvolvido por &copy; Júlio César</p>
                        </div>
                    </div>

                    <div className="rodape-div-2">
                        <div className="rodape-div-2-coluna">
                            
                            <span><b>Contatos</b></span>
                            <div className="email">
                                <MdEmail/>
                                <p>juliokreds@gmail.com</p>
                            </div>

                            <a href="https://www.linkedin.com/in/julioaraujog/">
                                <div className="email">
                                    <CiLinkedin/>
                                    <p>Linkedin</p>
                                </div>
                            </a>
                            <a href="https://github.com/juliompz">
                                <div className="email">
                                    <FaGithub/>
                                    <p>Github</p>
                                </div>
                            </a>


                        </div>
                    </div>

                </div>
            <p className="rodape-direitos">Copyright &copy; 2023 – Todos os Direitos Reservados.</p>
        </footer>
        
    </>
}