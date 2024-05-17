import React, { Component } from 'react'

import NavHeaders from '../layouts/NavHeaders'
import Productos from '../pages/Productos'

export class Home extends Component {
  render() {
    return (
      <div>Home
        <NavHeaders />
        <Productos />
      </div>
    )
  }
}

export default Home