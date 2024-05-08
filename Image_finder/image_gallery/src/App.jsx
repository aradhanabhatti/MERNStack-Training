import { useState } from 'react'
import ImageViewer from './components/Image_Viewer/ImageViewer'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Navbar/Contact'
import Update from './components/Navbar/Update'
import About from './components/Navbar/About'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
    {/* <MyContext.Provider> */}
    {/* <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="./dashboard" element={<Navbar/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter> */}
    <ImageViewer/>
    {/* </MyContext.Provider> */}
    </>
  )
}
export default App
