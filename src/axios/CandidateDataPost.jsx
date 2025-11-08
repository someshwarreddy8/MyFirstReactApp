import axios from "axios";
import { useState } from "react"

const CandidateData = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault()

        axios.post('apicall', { name: name, age: age })

        console.log(name)
        console.log(age)
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>Name: {" "}
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="candidate name" />
                </label>
                <input value={age} onChange={e => setAge(e.target.value)} placeholder="age" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CandidateData