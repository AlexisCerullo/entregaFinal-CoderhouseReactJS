import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const {cart, cartQuantity} = useContext(CartContext);

    return (
        <div className="nav-carrito">
            <img className="nav-carrito-imagen" src="../carrito.png" alt="Imagen del Carrito" />
            {cart.length >0 && <span>{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget