import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"


function Navbar() {
    return(
        <>
        <nav className={styles.navbar}>
        <div className={styles.lado_esquerdo}></div>
        <div className={styles.lado_direito}> 

            <button className={styles.cadastrar}> <b> Cadastrar </b></button>
            <button className={styles.entrar}> <b> Entrar </b></button>
        
        </div>
      
        </nav>
        </>
    )
    
}

export default Navbar;