import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Test from './Pages/Test/Test'
import UseEffect from './Pages/UseEffect/UseEffect'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home />  } />
      <Route path="/about" element ={<About/>} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/test' element = {<Test />} />
      <Route path='/useEffect' element= {<UseEffect />} />
    </Routes>

    </BrowserRouter>

  )
}
 
export default App
