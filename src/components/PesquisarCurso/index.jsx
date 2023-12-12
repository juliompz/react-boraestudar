import React from "react";
import "./pesquisarCurso.css"
import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PesquisarCurso(){

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

    const searchCursos = cursos.filter((curso) =>
    curso.nome.toLowerCase().includes(search.toLowerCase())
    );

    return <>

        <div className="list-container">
            <div className="box-pesquisar">
                <div className="title">
                    <h1>Cursos</h1>
                </div>

                <div className="buscar-curso">
                    <form className="search-container">
                        <input type="text" id="search-bar" value={search} placeholder="Pesquise um curso"  onChange={(e) => setSearch(e.target.value)}/>
                    </form>

                    <div className={`box-pesquisa ${search ? 'visible' : 'hidden'}`}>
                        <ul>
                            {searchCursos.map(curso => (
                                <Link to={`/cursos/${curso.id}`}><li key={curso.id}>{curso.nome}</li></Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>

}