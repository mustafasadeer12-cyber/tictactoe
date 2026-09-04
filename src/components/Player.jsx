import { useState } from 'react'

export default function Player({ initialname, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialname)

    // function saveName(e) {
    //     const value = e.target.value // ANOTHER APPROACH.
    //     setPlayer(value)
    // } 

    function handleKey(e) { 
        if(e.key === 'Enter') {
            setIsEditing(false)
        }
    }

    const handleChange = (e) => { // how is 'e' is an object?
        console.log(e)
        setPlayerName(e.target.value)
    }
    function handleEditClick() {
        setIsEditing((editing) => !editing) 
        
    }
    
    let EditPlayerName = <span className="player-name"> { playerName } </span>
    if(isEditing) {
        EditPlayerName = (
            <>
            <input type="text" required onChange={handleChange} value={playerName} onKeyDown={handleKey} />
            </>
        )
    }

    return (
        <li className={isActive ? 'active' : 'undefined'}>
          <span className="player">
             {EditPlayerName}
             <span className="player-symbol">{ symbol }</span>
             {isEditing ? <button onClick={handleEditClick}>Save</button> : <button onClick={handleEditClick}>Edit</button>}
              </span>
              
          </li>
    )

} 

// if(!isEditing) {
    //     <span className="player-name">{name}</span>
    // } else {
    //     <input>{ name }</input>
    // }


    // let playerName = <span className="player-name"> { name } </span>
    // if(isEditing) {
    //     playerName = <input type="text" className="player-name" />
    // }