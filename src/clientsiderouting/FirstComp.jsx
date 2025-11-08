import { useParams } from "react-router-dom";

const FirstComponent = () => {
    const params = useParams();
    return (
        <>
            <h3>This is First component params: {params.params}</h3>
        </>
    )
}

export default FirstComponent;