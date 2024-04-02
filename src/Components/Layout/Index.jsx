import React, { useState } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../../page/homePage/Homepage'
import About from '../../page/about/About'
import Login from '../../page/login/Login'
import SingUp from '../../page/singUp/SingUp'



export default function Index() {
    const [del, setDel] = useState(true)
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/"
                    element={<Home del={del} setDel={setDel} />} />
                <Route path="/about"
                    element={<About />} />
                <Route path="/login"
                    element={<Login del={del} setDel={setDel} />} />
                <Route path="/singUp"
                    element={<SingUp del={del} setDel={setDel} />} />
            </Routes>
            {del && <Footer />}
        </>
    )
}
