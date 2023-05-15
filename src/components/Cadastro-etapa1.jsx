import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material"; 

function CadastroEtapa1() {

    return (
        <>

            <Grid className={styles.container}>

                <Grid xs={12} md={12} className={styles.card} >

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 1</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle_one}>1</div> Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de Perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>

                        <div className={styles.direito_cima}>

                            <span>

                                <b><h1>Suas Informações pessoais</h1>

                                    Insira suas informações pessoais
                                </b>



                            </span>

                            <div className={styles.a_cima}>
                                <span>Nome Completo</span>
                                <input class={styles.a_input} type="text" id="nome" placeholder="Escreva aqui seu nome completo" />
                            </div>
                        </div>

                        <Grid xs={12} md={12} style={{ height: '70%' }}>


                            <div className={styles.baixo}>

                                <form className={styles.baixo_lado_esquerdo}>
                                    <span className={styles.a}>
                                        <span>Data de nascimento</span>
                                        <input className={styles.a_input} type="date" id="dataNascimento" placeholder="dd/mm/yyyy" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Email</span>
                                        <input className={styles.a_input} type="text" id="email" placeholder="Ex: nome@gmail.com" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Número de telefone</span>
                                        <input className={styles.a_input} type="text" id="numeroTelefone" placeholder="(11) 0 0000-0000" />
                                    </span>

                                </form>

                                <form className={styles.baixo_lado_direito}>


                                    <span className={styles.a}>
                                        <span>Gênero</span>
                                        <input className={styles.a_input} type="text" id="genero" placeholder="Selecione seu gênero" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>CPF</span>
                                        <input className={styles.a_input} type="text" id="cpf" placeholder="000.000.000-00" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Senha</span>
                                        <input className={styles.a_input} type="text" id="senha" placeholder="*************" />
                                    </span>


                                </form>

                            </div>
                            


                        </Grid>
                        <button className={styles.botao_final_cadastro}>Avançar</button>
                    </Grid>
                    
                </Grid>

            </Grid>

            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile} >
                    
                    <Grid xs={12} md={12} className={styles.imagem}></Grid>
                    <Grid xs={12} md={10} className={styles.partes}>
                    <div className={styles.circle_mobile_one}>1</div>
                    <div className={styles.circle_mobile}>2</div>
                    <div className={styles.circle_mobile}>3</div>
                    <div className={styles.circle_mobile}>4</div>
                    <div className={styles.circle_mobile}>5</div>
                    </Grid>
                    <form style={{display:'flex', flexDirection:'column'}}>
                        <h1>Informações pessoais</h1>
                        
                        <span style={{ marginTop: '10%' }}>
                        <span>Nome Completo</span>
                        <TextField id="nome" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Data de nascimento</span>
                        <TextField id="dataNascimento" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Email</span>
                        <TextField id="email" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Numero de telefone</span>
                        <TextField id="numeroTelefone" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Gênero</span>
                        <TextField id="genero" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>CPF</span>
                        <TextField id="cpf" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Senha</span>
                        <TextField id="senha" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <Button variant="contained" style={{ marginTop: '10%', backgroundColor:'#50BFB8' }}>Avançar</Button>

                    </form>




                </Grid>

            </Grid>

        </>
    )


    /*function cadastrar() {
        var nomeVar = nome.value;
        var dataNascimentoVar = dataNascimento.value;
        var generoVar = genero.value;
        var emailVar = email.value;
        var cpfVar = cpf.value;
        var senhaVar = senha.value;
        var numeroTelefoneVar = numeroTelefone.value;

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeCompletoServer: nomeVar,
                dataNascimentoServer: dataNascimentoVar,
                generoServer: generoVar,
                emailServer: emailVar,
                cpfServer: cpfVar,
                senhaServer: senhaVar,
                numeroTelefoneServer: numeroTelefoneVar

            }).then(function (res) {
                console.log(res)
            }).catch(function(res){
                console.log(res)
            })
        })

    }*/

}

export default CadastroEtapa1;