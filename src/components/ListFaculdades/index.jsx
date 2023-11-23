import React from "react";
import "./listFaculdades.css"

import { IoStar } from "react-icons/io5";
import BotaoVejaMais from "../BotaoVejaMais";

export default function ListFaculdades({ faculdade_nome, faculdade_sigla}) {
    return <>

        <div className="box-faculdade">
            <div className="faculdade-info">
                <div className="faculdade-nome">
                    <h1>{faculdade_nome}</h1>
                    <div className="faculdade-estrelas">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                </div>
                <p>{faculdade_sigla}</p>
            </div>
            <BotaoVejaMais />
        </div>  

    </>
}