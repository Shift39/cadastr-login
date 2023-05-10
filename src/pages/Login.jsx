import React from "react";
import api from "../api";
import { useState } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";


function Login() {

    return(
        <>
        <Navbar />
        <Login />
        
        </>
    )
    
}

export default Login;