import React from "react";

import { IoIosArrowBack } from "react-icons/io";

import "./botaoVoltar.css"

export default function BotaoVoltar() {
    return <>

        <div className="botaoVoltar">
            <IoIosArrowBack />
            <p>Voltar</p>
        </div>
    </>
}