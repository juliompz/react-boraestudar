import React, { useEffect, useState } from "react";
import './listCursos.css'
import { Link } from "react-router-dom";
import BotaoVejaMais from "../BotaoVejaMais";

// essa variavel 'menor' é para reaproveitar o componente utilizando outra propriedade css (diminuindo o tamanho)
export default function ListCursos({ nomeCurso }) {

    return <>
        <div className="box-curso">
                <div className="nome-curso">
                    <h1>{nomeCurso}</h1>
                    {/* <p>disponível <strong>em {} faculdades</strong></p> */}
                </div>
                <BotaoVejaMais />
            </div>
        </>

}

