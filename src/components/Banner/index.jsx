import React from "react";

import "../../routes/Home/home.css"
import './banner.css'

export default function Banner () {
    return <>
        <div className="container">
            <div className="filter">
                <p className="title">Quero estudar!</p>

                <div className="filter-content">
                    <div className="filter-boxes">
                        <div className="input-box">
                            <p>Qual curso você quer estudar?</p>
                            <input type="text" placeholder="ex: Análise e Desenvolvimento de Sistemas"/>
                        </div>

                        <div className="input-box">
                            <p>Tem preferência de instituição?</p>
                            <input type="text" placeholder="ex: Uninassau"/>
                        </div>

                        <div className="input-box">
                            <p>Área de atuação?</p>
                            <input type="text" placeholder="ex: Tecnologia da informação"/>
                        </div>
                    </div>


                    <button type="submit">Buscar</button>
                </div>
            </div>
        </div>
    </>
}