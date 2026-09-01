import { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    const [player, setPlayer] = useState("")

    // function saveName(e) {
    //     const value = e.target.value // ANOTHER APPROACH.
    //     setPlayer(value)
    // }

    function handleKey(e) {
        if(e.key === 'Enter') {
            setIsEditing(false)
        }
    }

    const handleChange = (e) => {
        setPlayer(e.target.value)
    }
    function handleEditClick() {
        setIsEditing((editing) => !editing) 
        
    }
    
    let playerName = <span className="player-name"> { player } </span>
    if(isEditing) {
        playerName = (
            <>
            <input type="text" required onChange={handleChange} value={player} onKeyDown={handleKey} />
            </>
        )
    }

    return (
        <li>
          <span className="player">
             {playerName}
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