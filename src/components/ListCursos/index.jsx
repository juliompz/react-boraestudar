import React from "react";
import './listCursos.css'
import { Link } from "react-router-dom";
import BotaoVejaMais from "../BotaoVejaMais";


export default function ListCursos({ nomeCurso, link }) {
    return <>
        <Link to={ link }>
            <div className="box-curso">
                    <div className="nome-curso">
                        <h1>{nomeCurso}</h1>
                        <p>disponível <strong>em 2 faculdades</strong></p>
                    </div>
                    <BotaoVejaMais />
                </div>
        </Link>
    </>

}

