import './App.css'
import { useState } from 'react'
import Partida from './components/Partida'
function App() {
  const[times, setTimes] = useState(
    [
    "Al Moçar",
    "Apend City",
    "Ah Tá Anta",
    "Atlético Maneiro",
    "Baile de Munique",
    "Barcelusa",
    "Bar Sem Lona",
    "Chelsicha",
    "CR Flamingo",
    "Cuiabayern",
    "Falso Madrid",
    "Horriver Plate",
    "Inter de Limão",
    "Jumentus",
    "Lazionados",
    "Malfica",
    "Meia Boca Junior",
    "Paysanduba",
    "Real Madruga",
    "Real Matismo"
]
  )
 const[jogos, setJogos] = useState([
  // {ll
  //   id: 0, 
  //   time1: "Vaso da Grama",
  //   time2: "Loka Juniors",
  // },

  // {
  //   id: 1, 
  //   time1: "Arraybia Claudita",
  //   time2: "United UseStates",
  // },

  
])

function sortearJogo(){
  let copiaTimes = [...times]
  let n1 = Math.floor(Math.random()*copiaTimes.length)
  let t1 = copiaTimes[n1]
  copiaTimes.splice(n1, 1)

  let n2 = Math.floor(Math.random()*copiaTimes.length)
  let t2 = copiaTimes[n2]
  copiaTimes.splice(n2, 1)

  let novoJogo = {
    id: Date.now(),
    time1: t1,
    time2: t2
  }
setJogos([novoJogo, ...jogos])
setTimes([...copiaTimes])
}

return (
    <div className='cont-app'>
      <h1>Copa do Mundo Cringe</h1>
      <ul className='lista-times'>
        {times.map((time) => (
          <li key={time}   >{time}</li>
        ) )}
        <hr />
        {times.length &&
          <button onClick={sortearJogo}className='butao'>Sortear Jogos</button>
        }
        <hr />
      </ul>
      
      <h2>Jogos da primeira rodada</h2>
      <div className="primeira-rodada">
        {jogos.map ( (jogo) => (
          <Partida key={jogo.id} j={jogo}/>
        ) )}
      </div>
        





      

    </div>
  )
}

export default App
