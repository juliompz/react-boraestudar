import "./faculdades.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import blogfetch from "../../axios/config"

import BotaoVoltar from "../../components/BotaoVoltar"
import Loading from "../../components/Loading"
import Navbar from "../../components/Navbar"
import PesquisarFaculdades from "../../components/PesquisarFaculdade"
import ListFaculdades from "../../components/ListFaculdades"
import Footer from "../../components/Footer"




export default function Faculdades(){

    const [faculdades, setFaculdades] = useState([]);
    const [dadosCarregados, setDadosCarregados] = useState(false)

    useEffect(() => {
        const getFaculdades = async () => {
            try{
                let response = await blogfetch.get(`faculdades/`)
                setFaculdades(response.data)
                console.log(response.data)
                setDadosCarregados(true)
            }
            catch(error){
                console.log(error)
            }
        }

        getFaculdades();
    }, [])
    


    return <>

        <Navbar />
        <PesquisarFaculdades />
        <div className="container-faculdades">
            <BotaoVoltar 
            voltarPara={'/'}
            />

            <div className="listar-faculdades">
                <div className="title-listar-faculdades">
                    <h1>Faculdades</h1>
                    <p>em <strong>Teresina - PI</strong></p>
                </div>
                {faculdades.length === 0 ? (
                <Loading />
                ) : (
                    <div className="content-listar-faculdades">
                        <div className="box-faculdades">
                            {faculdades.map(faculdade => (
                                <Link key={faculdade.id} to={`/faculdade/${faculdade.id}`}>
                                    <ListFaculdades
                                    faculdade_nome= {faculdade.nome}
                                    faculdade_sigla= {faculdade.sigla}
                                    />  
                                </Link>

                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>

        {dadosCarregados && <Footer />}
    </>
}