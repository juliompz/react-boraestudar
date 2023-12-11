import "./detalharFaculdade.css"
import React from "react";

import Navbar from "../../components/Navbar";
import PesquisarFaculdade from "../../components/PesquisarFaculade"
import BotaoVoltar from "../../components/BotaoVoltar"
import OutrosCursos from "../../components/OutrosCursos"
import Footer from "../../components/Footer"

export default function DetalharFaculdade() {
    return <>
        <Navbar />
        <PesquisarFaculdade />

        <div className="container-detalhar-faculdade">
            <div className="faculdade-content">
                <BotaoVoltar />
                <div className="detalharfaculdade-nome">
                    <h1>Faculdade Mauricio de Nassau</h1>
                    <p>UNINASSAU</p>
                </div>

                <div className="dividir-secoes">
                    <section className="faculdade-infos">
                            <h1>Informações da instituição</h1>
                            <div className="faculdade-infos-content">
                                <p>Nome: <strong>Faculdade Mauricio de Nassau</strong></p>
                                <p>Sigla: <strong>UNINASSAU</strong></p>
                                <p>Avaliação MEC: <strong>5</strong></p>
                                <p>Endereço: <strong>Av. Jóquei Clube, 710 - Jóquei, Teresina - PI, 64049-240</strong></p>
                                <p>Descricao: <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, reprehenderit quis alias quaerat ratione animi ex facere assumenda provident, quod sed cumque! Deserunt eos doloribus expedita eligendi impedit, veniam esse.</strong></p>
                                <p>Link do site oficial: <strong><a href="https://www.uninassau.edu.br/institucional/teresina">https://www.uninassau.edu.br/institucional/teresina</a></strong></p>
                            </div>
                    </section>
                    <hr />
                    <section className="cursos-da-faculdade">
                        <h1 className="cursos-da-faculdade-title">Cursos disponiveis</h1>
                        <div className="faculdade-cursos-disponiveis">
                            <OutrosCursos 
                            link={''}
                            nomeCurso="Anal"
                            periodos="4"
                            modalidade="EAD"
                            />
                        </div>
                    </section>
                </div>

            </div>
        </div>
        <Footer />
    </>
}