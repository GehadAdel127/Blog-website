import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ScrollButton from './Components/ScrollButton'
import About from './Pages/About'
import BlogDetails from './Pages/BlogDetails'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Create from './Pages/Create'
import Home from './Pages/Home'
import LogPages from './Pages/LogPages'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<LogPages/>}/>
          <Route path = '/blogs' element = {<Blogs/>}/>
          <Route path = '/create' element = {<Create />}/>
          <Route path='/blog/:id' element = {<BlogDetails/>} />
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
        <ScrollButton/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App