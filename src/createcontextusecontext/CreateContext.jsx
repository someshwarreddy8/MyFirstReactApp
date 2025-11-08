import { createContext, useEffect, useState } from "react";
import ChildOneComp from "./ChildOne";

export const componentContext = createContext(null);

const CreateContextDemo = () => {

    const [val, setVal] = useState(1);

    useEffect(() => {
        // setVal(val => val + 1)
        console.log(val)

        // return () => { return setVal(1) } //un-mount logic
    }, [val]);

    return (
        <>
            <span style={{ color: 'green' }}>This is Parent</span>
            <componentContext.Provider value={val}>
                <ChildOneComp />
            </componentContext.Provider>
            <button onClick={() => setVal(val => val + 1)}>click me</button>
        </>
    );
}

export default CreateContextDemo;