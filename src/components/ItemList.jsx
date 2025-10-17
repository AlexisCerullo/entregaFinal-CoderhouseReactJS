import React from 'react';
import Item from './Item';
import "../css/Cards.css"

const ItemList = ({ data }) => {

  return (
    <div className='productos-contenedor'>
      {data.map((producto) => <Item key={producto.id} producto={producto} />)}
    </div>
  )
}

export default ItemList