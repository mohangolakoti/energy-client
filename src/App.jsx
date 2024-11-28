import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleMeter from './pages/SingleMeter'
import Dashboard from  './pages/Dashboard'
import Home from './pages/Dashboard'
import Data from './pages/Data'

const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Dashboard />} />
       <Route path='/SingleMeter/:id' element={<SingleMeter/>} />
       <Route path="/sensordata" element={<Data/>}/>
      </Routes>
    </div>
  )
}

export default App