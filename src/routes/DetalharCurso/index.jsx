import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./DetalharCurso.css"
import Loading from "../../components/Loading";
import ListFaculdades from "../../components/ListFaculdades";



export default function DetalharCurso() {

    const { id } = useParams()
    const [curso, setCurso ] = useState("");
    const [faculdades, setFaculdades] = useState([])
    
    useEffect(() => {
        const DetalheCurso = async () => {
            try{
                let response = await axios.get(`http://localhost:8000/cursos/${id}/`)
                setCurso(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        

        const FaculdadesCurso = async () => {
            try{
                let response = await axios.get(`http://localhost:8000/curso/${id}/faculdades/`)
                setFaculdades(response.data)
                console.log(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        
        DetalheCurso();
        FaculdadesCurso();
        
    }, []);
    

    return <>
        <Navbar />
        {curso.length === 0 ? (
            <Loading />
        ): (
            <div className="dividir-pagina">
                <section>
                    <div className="curso-info">
                        <h1 className="title-curso">Curso</h1>
                        <div className="curso-nome">
                            <h1>{curso.nome}</h1>
                            <p>Em Teresina - PI</p>
                        </div>

                        <div className="img-curso">
                            <div className="imagem"></div>
                        </div>

                        <div className="descricao">
                            <h1>Sobre o curso</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae quis tenetur minima animi est voluptatem aliquam eveniet? Nemo nulla deserunt iusto eveniet harum accusamus mollitia quibusdam esse debitis saepe.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="faculdades-disp">
                        <div className="facul-onde">
                            <h1>Onde encontrar?</h1>
                            <h2>Faculdades em Teresina - PI que dispõe do curso</h2>
                        </div>
                        
                        <div className="list-faculdades">
                        {faculdades.map(faculdade => (
                            
                            <Link to={`/faculdade/${faculdade.faculdade_id}/`}>
                                <ListFaculdades 
                                faculdade_nome={faculdade.faculdade_nome}
                                faculdade_sigla={faculdade.faculdade_sigla}
                                />
                            </Link>

                            ))}

                        </div>

                    </div>

                </section>
            </div>
        )}


        
    </>
}