import React from 'react'

import { NewsItem } from '../NewsItem'
import { news } from '../../utils'
import '../../../css/components/main-news.css'

export const MainNews = () => {
  const principalNews = news.filter(newItem => newItem.principal)
  return (
    <section className="main__news">
      <ul>
        {
          principalNews.map((newItem, index) => <NewsItem key={index} {...newItem} />)
        }
      </ul>
    </section>
  )
}
