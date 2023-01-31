import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        
        </Routes>
      
    </div>
  )
}

export default AllRoutes
