/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OpeningAbout from "../components/OpeningAbout";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About () {
    const navigasi = useNavigate()
    return (
        <>
            <div className="dark:bg-footer2">
            <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%"}}
            >
                <Navbar />
                <Slider />
                <OpeningAbout />
                
                <Footer />
            </motion.div>
            </div>
        
        </>
    )
}