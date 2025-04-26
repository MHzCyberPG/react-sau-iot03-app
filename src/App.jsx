import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import AboutUI from './views/AboutUI.jsx'
import Contact from './views/ContactUI.jsx'
import ShowIot from './views/ShowIOTProduct.jsx'
import IotService from './views/IOTServiceUI.jsx'
import HomeUI from './views/HomeUI.jsx'
import header from  './Components/Header.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/header' element={<header/>}></Route>
        <Route path='/' element={<HomeUI/>}/>
        <Route path='/about' element={<AboutUI/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sau/service' element={<ShowIot/>}/>
        <Route path='/wow/show' element={<IotService/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App