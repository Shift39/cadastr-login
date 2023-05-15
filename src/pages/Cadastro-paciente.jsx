import React from "react";
import api from "../api";
import { useState } from "react";
import CadastroPacienteEtapa1 from "../components/Cadastro-etapa1-paciente";
import CadastroPacienteEtapa2 from "../components/Cadastro-etapa2-paciente";
import CadastroEtapa2 from "../components/Cadastro-etapa2";
import CadastroEtapa3 from "../components/Cadastro-etapa3";
import CadastroEtapa4 from "../components/Cadastro-etapa4";

import Navbar from "../components/Navbar";

function CadastroPaciente() {
    
    

    return (
        <>
        <Navbar />
        <CadastroPacienteEtapa1 />
        </>
    )
    
}

export default CadastroPaciente