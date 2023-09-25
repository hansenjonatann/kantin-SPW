/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';

export default function Login() {
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

                <div className="pt-7 pb-7 mt-3 w-full">
                    <div className="lg:w-1/3 m-auto bg-primary dark:text-white dark:bg-black">
                    <p className="font-bold px-4 pt-3 text-xl text-center lg:text-2xl mb-3 ">
                        Hello, Admin 🖐️
                    </p>
                    <p className="font-bold px-12 pt-3 text-xs lg:text-2xl mb-3 ">
                        untuk mengakses halaman admin, diperlukan login terlebih dahulu.
                    </p>
                        <div className="flex justify-center">
                            <div className="px-4 py-4">
                                <p className=" font-semibold text-lg lg:text-x pb-4">
                                Username :
                                </p>
                                <input type="text" className="w-72 h-11 text-lg dark:bg-footer2"/>

                                <p className=" font-semibold text-lg lg:text-x py-4">
                                Password :
                                </p>
                                <input type="text" className="w-72 h-11 text-lg dark:bg-footer2"/> <br />
                                <button onClick={() => navigasi('/admin')} className="px-4 py-2 mt-5 bg-green-900 hover:bg-green-500 dark:bg-green-500 text-white dark:hover:bg-green-900">Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                </motion.div>
            </div>
        </>
    )
}