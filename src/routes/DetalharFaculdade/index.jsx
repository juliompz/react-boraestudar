import React from "react";
import Navbar from "../../components/Navbar";

import "./detalharFaculdade.css"

export default function DetalharFaculdade() {
    return <>
        <Navbar />
        <div className="faculdade-container">
            <div className="faculdade-title">
                <h1 className="t">Faculdade</h1>
                
                <div className="faculdade-info">
                    <h1>Estácio</h1>
                    <div className="imagem"></div>
                    
                </div>
            </div>
        </div>
    </>
}