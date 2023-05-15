import React, { useState } from "react";
import styles from "../html-css-template/css/cadastro.module.css"
import styles2 from "../html-css-template/css/login.module.css"
import { Grid } from '@mui/material';

function LoginFunction() {

    return (
        <>
            <Grid container style={{ width: '100%', border: '2px solid black', minHeight: '100vh', display: 'flex', padding: '2%' }}>
                <Grid xs={8} md={8} style={{ border: '2px solid black', borderRadius: '2%', display: 'flex', height: '80vh' }}>



                </Grid>
                <Grid xs={4} md={4} style={{ border: '2px solid black', borderRadius: '2%', display: 'flex', height: '60vh',
                                            flexDirection:'column',alignItems:'center'}}>


                    <b class={styles2.bem_vindo}>
                        <div class={styles2.lado_esquerdo_bem_vindo}></div>

                        Bem-Vindo(a) de volta!

                        <div class={styles2.lado_direito_bem_vindo}></div>
                    </b>

                    <span class={styles2.a_login}>
                        <span>Email</span>
                        <input class={styles.a_input_login} type="text" id="email" placeholder="Ex: nome@gmail.com" />
                    </span>

                    <span class={styles2.a_login}>
                        <span>Senha</span>
                        <input class={styles.a_input_login} type="text" id="senha" placeholder="*************" />
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
            
            <div class={styles.corpo_card}>

                <div class={styles2.login_lado_esquerdo}></div>

                <div class={styles2.login_lado_direito}>

                    <form class={styles2.card_login}>

                        <b class={styles2.bem_vindo}>
                            <div class={styles2.lado_esquerdo_bem_vindo}></div>

                            Bem-Vindo(a) de volta!

                            <div class={styles2.lado_direito_bem_vindo}></div>
                        </b>

                        <span class={styles2.a_login}>
                            <span>Email</span>
                            <input class={styles.a_input_login} type="text" id="email" placeholder="Ex: nome@gmail.com" />
                        </span>

                        <span class={styles2.a_login}>
                            <span>Senha</span>
                            <input class={styles.a_input_login} type="text" id="senha" placeholder="*************" />
                        </span>

                        <span class={styles2.avisos}>

                            <span><input type="checkbox" /><b>Mater conectado</b></span> <a href="#">Esqueceu a senha?</a>

                        </span>

                        <button class={styles2.entrar_login}> <b> Entrar </b></button>

                        <span class={styles2.avisos}>

                            <span><b>Ainda não tem uma conta?<a href="#">Cadastre-se</a></b></span>

                        </span>
                    </form>

                </div>

            </div>
        </>
    )
}

export default LoginFunction;