import { useRef, useState } from "react"

const HeaderComp = () => {

    const [playerName, setPlayerName] = useState(null)
    const ref = useRef();

    const handleClick = () => {
        setPlayerName(ref.current.value)
    }

    return (
        <header>
            <h2>{playerName ?? 'unknown name'}</h2>

            <input ref={ref} />

            <button onClick={handleClick}>click me</button>
        </header>
    );
}
export default HeaderComp;