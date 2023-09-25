import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OpeningListProduk from "../components/OpeningListProduk";
import Produk from "../components/Produk";
import Slider from "../components/Slider";
import { motion } from "framer-motion";

export default function Producs() {
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
                    <OpeningListProduk />
                    <Produk />
                    <Footer />
                </motion.div>
            </div>
        </>
    )
}