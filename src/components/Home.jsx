import React from 'react'
import { NavHeaders } from '../layouts/NavHeaders'

import { Productos } from '../pages/Productos'

export const Home = () => {
  return (
    <div>
      <NavHeaders />
      
      <Productos />
    </div>
  )
}
