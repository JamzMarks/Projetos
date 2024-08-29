import React, {useState} from 'react';
import Formulario from '../components/Form';
import Lista from '../components/List';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionado: ITarefa){
    setSelecionado(tarefaSelecionado);
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      ></Lista>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
