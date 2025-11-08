import { useEffect, useState } from "react"

const UseEffectDemo = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)

        return () => {
            console.log('clean up function!!!!')
        }
    }, [count])

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount((prev) => { return prev + 1 })}>increase</button>
            <button onClick={() => setCount((prev) => { return prev - 1 })}>decrease</button>
        </div>
    )
}

export default UseEffectDemo