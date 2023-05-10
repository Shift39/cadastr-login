import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"


function CadastroEtapa2() {
    

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

                <div class={styles.direito_cima}>
                
                <span>

                    
             
                    
                
                </span>

                

                <div className={styles.baixo_cadastro_dois}>

                <form className={styles.baixo_lado_esquerdo}>
                    <span className={styles.a}>
                    <span>CEP</span>
                    <input className= {styles.a_input} type="text" id="cep" placeholder="12992-130"/>
                    </span>

                    <span className={styles.a}>
                    <span>Estado</span>
                    <input className= {styles.a_input} type="text" id="estado" placeholder="São Paulo"/>
                    </span>
                    
                    <span className={styles.a}> 
                    <span>Cidade</span>
                    <input className= {styles.a_input} type="text" id="cidade" placeholder="São Paulo"/>
                    </span>

                </form>

                <form className={styles.baixo_lado_direito}>


                    <span className={styles.a}>
                    <span>Bairro</span>
                    <input className= {styles.a_input} type="text" id="bairro" placeholder="Paulista"/>
                    </span>

                    <span className={styles.a}>
                    <span>Rua</span>
                    <input className= {styles.a_input} type="text" id="rua" placeholder="Rua haddok lobo"/>
                    </span>

                    <span className={styles.a}>
                    <span>Numero</span>
                    <input className= {styles.a_input} type="text" id="numero" placeholder="234"/>
                    </span>

                    <span className={styles.a}>
                        <span>Complemento</span>
                        <input className= {styles.a_input} type="text" id="complemento" placeholder="segundo andar"/>
                    </span>


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


export default CadastroEtapa2;