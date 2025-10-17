import React, { use, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(false)
    const [inValid, setInvalid] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "productos", id)

        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetalle({ id: res.id, ...res.data() })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [id])


    if (inValid) {
        return (
            <div>
                <h1>El producto no existe!</h1>
                <Link className='btn btn-primary' to={'/'}> Volver al Inicio </Link>
            </div>
        )
    }

    return (
        <>
            {
                loading
                    ? <LoaderComponent />
                    : <>
                        <div>
                            <ItemDetail detalle={detalle} />
                        </div>
                    </>
            }
        </>
    )
}

export default ItemDetailContainer;