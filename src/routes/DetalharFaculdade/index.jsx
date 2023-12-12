import "./detalharFaculdade.css"

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogfetch from "../../axios/config";

import Navbar from "../../components/Navbar";
import PesquisarFaculdade from "../../components/PesquisarFaculdade"
import BotaoVoltar from "../../components/BotaoVoltar"
import OutrosCursos from "../../components/OutrosCursos"
import Footer from "../../components/Footer"
import Loading from "../../components/Loading";


export default function DetalharFaculdade() {

    const { id } = useParams()

    const [faculdade, setFaculdade ] = useState("");
    const [cursos, setCursos] = useState([]);
    const [dadosCarregados, setDadosCarregados] = useState(false)

        
    useEffect(() => {
        const DetalheFaculdade = async () => {
            try{
                let response = await blogfetch.get(`faculdades/${id}/`)
                setFaculdade(response.data)
                console.log(response.data)
                setDadosCarregados(true)
            }
            catch(error){
                console.log(error)
            }
        };

        const getCursosDaFaculdade = async () => {
            try {
                let response = await blogfetch.get(`faculdade/${id}/cursos/`)
                setCursos(response.data)
                console.log(response.data)
            } catch(error) {
                console.log(error)
            }
        };

        DetalheFaculdade();
        getCursosDaFaculdade();
    }, [id]);

    return <>
        <Navbar />
        <PesquisarFaculdade />

        <div className="container-detalhar-faculdade">
            <div className="faculdade-content">
                <BotaoVoltar />
                {faculdade.length === 0 ? (
                    <Loading />
                ): (
                    <div className="retornar">
                        <div className="detalharfaculdade-nome">
                            <h1>{faculdade.nome}</h1>
                            <p>{faculdade.sigla}</p>
                        </div>

                        <div className="dividir-secoes">
                            <section className="faculdade-infos">
                                    <h1>Informações da instituição</h1>
                                    <div className="faculdade-infos-content">
                                        <p>Nome: <strong>{faculdade.nome}</strong></p>
                                        <p>Sigla: <strong>{faculdade.sigla}</strong></p>
                                        <p>Avaliação MEC: <strong>{faculdade.avaliacao_mec}</strong></p>
                                        <p>Endereço: <strong>{faculdade.endereco}</strong></p>
                                        <p>Descricao: <strong>{faculdade.descricao}</strong></p>
                                        <p>Link do site oficial: <strong><a href={faculdade.link_site}>{faculdade.link_site}</a></strong></p>
                                    </div>
                            </section>
                            <hr />
                            <section className="cursos-da-faculdade">
                                <h1 className="cursos-da-faculdade-title">Cursos disponiveis</h1>
                                <div className="faculdade-cursos-disponiveis">
                                    {cursos.map(curso => (
                                        <Link key={curso.cursoId} to={`/faculdade/${id}/curso/${curso.cursoId}`}>
                                            <OutrosCursos 
                                            key={curso.cursoId} 
                                            nomeCurso={curso.curso}
                                            periodos={curso.tempo_duracao}
                                            modalidade={curso.modalidade}
                                            />
                                        </Link>

                                    ))}

                                </div>
                            </section>
                        </div>
                    </div>
                )}


            </div>
        </div>
        {dadosCarregados && <Footer />}
    </>
}