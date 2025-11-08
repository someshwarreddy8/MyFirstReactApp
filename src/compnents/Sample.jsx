import React from "react";

const Grapes = () => {
    return <>Grapes are good for health!!</>
}

export function Sample() {
    return (
        <React.Fragment>
            <p>Empty container Test!!!</p>
            <Grapes />
            <Banana />
        </React.Fragment>
    )
}

const Banana = () => {
    return <h1>Banana are good for health</h1>
}

