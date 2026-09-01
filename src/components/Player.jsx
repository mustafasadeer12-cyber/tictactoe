import { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(isEditing ? false : true)
    }
    


    let playerName = <span className="player-name"> { name } </span>
    if(isEditing) {
        playerName = (
            <>
            <input type="text" required value={name} />
            
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