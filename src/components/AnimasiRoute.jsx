/* eslint-disable no-unused-vars */
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';
import Home from "../pages/Home";
import Producs from "../pages/Produklist";
import About from "../pages/About";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

export default function AnimasiRoute () {
    const location = useLocation()
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/producs" element={<Producs/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/admin" element={<Admin/>} />
                </Routes>
            </AnimatePresence>
            
        </>
    );
}
