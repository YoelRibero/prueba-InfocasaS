import React, { useState } from 'react'

import { Banner } from '../Banner'
import { banners } from '../../utils'
import '../../../css/components/main-banner.css'

export const MainBanner = () => {
  const [bannerDisplay, setBannerDisplay] = useState(0)
  const banner = banners[bannerDisplay]
  const handleClick = (data) => {
    setBannerDisplay(data)
    document.querySelector('.main__banner--dots ul li.active').classList.remove('active')
    document.querySelectorAll('.main__banner--dots ul li')[data].classList.add('active')
  }
  return (
    <section className="main__banner">
      <ul>
        <Banner {...banner}/>
      </ul>
      <div className="main__banner--dots">
          <ul>
            <li className='active'>
              <a data-control='0' onClick={e => handleClick(Number(e.target.dataset.control))}></a>
            </li>
            <li>
              <a data-control='1' onClick={e => handleClick(Number(e.target.dataset.control))}></a>
            </li>
            <li>
              <a data-control='2' onClick={e => handleClick(Number(e.target.dataset.control))}></a>
            </li>
          </ul>
        </div>
    </section>
  )
}
