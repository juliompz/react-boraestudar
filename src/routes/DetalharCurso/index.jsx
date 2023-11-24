import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./DetalharCurso.css"
import Loading from "../../components/Loading";
import ListFaculdades from "../../components/ListFaculdades";
import PesquisarCurso from "../../components/PesquisarCurso";
import BotaoVoltar from "../../components/BotaoVoltar";
import blogfetch from "../../axios/config";

import img from '../../assets/progr.jpg'


export default function DetalharCurso() {

    const { id } = useParams()
    const [curso, setCurso ] = useState("");
    const [faculdades, setFaculdades] = useState([])
    const [dadosCarregados, setDadosCarregados] = useState(false)
    
    useEffect(() => {
        const DetalheCurso = async () => {
            try{
                let response = await blogfetch.get(`cursos/${id}/`)
                setCurso(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        

        const FaculdadesCurso = async () => {
            try{
                let response = await blogfetch.get(`curso/${id}/faculdades/`)
                setFaculdades(response.data)
                console.log(response.data)
                setDadosCarregados(true)
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
        <PesquisarCurso />

        {curso.length === 0 ? (
            <Loading />
        ) : ( 
            <div className="container-pag">
                <BotaoVoltar />
                <div className="curso-nome">
                    <h1>Curso <strong>{curso.nome}</strong></h1>
                    <p>em <strong>Teresina- PI</strong></p>
                </div>

                <div className="dividir-pagina">
                    <section className="sec">
                        <div className="curso-info">
                            <div className="img-curso">
                                <img src={img} alt="" />
                            </div>

                            <div className="descricao">
                                <h1>Sobre o curso</h1>
                                <p>{curso.descricao}</p>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="sec2">
                        <div className="faculdades-disp">
                            <div className="facul-onde">
                                <h1>Onde encontrar?</h1>
                                <h2>Faculdades em Teresina - PI que dispõe do curso</h2>
                            </div>
                            
                            <div className="list-faculdades">
                                {faculdades.map(faculdade => (
                                    
                                    <Link to={`/faculdade/${faculdade.faculdade_id}/curso/${id}`}>
                                        <ListFaculdades
                                        key={faculdade.faculdade_sigla}
                                        faculdade_nome={faculdade.faculdade_nome}
                                        faculdade_sigla={faculdade.faculdade_sigla}
                                        />
                                    </Link>

                                    ))}

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )}
        
        {dadosCarregados && <Footer />}
    </>
}