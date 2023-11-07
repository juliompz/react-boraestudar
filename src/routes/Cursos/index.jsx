import React, { useEffect } from "react";
import blogfetch from "../../axios/config";
import axios from "axios";
import Navbar from "../../components/navbar";

export default function Cursos(){

    useEffect(() => {
        const getCursos = async () => {
            try{
                let response = await axios.get('http://localhost:8000/cursos/')
                console.log(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getCursos()
    }, [])


    return <>
        <Navbar />
        
    </>
}