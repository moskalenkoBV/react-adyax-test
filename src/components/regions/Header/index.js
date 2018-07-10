import React from 'react'
import logo from './logo.png'

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <a href="https://www.adyax.com/">
        <picture>
          <img src={logo} />
        </picture>
      </a>
    </div>
    <h1 className="header__title">React/redux application</h1>
  </div>
)

export default Header