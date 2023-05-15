import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import { Button } from "@mui/material"; 
import { convertColorToString } from "material-ui/utils/colorManipulator";

function CadastroEtapa2() {


    return (
        <>
            <Grid className={styles.container}>

                <Grid xs={10} md={10} className={styles.card}>

                    <Grid xs={10} md={5} className={styles.card_lado_esquerdo}>

                        <div className={styles.esquerdo_cima}>

                            <h1>Cadastro - Psicólogo</h1>
                            <br />
                            <h1>Etapa 2</h1>


                        </div>
                        <div className={styles.fases}>

                            <span className={styles.gama}><div className={styles.circle}>1</div>Informações Pessoais</span>
                            <span className={styles.gama}><div className={styles.circle_one}>2</div>Endereço</span>
                            <span className={styles.gama}><div className={styles.circle}>3</div>Educação</span>
                            <span className={styles.gama}><div className={styles.circle}>4</div>Sobre</span>
                            <span className={styles.gama}><div className={styles.circle}>5</div>Foto de Perfil</span>

                        </div>

                    </Grid>
                    <Grid xs={10} md={8} className={styles.card_lado_direito}>



                        <Grid xs={12} md={12} style={{ height: '77%', marginTop: '15%' }}>


                            <div className={styles.baixo}>

                                <form className={styles.baixo_lado_esquerdo}>
                                    <span className={styles.a}>
                                        <span>CEP</span>
                                        <input className={styles.a_input} type="text" id="cep" placeholder="12992-130" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Estado</span>
                                        <input className={styles.a_input} type="text" id="estado" placeholder="São Paulo" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Cidade</span>
                                        <input className={styles.a_input} type="text" id="cidade" placeholder="São Paulo" />
                                    </span>

                                </form>

                                <form className={styles.baixo_lado_direito}>

                                    <span className={styles.a}>
                                        <span>Bairro</span>
                                        <input className={styles.a_input} type="text" id="bairro" placeholder="Paulista" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Rua</span>
                                        <input className={styles.a_input} type="text" id="rua" placeholder="Rua haddok lobo" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Numero</span>
                                        <input className={styles.a_input} type="text" id="numero" placeholder="234" />
                                    </span>

                                    <span className={styles.a}>
                                        <span>Complemento</span>
                                        <input className={styles.a_input} type="text" id="complemento" placeholder="segundo andar" />
                                    </span>


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
                    <div className={styles.circle_mobile_one}>2</div>
                    <div className={styles.circle_mobile}>3</div>
                    <div className={styles.circle_mobile}>4</div>
                    <div className={styles.circle_mobile}>5</div>
                    </Grid>
                    <form style={{display:'flex', flexDirection:'column'}}>
                        <h1>Endereço</h1>
                        
                        

                        <span style={{ marginTop: '10%' }}>
                        <span>CEP</span>
                        <TextField id="cep" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Estado</span>
                        <TextField id="estado" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Cidade</span>
                        <TextField id="cidade" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Bairro</span>
                        <TextField id="bairro" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Rua</span>
                        <TextField id="rua" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Numero</span>
                        <TextField id="numero" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <span style={{ marginTop: '10%' }}>
                        <span>Complemento</span>
                        <TextField id="complemento" label="" variant="outlined" style={{ width: '100%'}} />
                        </span>

                        <Button variant="contained" style={{ marginTop: '10%', backgroundColor:'#50BFB8' }}>Avançar</Button>

                    </form>




                </Grid>

            </Grid>
        </>
    )

    /*function cadastrar() {
        var cepVar = cep.value;
        var estadoVar = estado.value;
        var cidadeVar = cidade.value;
        var bairroVar = bairro.value;
        var ruaVar = rua.value;
        var numeroVar = numero.value;
        var complementoVar = complemento.value;

        fetch("/usuarios/cadastrar",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                cepServer: cepVar,
                estadoServer: estadoVar,
                cidadeServer: cidadeVar,
                bairroServer: bairroVar,
                ruaServer: ruaVar,
                numeroServer: numeroVar,
                complementoServer: complementoVar
            }).then(function (res) {
                console.log(res)
            }).catch(function(res){
                console.log(res)
            })
        })
    }*/
}


export default CadastroEtapa2;