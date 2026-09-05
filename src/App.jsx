import {useState} from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"

        if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
          currentPlayer = 'O';
        }
        return currentPlayer
}


function App() {
  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setIsActivePlayer] = useState('X')

   const activePlayer = deriveActivePlayer(gameTurns)

    function handleSelectSquare(rowIndex, colIndex) {
      // setIsActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
      setGameTurns((prevTurns) => {
        const currentPlayer = deriveActivePlayer(prevTurns)
        const updatedTurns = [
          { square: {row: rowIndex, col: colIndex }, player: currentPlayer},...prevTurns, ]
          return updatedTurns
      })
    }


  console.log(activePlayer, "HERE DUDE")
  return ( <main>
    <div id="game-container">
      <ol id="players" className= "highlight-player">
        <Player initialname="Player 1" isActive={activePlayer === 'X'}/>
        <Player initialname="Player 2" isActive={activePlayer === 'O'}/>
      </ol>

      <GameBoard  onSelectSquare={handleSelectSquare} 
                  turns={gameTurns}
      />

    </div>

    <Log turns={gameTurns} />
    </main>
  )
}

export default App
