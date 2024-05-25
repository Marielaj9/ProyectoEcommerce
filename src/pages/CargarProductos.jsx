import React from 'react'

export const CargarProductos = () => {
  
  return (
    <div>
        <h2>Agregar Productos</h2>
                <form>
                    <label>Nombre del producto</label>
                    <input type='text'
                        name='name'
                        placeholder='nombre del producto'
                    />
                    <br></br>
                    <label>Categoria</label>
                    <input type='text' name='name' placeholder='categoria' />
                    <br></br>
                    <label>Precio</label>
                    <input type='number' name='price' placeholder='precio' />
                    <br></br>
                    <label>Imagen del producto</label>
                    <input type='file' name='image' placeholder='imagen' />
                    <br>
                </br>
                <button type='submit'>Agregar</button>
                </form>
    </div>
  )
}
