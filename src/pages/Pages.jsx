import React from 'react'
import Home from './Home'
import  Cuisine  from './Cuisine'
import Searched from './Searched'
import {Route,Routes} from 'react-router-dom'


export const Pages = () => {
  return (
    
      <Routes>
       <Route path='/' element={ <Home/>}></Route>
       <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
       <Route path='/searched/:search' element={<Searched></Searched>}></Route>
    </Routes>
   
  )
   
    
}
