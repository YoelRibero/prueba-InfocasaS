import React from 'react'

import { Logo } from '../Logo'
import { Menu } from '../Menu'
import Lupe from '../../../img/lupa-03.png'
import '../../../css/components/header.css'

export const Header = () => (
  <header className="header">
    <section className="header__logo">
      <Logo />
    </section>
    <section className="header__menu">
      <Menu />
    </section>
    <section className="header__search">
      <div>
        <input type="text" placeholder="Search..." />
        <img src={Lupe} alt="Icon Lupe"/>
      </div>
    </section>
  </header>
)
