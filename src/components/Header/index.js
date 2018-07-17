import React from 'react'
import { Translate } from 'react-redux-i18n'
import logo from './logo.png'

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <a href="//adyax.com" title="Adyax">
        <img alt="Adyax Logo" src={ logo } width="202" height="66" />
      </a>
      <h1 className="header__title"><Translate value="application.title" /></h1>
    </div>
  </div>
)

export default Header