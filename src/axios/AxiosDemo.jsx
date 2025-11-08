import { useEffect, useState } from "react";
import axios from "axios";

const AxiosTest = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <>
            <ul>
                {products.map(product => { return <li key={product.id}>{product.title}</li> })}
            </ul>
        </>
    )
}

export default AxiosTest;