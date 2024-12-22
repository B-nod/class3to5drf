import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/usercomponents/Layout'
import Hompage from './pages/userpage/Hompage'
import AdminHeader from './components/admincomponents/AdminHeader'
import AdminDashboard from './pages/adminpages/AdminDashboard'
import AddBlog from './pages/adminpages/AddBlog'
import Register from './pages/userpage/Register'
import Login from './pages/userpage/Login'

const Myroutes = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* normal user */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Hompage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            

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