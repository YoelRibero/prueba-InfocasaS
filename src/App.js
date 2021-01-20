import React from 'react'

import { Header } from './components/Header'
import { MainBanner } from './components/MainBanner'
import { MainNews } from './components/MainNews'
import { SecondaryNews } from './components/SecondaryNews'
import { Aside } from './components/Aside'
import { Footer } from './components/Footer'

export const App = () => (
  <>
    <Header />
    <MainBanner />
    <main className="content">
      <section className="content__news">
        <MainNews />
        <SecondaryNews />
      </section>
      <Aside />
    </main>
    <Footer />
  </>
);
