import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"
import styles2 from "../html-css-template/css/login.module.css"
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";

function LoginFunction() {

    return (
        <>
            <Grid container style={{ width: '100%',  minHeight: '100vh', display: 'flex', padding: '2%',alignItems:'center',justifyContent:'center' }}>
                
                <Grid xs={4} md={4} style={{borderRadius: '2%', display: 'flex', height: '60vh',
                                            flexDirection:'column',alignItems:'center', border:'0.5px solid black', padding:'1%'}}>


                    <b class={styles2.bem_vindo}>
                        <div class={styles2.lado_esquerdo_bem_vindo}></div>

                        Bem-Vindo(a) de volta!

                        <div class={styles2.lado_direito_bem_vindo}></div>
                    </b>

                    <span class={styles2.a_login}>
                        <span>Email</span>
                        <TextField id="email" label="" variant="outlined" style={{ width: '100%' }} />
                    </span>

                    <span class={styles2.a_login}>
                        <span>Senha</span>
                        <TextField id="senha" label="" variant="outlined" style={{ width: '100%' }} />
                    </span>

                    <span class={styles2.avisos}>

                        <span><input type="checkbox" /><b>Mater conectado</b></span> <a href="#">Esqueceu a senha?</a>

                    </span>

                    <button class={styles2.entrar_login}> <b> Entrar </b></button>

                    <span class={styles2.avisos}>

                        <span><b>Ainda não tem uma conta?<a href="#">Cadastre-se</a></b></span>

                    </span>


                </Grid>

            </Grid>
            
            
        </>

        
    )
    /*function entrar() {
        var emailVar = email.value;
        var senhaVar = senha.value;



        
    }*/
}

export default LoginFunction;