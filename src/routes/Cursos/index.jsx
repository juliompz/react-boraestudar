import React, { useEffect } from "react";
import blogfetch from "../../axios/config";
import axios from "axios";
import Navbar from "../../components/Navbar";
import ListCursos from "../../components/ListCursos";

export default function Cursos(){

    

    return <>
        <Navbar />
        <ListCursos />
    </>
}