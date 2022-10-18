import React, { useState, useEffect } from "react";
import Botao from "./components/Botao";
import TaskContainer from "./components/TaskContainer";
import TaskItem from "./components/TaskItem";
import "./styles/index.css"


interface Tarefa{
  titulo: string;
  done: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
  // {
  //   titulo: "tarefa 1",
  //   done: false,
  // },
]);
const [tituloTarefa, setTituloTarefa] = useState<string>("");

  function adicionarTarefa(event: React.FormEvent){
    event.preventDefault();
    setTarefas([...tarefas, {
      titulo: tituloTarefa,
      done: false,
    },
  ]);
  setTituloTarefa("");

}

function concluirTarefa(posicao: number){
  const novaLista = [...tarefas];

  novaLista[posicao].done = true;

  setTarefas(novaLista);
}

useEffect(() => {
  alert('Para começar digite uma tarefa');
}, []);
  return (
    <main className="container">
      <h1 className="m-5">📚 Task Manager</h1>
        <form id="new-task" onSubmit={adicionarTarefa}>
          <input className="input" type="text" onChange={(event)=>setTituloTarefa(event.target.value)} name="" id="" value={tituloTarefa} />
          <Botao texto="Adicionar" cor="success" />
          {/* <button id="btnAdd" className="btn btn-primary" type="submit">
            Add
          </button> */}
        </form>
        <TaskContainer>
          {tarefas.map((tarefa: Tarefa, posicao: number) => {
              return (
                <TaskItem titulo={ tarefa.titulo } done={ tarefa.done } concluirTarefa={() => concluirTarefa(posicao)} />);
            })}
        </TaskContainer>
    </main>
  );
}

export default App;
//para executar funções com o parâmetro já setado, crie uma função anonima antes para que execute o executamento da execução (linha 45)