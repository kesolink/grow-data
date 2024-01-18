import React from 'react'
import Analytics from "./components/Analytics"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletters from "./components/Newsletters"


function App() {
  

  return (
    <div className=""> 
    <Navbar />
    <Hero />
    <Analytics />
    <Newsletters />
    <Card />
    <Footer />
    </div>
  )
}

export default App
