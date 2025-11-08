const MapEx = () => {

    const elemnets = ["apple", "banana", "pomegranate"]

    const obj = {"id":1, "name":"xyz"}
    console.log('object key names are ::: '+ Object.keys(obj))

    return (
        <>
            <ol>
                {elemnets.map(item => <li key={item}>{item}</li>)}
            </ol>
        </>
    )
}

export default MapEx