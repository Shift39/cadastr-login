import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"

function CadastroEtapa1() {
    
    return(
        <>
          <div class={styles.corpo_card}>
            <div class={styles.card}>
            <div class={styles.card_lado_esquerdo}>
                
                <div class={styles.esquerda_cima}>

                <h1>Cadastro - Psicólogo</h1>
                <br/>
                <h1>Etapa 1</h1>
                
                
                </div>
                
                <div className={styles.fases}>

                    <span className={styles.gama_um}>Informações Pessoais</span>
                    <span className={styles.gama}>Endereço</span>
                    <span className={styles.gama}>Educação</span>
                    <span className={styles.gama}>Sobre</span>
                    <span className={styles.gama}>Foto de Perfil</span>
    
                </div>
            
            </div>


        <div className={styles.card_lado_direito}>

                <div className={ styles.direito_cima}>
                
                <span>

                    <b><h1>Suas Informações pessoais</h1> 
                        
                        Insira suas informações pessoais
                    </b>
             
                    
                
                </span>

                <div className={styles.a_cima}>
                    <span>Nome Completo</span>
                    <input class={styles.a_input} type="text" id="nome" placeholder="Escreva aqui seu nome completo"/>
                </div>
                </div>

            <div className={styles.baixo}>

                <form className={styles.baixo_lado_esquerdo}>
                    <span className={styles.a}>
                    <span>Data de nascimento</span>
                    <input className= {styles.a_input} type="date" id="dataNascimento" placeholder="dd/mm/yyyy"/>
                    </span>

                    <span className={styles.a}>
                    <span>Email</span>
                    <input className= {styles.a_input} type="text" id="email" placeholder="Ex: nome@gmail.com"/>
                    </span>
                    
                    <span className={styles.a}> 
                    <span>Número de telefone</span>
                    <input className= {styles.a_input} type="text" id="numeroTelefone" placeholder="(11) 0 0000-0000"/>
                    </span>

                </form>

                <form className={styles.baixo_lado_direito}>


                    <span className={styles.a}>
                    <span>Gênero</span>
                    <input className= {styles.a_input} type="text" id="genero" placeholder="Selecione seu gênero"/>
                    </span>

                    <span className={styles.a}>
                    <span>CPF</span>
                    <input className= {styles.a_input} type="text" id="cpf" placeholder="000.000.000-00"/>
                    </span>

                    <span className={styles.a}>
                    <span>Senha</span>
                    <input className= {styles.a_input} type="text" id="senha" placeholder="*************"/>
                    </span>


                </form>

            </div>
                <button className={styles.botao_final}>Avançar</button>
        </div>
        </div>
        </div>
        </>
    )


    function cadastrar() {
        var nome = nome.value;
        var dataNascimento = dataNascimento.value;
        var genero = genero.value;
        var email = email.value;
        var cpf = cpf.value;
        var senha = senha.value;
        var numeroTelefone = numeroTelefone.value;

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeCompletoServer: nome,
                dataNascimentoServer: dataNascimento,
                generoServer: genero,
                emailServer: email,
                cpfServer: cpf,
                senhaServer: senha,
                numeroTelefoneServer: numeroTelefone
            
            })
        })
        
    }
    
}

export default CadastroEtapa1;