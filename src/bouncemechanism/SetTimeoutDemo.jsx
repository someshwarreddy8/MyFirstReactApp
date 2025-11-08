import { useState } from "react"

const SetTimeoutComp = () => {

    const [show, setShow] = useState(false)

    const handleButtonClick = () => {
        setShow(true)

        setTimeout(() => {
            setShow(false)
        }, 4000);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>click me</button>

            {show && <div style={{ color: 'green', marginTop: '25px' }}>This message dissapper after 4 seconds</div>}
        </div>
    )
}

export default SetTimeoutComp