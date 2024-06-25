import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import CardDetail from './CardDetail'
import Navbar from './Navbar'
import Create from './Create'

const App = () => {
  return (
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>} exact/>
       <Route path='/posts/:id' element={<CardDetail/>}/>
       <Route path='/create' element={<Create/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App