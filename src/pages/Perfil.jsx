import React from 'react'
import { Link } from 'react-router-dom'

export const Perfil = () => {
  return (
    <div>
        <h1>Perfil de Usuario</h1>
        <h3>Usuario: Juan</h3>

        <Link to={'/'} >Home</Link>
      </div>
  )
}
