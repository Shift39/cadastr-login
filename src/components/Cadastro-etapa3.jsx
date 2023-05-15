import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material"; 

function CadastroEtapa3() {

    return (
        <>

            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 3</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div>Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle_one}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de Perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>



                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>


                            <div className={styles.baixo}>

                                <form className={styles.baixo_lado_esquerdo}>
                                    <span className={styles.a}>
                                        <span>Nome da Universidade</span>
                                        <input className={styles.a_input} type="text" id="universidade" placeholder="SPtech" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Ano de conclusão</span>
                                        <input className={styles.a_input} type="text" id="ano" placeholder="2050" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Grau academico</span>
                                        <input className={styles.a_input} type="" id="grau" placeholder="Ensino médio completo" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Numero da matricula</span>
                                        <input className={styles.a_input} type="text" id="numero" placeholder="121412" />
                                    </span>

                                </form>

                                <form className={styles.baixo_lado_direito}>




                                </form>

                            </div>
                            


                        </Grid>
                        <button className={styles.botao_final_cadastro}>Avançar</button>

                    </Grid>

                </Grid>

            </Grid>

            <Grid className={styles.container_dois}>

                <Grid xs={12} md={12} className={styles.card_mobile}>

                    <Grid xs={12} md={12} className={styles.imagem}></Grid>
                    <Grid xs={12} md={10} className={styles.partes}>
                    <div className={styles.circle_mobile}>1</div>
                    <div className={styles.circle_mobile}>2</div>
                    <div className={styles.circle_mobile_one}>3</div>
                    <div className={styles.circle_mobile}>4</div>
                    <div className={styles.circle_mobile}>5</div>
                    </Grid>
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Educação</h1>

                       
                        <span style={{ marginTop: '10%' }}>
                            <span>Nome da universidade</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Ano de conclusão</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Grau academico</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                            <span>Numero da matricula</span>
                            <TextField id="nome" label="" variant="outlined" style={{ width: '100%' }} />
                        </span>

                        

                        <Button variant="contained" style={{ marginTop: '10%', backgroundColor: '#50BFB8' }}>Avançar</Button>

                    </form>




                </Grid>

            </Grid>


        </>
    )

}

export default CadastroEtapa3;