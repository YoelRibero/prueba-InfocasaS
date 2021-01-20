import React from 'react'

import '../../../css/components/news.css'

export const NewsItem = ({ title, description, buttonText, image }) => (
  <li className="news__item">
    {
      image === 'default' &&
        <div className="news__image">
          <figure className="without__image"></figure>
        </div>
    }
    <div className="news__info">
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
      {buttonText && <a href="#">{buttonText}</a>}
    </div>
  </li>
);
