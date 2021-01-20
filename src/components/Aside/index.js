import React from 'react'

import { Banner } from '../Banner'
import '../../../css/components/aside.css'

export const Aside = () => (
  <aside className='aside__bar'>
    <ul>
      <Banner />
      <Banner />
      <Banner />
    </ul>
  </aside>
)
