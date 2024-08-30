import React, { useEffect, useState } from "react";
import Botao from "../button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() =>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    function regresiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regresiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000);
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao onClick={() => regresiva(tempo)}>Iniciar</Botao>
        </div>
    )
}