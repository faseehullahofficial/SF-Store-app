import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div class="main-header">
  <h1>SF STORE</h1>

  <div class="MENU-bar">

  
    <input type="checkbox" id="menu-toggle" />


    <label for="menu-toggle" class="menu-icon">
      <i class="fa-solid fa-bars open-icon"></i>
      <i class="fa-solid fa-xmark close-icon"></i>
    </label>

    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

  </div>

  <div class="social-icons">
    <a href="#"><i class="fa-brands fa-facebook"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    <a href="#"><i class="fa-brands fa-twitter"></i></a>
  </div>
</div>
  )
}

export default Header