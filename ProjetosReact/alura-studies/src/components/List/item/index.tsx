import React from "react";
import style from "../List.module.scss"
import { ITarefa } from "../../../types/tarefa";

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionado: ITarefa) => void
}
export default function Item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props){
    console.log('item atual',{tarefa, tempo, selecionado, completado, id })
    return(
        <li className={style.item} onClick={() => selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id,
            }

        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

