import React from 'react'
import { Route, Routes } from 'react-router'
import Lamding from './screens/Lamding'
import Home from './screens/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Lamding/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App