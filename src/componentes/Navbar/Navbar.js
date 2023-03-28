import CartWidget from '../CartWidget/CartWidget'
import React from 'react'
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Inicio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active"href="#">Perfumes</a>
          <a class="nav-link active" href="#">Ropa</a>
          <a class="nav-link active" href="#">Zapatillas</a>
        </div>
      </div>
    </div>
    <CartWidget/>
  </nav>
  )
}
export default Navbar