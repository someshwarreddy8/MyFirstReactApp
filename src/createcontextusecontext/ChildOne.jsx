import { useContext } from "react";
import { componentContext } from './CreateContext';

const ChildOneComp = () => {

    const contextVal = useContext(componentContext);

    return (
        <>
            <p>This is child one component</p>
            <span>{contextVal}</span>
        </>
    )
}

export default ChildOneComp;