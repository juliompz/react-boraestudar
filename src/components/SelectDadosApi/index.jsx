import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


import "./select.css"


export default function SelectDadosApi( {opt, cursos}) {

    const navigate = useNavigate();
    const [selectedCurso, setSelectedCurso] = useState('');
  
    const handleCursoChange = (event) => {
      const selectedId = event.target.value;
      setSelectedCurso(selectedId);
  
      // Redirecionar para a página de detalhes do curso
      navigate(`${selectedId}`)
    };

    return<>
    
        <select name={`selecione-${ opt }`} id={`selecione-${ opt }`} value={selectedCurso} onChange={handleCursoChange}>
            <option value="">{opt}</option>
            {cursos.map(curso => (
            <option key={curso.id} value={curso.id}>{curso.nome}</option>

            ))}
        </select>
    
    </>
}