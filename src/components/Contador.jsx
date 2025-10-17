import { useState } from "react";
import "../css/Contador.css"

const Contador = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const comprar = () => {
        onAdd(count)
    }

    return (
        <div className="botones-contador">
            <button className="btn btn-danger" onClick={restar} >-</button>
            <span>{count}</span>
            <button className="btn btn-success" onClick={sumar} >+</button>
            <div className="botones-compra">
                <button className="btn btn-primary" onClick={comprar} disabled={stock === 0 || count === 0}>Comprar</button>
            </div>
        </div>
    )

}

export default Contador
