import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ServicesWrapper from './components/Navbar/ServicesWrapper'

function App() {
  

  return (
    <>
      <Navbar />
      <ServicesWrapper />
    </>
  )
}

export default App
