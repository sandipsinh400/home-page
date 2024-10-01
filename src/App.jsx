import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Cardabout from './pages/Cardabout'
import Ourservicecard from './pages/Ourservicecard'
import ValidForm from './pages/ValidForm'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

function App() {

  return (
    <>
      <Header/>
      <Cardabout/>
      <Ourservicecard/>
      <ValidForm/>
      <Footer/>
    </>
  )
}

export default App
