import React, { useState } from 'react'
import Home from './Home/Home'
import { Routes,Route } from 'react-router-dom'
import Books from './Components/Books'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import About from './Components/About'

const App = () => {
  const [clicked,setClicked] = useState("home")
  return (
    <div>
      <Navbar setClicked={setClicked} clicked={clicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books setClicked={setClicked}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
