import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import "../css/CartView.css"

const CartView = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext)
  const preConfirmVaciar = () => {
    Swal.fire({
      title: '¿Estas seguro de que queres vaciar el carrito?',
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Si',
      confirmButtonColor: '#5cb85c'
    }).then((result) => {
      if(result.isConfirmed) {
        clear()
      }
    })
  }

  return (
    <div className='CartContenedor'>
      <h1 className='CartTitulo'>Tu carrito</h1>
      <div>
        {
          cart.map((compra) => (
            <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem', border: 'solid 1px black' }}>
              <img src={compra.img} alt={compra.name} style={{ width: '9rem' }} />
              <p>{compra.name}</p>
              <p>${compra.price},00</p>
              <p>{compra.quantity}</p>
              <p>Precio Final: ${compra.quantity * compra.price},00</p>
              <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
            </div>
          ))
        }
      </div>
      <p className='CartTotal'>Total a pagar: <span>${total()},00</span></p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '2rem' }}>
        <button className='btn btn-danger' onClick={preConfirmVaciar}>Vaciar Carrito</button>
        <Link to='/checkout' className='btn btn-success'>Terminar Compra</Link>
      </div>
    </div>
  )
}

export default CartView