import React from "react"

import "./Home.css"

import Navbar from "../../components/Navbar"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import SlideBar from "../../components/SlideBar"

import imgNossosServicos from "../../assets/img-1.png"
import imgVoce from "../../assets/img-2.png"

export default function Home () {
    return <>
        <Navbar />
        <Banner />

        <section className="nossos-servicos">
            <div className="container-nossos-servicos">

                <div className="nossos-servicos-img">
                    <img src={imgVoce} alt="" />
                </div>


                <div className="nossos-servicos-text">
                    <h3>É você que estamos procurando!</h3>
                    <p>Se você está se sentindo perdido na hora de escolher o seu caminho educacional em Teresina - PI, você está no lugar certo! Nosso serviço é dedicado a orientar e facilitar a sua busca pelo curso e pela instituição perfeita. Quem pode se beneficiar?</p>
                    
                </div>

            </div>
        </section>

        <section className="nossos-servicos">
            <div className="container-nossos-servicos">
                <div className="nossos-servicos-text">
                    <h3>Publico alvo</h3>
                    <p><strong>Estudantes Indecisos:</strong> Se você não tem certeza sobre qual curso seguir, estamos aqui para ajudar a clarear suas opções</p>
                    <p><strong>Futuros Universitários:</strong> Jovens prestes a entrar na faculdade que desejam informações detalhadas sobre cursos e instituições em Teresina.</p>
                    <p><strong>Pesquisadores Educacionais:</strong> Para aqueles que desejam informações específicas sobre grades curriculares, instalações e reputação das instituições de ensino.</p>
                    <p><strong>Buscadores de Oportunidades:</strong> Se você está em busca de opções educacionais alinhadas aos seus objetivos profissionais e aspirações, você está no lugar certo.</p>
                </div>
                <div className="nossos-servicos-img">
                    <img src={imgNossosServicos} alt="" />
                </div>
            </div>
        </section>
        <SlideBar />
        <Footer />
    </>
}