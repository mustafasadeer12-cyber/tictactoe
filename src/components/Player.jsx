import { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => setIsEditing(!isEditing)
    
    let playerName = <span className="player-name"> { name } </span>
    if(isEditing) {
        playerName = (
            <>
            <input type="text"  required/>
            <button onClick={handleSave}>Save</button>
            </>
        )
    }

    return (
        <li>
          <span className="player">
             {playerName}
             <span className="player-symbol">{ symbol }</span>
              </span>
              <button onClick={handleEditClick}>Edit</button>
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