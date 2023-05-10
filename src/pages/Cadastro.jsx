import React from "react";
import api from "../api";
import { useState } from "react";
import CadastroEtapa1 from "../components/Cadastro-etapa1";
import CadastroEtapa2 from "../components/Cadastro-etapa2";
import CadastroEtapa3 from "../components/Cadastro-etapa3";
import CadastroEtapa4 from "../components/Cadastro-etapa4";

import Navbar from "../components/Navbar";

function Cadastro() {
    
    

    return (
        <>
        <Navbar />
        <CadastroEtapa1 />
        </>
    )
    
}

export default Cadastro