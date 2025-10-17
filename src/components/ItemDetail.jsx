import React, { useContext, useState } from "react";
import Contador from "./Contador";
import "../css/ItemDetail.css"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetail = ({ detalle }) => {
    const { addItem } = useContext(CartContext);

    const [compra, setCompra] = useState(false);

    const onAdd = (cantidad) => {
        setCompra(true);
        addItem(detalle, cantidad);
        Swal.fire({
            icon: "success",
            title: `Agregaste ${cantidad} de ${detalle.name} al carrito`,
            showConfirmButton: false,
            timer: 3000
        })
    }

    return (
        <div>
            <h2 className="detalle-titulo">Detalle de: {detalle.name}</h2>
            <div className="detalle-contenido">
                <img className="detalle-imagen" src={detalle.img} alt={detalle.name} />
                <div className="detalle-textos">
                    <p className="detalle-descripcion">{detalle.description}</p>
                    <div className="detalle-contador">
                        <p className="detalle-precio">${detalle.price},00</p>
                        <p className="detalle-stock">Stock disponible: <span>{detalle.stock} </span> unidades</p>
                        {compra ? <Link className="btn btn-primary" to='/cart'>Ir al Carrito</Link> : <Contador stock={detalle.stock} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;