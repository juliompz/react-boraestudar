import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./botaoVoltar.css"

export default function BotaoVoltar( {voltarPara} ) {
    return <>

        <Link to={voltarPara}>
            <div className="botaoVoltar">
                <IoIosArrowBack />
                <p>Voltar</p>
            </div>
        </Link>

    </>
}