import {useState} from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'


function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setIsActivePlayer] = useState('X')

    function handleSelectSquare(rowIndex, colIndex) {
      setIsActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
      setGameTurns((prevTurns) => {
        let currentPlayer = "X"

        if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
          currentPlayer = 'O';
        }

        const updatedTurns = [
          { square: {row: rowIndex, col: colIndex }, player: currentPlayer},...prevTurns, ]
          return updatedTurns
      })
    }


  // console.log(activePlayer, "HERE DUDE")
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

    LOG
    </main>
  )
}

export default App
