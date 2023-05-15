import React from "react";
import api from "../api";
import { useState } from "react";
import LoginFun from "../components/Login";
import Navbar from "../components/Navbar";


function Login() {

    return(
        <>
        <Navbar />
        <LoginFun />
        
        </>
    )
    
}

export default Login;