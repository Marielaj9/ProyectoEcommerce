import React, { useState } from 'react'

export const Carrito = () => {
  const[productos, setProductos]= useState([
    { id:1, nombre: 'Producto 1', precio: 10, cantidad: 1},
    {id:2, nombre: 'Producto 2', precio: 20, cantidad: 2},
  ]);

  const aumentarCantidad= (id) => {
    const nuevosProductos = productos.map(producto => {
      if (producto.id === id){
        return{ ...producto, cantidad: producto.cantidad +1};
      }
      return producto;
    });
    setProductos(nuevosProductos);
  }

  const disminuirCantidad= (id) =>{
    const nuevosProductos = productos.map(producto => {
      if( producto.id === id && producto.cantidad >1){
        return {...producto, cantidad: producto.cantidad -1};
      }
      return producto;
    });
    setProductos(nuevosProductos);
  }

  const eliminarProducto= (id) => {
    const nuevosProductos= productos.filter( producto => producto.id !== id);
    setProductos(nuevosProductos);
  }

  const calcularTotal = () =>{
    return productos.reduce((total, producto) => total + (producto.precio* producto.cantidad), 0);
  }
  const vaciarCarrito =() =>{
    setProductos([]);
  }
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {productos.map(producto =>(
          <li key={producto.id}>
            <div>
              <span>{producto.nombre} - ${producto.precio}</span>
              <button onClick={() => aumentarCantidad(producto.id)}>+</button>
              <span>{producto.cantidad}</span>
              <button onClick={() => disminuirCantidad(producto.id)}>-</button>
              <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          
            </div>

          </li>
        ))}
      </ul>
        <div>
          <p>Total: ${calcularTotal()}</p>
        </div>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}
