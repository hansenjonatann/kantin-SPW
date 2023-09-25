/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import OpeningAdmin from "../components/OpeningAdmin";

export default function Admin() {
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
                    <OpeningAdmin />
                    <Footer />

                </motion.div>
            </div>
        
        </>
    )
}