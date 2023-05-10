import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"

function CadastroEtapa4() {

    return(

        <>
        
        <div className={styles.corpo_card}>
        <div className={styles.card}>
            <div className={styles.card_lado_esquerdo}>
                
                <div className={styles.esquerdo_cima}>

                <h1>Cadastro - Psicólogo</h1>
                <br/>
                <h1>Etapa 2</h1>
                
                
                </div>
                
                <div className={styles.fases}>

                    <span className={styles.gama}>Informações Pessoais</span>
                    <span className={styles.gama}>Endereço</span>
                    <span className={styles.gama_um}>Educação</span>
                    <span className={styles.gama}>Sobre</span>
                    <span className={styles.gama}>Foto de Perfil</span>
    
                </div>
            
            </div>


            <div className={styles.card_lado_direito}>

                <div className={styles.direito_cima}>
                
                <span>

                    
             
                    
                
                </span>

                

                <div className={styles.baixo_cadastro_dois}>

                <form className={styles.baixo_cadastro_dois_sobre}>
                    <span className={styles.a}>
                        <span>Sobre</span>
                        <input className= {styles.sobre} type="text" id="sobre"/>
                    </span>
                </form>

                <form className={styles.baixo_lado_direito}>


                    


                </form>
                </div>
            <button className={styles.botao_final}>Avançar</button>
        </div>
        </div>
        </div>
        </div>
        
        </>

    )
    
}


export default CadastroEtapa4;