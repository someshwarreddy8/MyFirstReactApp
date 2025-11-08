const CarData = (props) => {

    const { color, price, model, milage } = props.carInfo

    return (
        <>
            <ol>
                <li>{color}</li>
                <li>{price}</li>
                <li>{model}</li>
                <li>{milage}</li>
            </ol>
        </>
    )
}

export default CarData