import React from 'react'

import { NewsItem } from '../NewsItem'
import { news } from '../../utils'
import '../../../css/components/secondary-news.css'

export const SecondaryNews = () => {
  const secondaryNews = news.filter(newsItem => !newsItem.principal)
  return (
    <section className='secondary__news'>
      <ul>
        {
          secondaryNews.map((newsItem, index) => <NewsItem key={index} {...newsItem} />)
        }
      </ul>
    </section>
  )
}
