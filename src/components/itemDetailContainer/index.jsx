import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { ItemDetail } from "../itemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const id = useParams().id;
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(Number(id))
            .then((response) => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [id]);

    return (
        <div>
            {product && <ItemDetail item={product}></ItemDetail>}
        </div>
    )
}