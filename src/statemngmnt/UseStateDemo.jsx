import { useEffect, useState } from "react"

const UseStateComp = () => {

    const [city, setCity] = useState("Hyderabad")
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setCity("chennai")

        setCity((previous) => {
            return previous + " :::updated Data"
        })
    }, [])

    return (
        <>
            <p>{city}</p>
            <input value={city} />
            {!flag ? <p>falg is disabled</p> : <p>flag is enabled</p>}
        </>
    )
}

export default UseStateComp