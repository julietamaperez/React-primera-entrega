import React from 'react'
import'./NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Sabor y Aroma</h1>

        <nav>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Marcas</li>
                <li>Mayorista</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar