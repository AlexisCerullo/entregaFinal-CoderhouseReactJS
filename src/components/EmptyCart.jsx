import React from 'react'
import { Link } from 'react-router-dom'
import "../css/EmptyCart.css"

const EmptyCart = () => {
  return (
    <div className='EmptyContenedor'>
      <h2 className='EmptyTitulo'>Tu Carrito Está Vacio</h2>
      <h3 className='EmptySubtitulo'>Te Invitamos a Ver Nuestros Productos</h3>
      <Link className='btn btn-primary' to='/'>Ir a Comprar</Link>
    </div>
  )
}

export default EmptyCart