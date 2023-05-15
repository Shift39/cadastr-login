import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


function CadastroEtapa4() {

    return (

        <>
            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 4</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div>Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle_one}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de Perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>



                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>

                            <span className={styles.sobre_a}>


                                <span>Sobre</span>
                                <input className={styles.sobre} type="text" id="sobre" />


                            </span>

                        </Grid>
                        <button className={styles.botao_final}>Avançar</button>

                    </Grid>

                </Grid>

            </Grid>

            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile}>

                    <Grid xs={12} md={12} className={styles.imagem}></Grid>
                    <Grid xs={12} md={10} className={styles.partes}>
                        <div className={styles.circle_mobile}>1</div>
                        <div className={styles.circle_mobile}>2</div>
                        <div className={styles.circle_mobile}>3</div>
                        <div className={styles.circle_mobile_one}>4</div>
                        <div className={styles.circle_mobile}>5</div>
                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Sobre</h1>


                        <span style={{ marginTop: '10%' }}>
                            <span>Sobre</span>
                            <TextField id="sobre" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>





                        <Button variant="contained" style={{ marginTop: '10%', backgroundColor: '#50BFB8' }}>Avançar</Button>

                    </form>




                </Grid>

            </Grid>




        </>

    )
    /*function cadastrar() {
        var sobreVar = sobre.value;
        

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sobreServer: sobreVar,
               
            }).then(function (res) {
                console.log(res)
            }).catch(function (res) {
                console.log(res)
            })
        })

    }*/


}


export default CadastroEtapa4;