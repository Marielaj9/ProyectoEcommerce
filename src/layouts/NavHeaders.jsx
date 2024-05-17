import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavHeaders extends Component {
  render() {
    return (
      
        <nav>
            <div>
                <h1>Ecommerce</h1>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/perfil'>Usuario</Link></li>
                    <li><Link to='/productos'>Productos</Link></li>
                    <li><Link to= '/carrito'>Carrito</Link></li>
                    <li>buscador</li>
                </ul>
            </div>
        </nav>
      
    )
  }
}

export default NavHeaders