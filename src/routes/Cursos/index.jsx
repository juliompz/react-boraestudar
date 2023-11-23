import React from "react";
import './cursos.css'

import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar"
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import ListCursos from "../../components/ListCursos";
import BotaoVoltar from "../../components/BotaoVoltar";
import PesquisarCurso from "../../components/PesquisarCurso";

export default function Cursos() {

    const [search, setSearch] = useState("");
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const getCursos = async () => {
            try{
                let response = await axios.get('http://localhost:8000/cursos/')
                setCursos(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getCursos();
        
    }, []);
      
    return <>
        <Navbar/>

        <PesquisarCurso />

        <div className="list-content">
                <div className="list-content-title">
                    <div className="voltar">
                        <BotaoVoltar />
                    </div>

                    <div className="titulo-list-cursos">
                        <h1>Cursos de Tecnologia da Informação</h1>
                        <p>em <strong>Teresina - PI</strong></p>
                    </div>
                </div>
                {cursos.length === 0? (
                    <Loading />
                ): (
                    <div className="listar-cursos">
                        {cursos.map(curso => (
                            <ListCursos 
                            key={curso.id}
                            nomeCurso={curso.nome}
                            link ={`/cursos/${curso.id}`}
                            />
                        ))}
                    </div>
                )}

        </div>
        
    </>
}

