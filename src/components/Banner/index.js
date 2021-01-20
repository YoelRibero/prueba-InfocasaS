import React from 'react'

import '../../../css/components/banner.css'

export const Banner = ({ title, description, buttonText }) => (
  <div className='banner__item'>
    <div className='banner__content'>
      {title ? <h2 className='banner__title'>{ title }</h2> : <p className="banner__without--title">Banner</p>}
      {description && <p className='banner__description'>{ description }</p>}
      {buttonText && <a href='#' className='banner__button button'>{ buttonText }</a>}
    </div>
  </div>
)
