import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboardpage from './Dashboardpage'
import Employees from './Employees'
import About from './About'

export default function BodySection() {
  return (
    <div><div className="container-fluid">

   
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        

      <Routes> 
          <Route path="/dashboard" element ={<Dashboardpage/>}></Route>
          <Route path="/employees" element ={<Employees/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
       </Routes>  
       
    </div>

   

</div></div>
  )
}
