import React from "react";
import Botao from "../button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"

export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Botao>Iniciar</Botao>
        </div>
    )
}