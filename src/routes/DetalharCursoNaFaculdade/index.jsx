import React, { useEffect, useState } from "react";
import "./detalharCursoNaFaculdade.css"

import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PesquisarCurso from "../../components/PesquisarCurso";
import BotaoVoltar from "../../components/BotaoVoltar";
import Footer from "../../components/Footer"
import OutrosCursos from "../../components/OutrosCursos";
import blogfetch from "../../axios/config";

export default function DetalharCursoNaFaculdade() {

    const {faculdadeId, cursoId } = useParams();
    const [curso, setCurso ] = useState([]);
    const [nome, setNome ] = useState('')
    const [cursos, setCursos] = useState([]);
    const [dadosCarregados, setDadosCarregados] = useState(false)
    
    useEffect(() => {

        const getDadosCurso = async () => {
            try {
                let response = await blogfetch.get(`faculdade-curso/?curso_id=${cursoId}&faculdade_id=${faculdadeId}`)
                console.log(response.data)
                setCurso(response.data[0])
                setNome(response.data[0].curso.nome)
                console.log("---------" + response.data[0].curso.nome)
                setDadosCarregados(true)
            } catch(error) {
                console.log(error)
            }
        }


        const getCursosDaFaculdade = async () => {
            try {
                let response = await blogfetch.get(`faculdade/${faculdadeId}/cursos/`)
                setCursos(response.data)
                console.log(response.data)
            } catch(error) {
                console.log(error)
            }
        }
        getDadosCurso();
        getCursosDaFaculdade();

    }, []);

    const cursosFiltrados = cursos.filter((curso) => curso.cursoId !== 4);

    return <>
        <Navbar />
        <PesquisarCurso />
        <div className="container-detalher-curso-faculdade">
            <BotaoVoltar />

            <div className="content-title">
                <h1>Curso <strong>{nome}</strong></h1>
                <p>na <strong>UNINASSAU</strong></p>
            </div>

            <div className="content-informacoes">
                <section className="sec-infos">
                    <h1>Informações</h1>
                    <div className="detalhes">
                        <p>Instituição: <strong>PRIVADA</strong></p>
                        <p>Forma de ingresso: <strong>Entrar com nota do ENEM (desconto na mensalidade) ou vestibular</strong></p>
                        <p>Tempo de duração do curso: <strong>{curso.tempo_duracao} períodos</strong></p>
                        <p>Turno: <strong>{curso.turno}</strong></p>
                        <p>Modalidade: <strong>{curso.modalidade}</strong></p>
                    </div>
                </section>
                <hr />
                <section className="sec-outros-cursos">
                    <div className="outros-cursos-info">
                        <h1 className="outros-cursos-info-title">Outros cursos em <strong>UNINASSAU</strong></h1>
                        {cursosFiltrados.map(curso => (
                            <OutrosCursos
                            key={curso.cursoId} 
                            link={`/faculdade/${faculdadeId}/curso/${curso.cursoId}`}
                            nomeCurso={curso.curso}
                            periodos={curso.tempo_duracao}
                            modalidade={curso.modalidade}
                            />
                        ))}
                        
                    </div>
                    
                </section>

            </div>
        </div>
        {dadosCarregados && <Footer />}
    </>
}