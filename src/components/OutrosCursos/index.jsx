import React from "react";
import { Link } from "react-router-dom";
import BotaoVejaMais from "../BotaoVejaMais";

import "./outrosCursos.css"

export default function OutrosCursos( { nomeCurso, periodos, modalidade } ) {
    return <>
        <div className="outros-cursos">
            <div className="nome-outro-curso">
                <h1>{nomeCurso}</h1>
                <div className="detalhes-do-curso">
                    <p>{periodos} períodos</p>
                    <p>-</p>
                    <p>{modalidade}</p>
                </div>
            </div>
            <BotaoVejaMais />
        </div>
        
    </>
}