import React from "react";
import './cursos.css'

import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar"
import SelectDadosApi from "../../components/SelectDadosApi";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

export default function Cursos() {

    const [cursos, setCursos] = useState([]);
    const [search, setSearch] = useState("");

    console.log(search)

    useEffect(() => {
        const getCursos = async () => {
            try{
                let response = await axios.get('http://localhost:8000/cursos/')
                setCursos(response.data)
                console.log(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getCursos();
        
    }, []);

    const organizarCursosPorLetra = () => {
        const cursosPorLetra = {};
    
        // Verifica se cursos está definido antes de iterar sobre ele
        cursos.forEach(curso => {
          const letraInicial = curso.nome.charAt(0).toUpperCase();
    
          if (!cursosPorLetra[letraInicial]) {
            cursosPorLetra[letraInicial] = [];
          }
    
          cursosPorLetra[letraInicial].push(curso);
        });
    
        return cursosPorLetra;
      };
    
      const cursosPorLetra = organizarCursosPorLetra();

      const letrasOrdenadas = Object.keys(cursosPorLetra).sort();
      
      const searchCursos = cursos.filter((curso) => 
        curso.nome.toLowerCase().includes(search.toLowerCase())
        );

    return <>
        <Navbar/>
        <div className="list-container">
            <div className="box-pesquisar">
                <div className="title">
                    <h1>Cursos</h1>
                    <p>Em Teresina - PI</p>
                </div>
                <div className="buscar-curso">
                    <form className="search-container">
                        <input type="text" id="search-bar" value={search} placeholder="Pesquise um curso"  onChange={(e) => setSearch(e.target.value)}/>
                        <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
                    </form>

                    <div className={`box-pesquisa ${search ? 'visible' : 'hidden'}`}>
                        <ul>
                            {searchCursos.map(curso => (
                                <li>{curso.nome}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="list-content">
                <div className="list-content-title">
                    <h1>Por ordem alfabética</h1>
                </div>
                {cursos.length === 0? (
                    <Loading />
                ): (
                    <div className="select-box">
                        {letrasOrdenadas.map(letra => (
                            <SelectDadosApi
                            key={letra}
                            opt={letra}
                            cursos={cursosPorLetra[letra]}
                            />
                        ))}
                    </div>
                )}

        </div>
        
    </>

}

