import { useState } from "react"

const TwoWayDataBinding = () => {

    const [name, setName] = useState('test name')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
        <dl>
            <dt>Name:</dt>
            <dd><input value={name} onChange={handleNameChange} /></dd>
        </dl>
        </>
    )
}

export default TwoWayDataBinding