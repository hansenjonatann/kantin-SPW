/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Opening from "../components/Opening"
import Pembuka from "../components/Pembuka"
import Order from "../components/Order"
import Pertanyaan from "../components/Pertanyaan"
import Komentar from "../components/Komentar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"


export default function Home () {
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
                <Opening />
                <Pembuka />
                <Order />
                <Pertanyaan />
                <Komentar />
                <Footer />

            </motion.div>
            </div>

        </>
    )
}