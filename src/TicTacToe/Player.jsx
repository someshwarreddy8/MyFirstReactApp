import { useState } from "react"

const PlayerComp = (prop) => {

    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(prop.name)

    const handleOnClick = () => {
        setIsEditing((prev) => !prev)
    }

    const handleNameChange = (event) => {
        setName(event.target.value) 
    }

    return (
        <li>
            <span>
                {!isEditing ? <span>{name}</span> : <input type="text" required value={name} onChange={handleNameChange} />}
                <span>{prop.symbol}</span>
            </span>
            <button onClick={handleOnClick} style={{ marginLeft: 10 + 'px' }}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default PlayerComp