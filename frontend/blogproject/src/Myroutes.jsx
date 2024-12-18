import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/usercomponents/Layout'
import Hompage from './pages/userpage/Hompage'
import AdminHeader from './components/admincomponents/AdminHeader'
import AdminDashboard from './pages/adminpages/AdminDashboard'
import AddBlog from './pages/adminpages/AddBlog'

const Myroutes = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* normal user */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Hompage/>}/>

            </Route>
            <Route path='/admin/' element={<AdminHeader/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='addblog' element={<AddBlog/>}/>

            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default Myroutes