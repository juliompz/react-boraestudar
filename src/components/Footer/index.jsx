import React from "react";
import "./footer.css"

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import imageLoading from "../../assets/macaco-loading.png"


export default function Footer() {
    return <>
        <footer class="rodape" id="contato">
                <div class="rodape-div">

                    <div class="rodape-div-1">
                        <div class="rodape-div-1-coluna">
                            
                            <span><img src={imageLoading} alt="" /></span>
                            <p>Desenvolvido por &copy; Júlio César</p>
                        </div>
                    </div>

                    <div class="rodape-div-2">
                        <div class="rodape-div-2-coluna">
                            
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
            <p class="rodape-direitos">Copyright &copy; 2023 – Todos os Direitos Reservados.</p>
        </footer>
        
    </>
}