import {useState} from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'


function App() {
 const [activePlayer, setActivePlayer] =  useState('X')
  
  function handleSelectSquare(){
    setActivePlayer((currActivePlayer) => currActivePlayer === "X" ? "O" : 'X')
  }

  // console.log(activePlayer, "HERE DUDE")
  return ( <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialname="Player 1" isActive={activePlayer}/>
        <Player initialname="Player 2" isActive={activePlayer}/>
      </ol>

      <GameBoard  onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>

    LOG
    </main>
  )
}

export default App
