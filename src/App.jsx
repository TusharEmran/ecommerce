import React from 'react'
import Hero from './components/Hero'
import Manu from './components/Manu'
import WhereToBuy from './components/WhereToBuy'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero/>
      <Manu/>
      <WhereToBuy/>
      <Footer/>
    </main>
  )
}

export default App