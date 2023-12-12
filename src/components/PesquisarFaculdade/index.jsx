import React from "react";
import "./pesquisarFaculdade.css"
import blogfetch from "../../axios/config";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PesquisarFaculdades(){

    const [search, setSearch] = useState("");
    const [faculdades, setFaculdades] = useState([]);

    useEffect(() => {
        const getFaculdades = async () => {
            try{
                let response = await blogfetch.get('faculdades/')
                setFaculdades(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getFaculdades();
        
    }, []);

    const searchFaculdades = faculdades.filter((curso) =>
    curso.nome.toLowerCase().includes(search.toLowerCase()) || curso.sigla.toLowerCase().includes(search.toLowerCase())
    );

    return <>

        <div className="list-container">
            <div className="box-pesquisar">
                <div className="title">
                    <h1>Faculdades</h1>
                </div>

                <div className="buscar-curso">
                    <form className="search-container">
                        <input type="text" id="search-bar" value={search} placeholder="Pesquise uma faculdade"  onChange={(e) => setSearch(e.target.value)}/>
                    </form>

                    <div className={`box-pesquisa ${search ? 'visible' : 'hidden'}`}>
                        <ul>
                            {searchFaculdades.map(faculdade => (
                                <Link to={`/faculdade/${faculdade.id}`}><li key={faculdade.id}>{faculdade.nome}</li></Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>

}