import React from 'react'

import { Logo } from '../Logo'
import { Menu } from '../Menu'
import '../../../css/components/footer.css'

export const Footer = () => (
  <footer className="footer">
    <section className="footer__logo">
      <Logo />
    </section>
    <section className="footer__menu">
      <Menu />
    </section>
  </footer>
)
