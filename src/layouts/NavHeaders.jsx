import React from 'react'
import { Link } from 'react-router-dom'

export const NavHeaders = () => {
  return (
    <div>
      <nav>
    <div className="flex items-center justify-between bg-blue-400 cursor-pointer p-4">
        <h1 className='mr-8 text-white'>Ecommerce</h1>

        <ul className='flex space-x-4 text-white'>
            <li className='transition hover:bg-blue-600 hover:text-gray-200'><Link to='/'>Home</Link></li>
            <li className='transition hover:bg-blue-600 hover:text-gray-200'><Link to='/perfil'>Usuario</Link></li>
            <li className='transition hover:bg-blue-600 hover:text-gray-200'><Link to='/productos'>Productos</Link></li>
            
            <li className='transition hover:bg-blue-600 hover:text-gray-200'><Link to='/carrito'>Carrito</Link></li>
            <li className='transition hover:bg-blue-600 hover:text-gray-200'><Link to='/perfil'>Usuario</Link></li>
            <li>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 12a2 2 0 100-4 2 2 0 000 4zM21 21l-6-6"></path>
                    </svg>
                    <input type="text" placeholder="Buscar" className="bg-transparent border-b border-white focus:outline-none text-white" />
                </div>
            </li>
        </ul>
    </div>
</nav>

    </div>
  )
}
