/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import blue from '/blue.png';

export default function Pembuka () {

    useEffect (() => {
        Aos.init({
            // once: true,
            duration: 2000,
        })
    }, [])

    return (
        <>
            <div className="dark:text-white">
                <div data-aos="zoom-in" className="w-1/2 m-auto mt-24">
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>

                <div className="flex flex-wrap justify-evenly items-center flex-row mt-24">
                    <div data-aos="fade-right" className="w-1/3">
                        <img src={blue} alt="" />
                    </div>
                    <div data-aos="fade-left" className="w-1/3 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-evenly items-center flex-row mt-24">
                    <div data-aos="fade-right" className="w-1/3 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="w-1/3">
                        <img src={blue} alt="" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-evenly items-center flex-row mt-24">
                    <div data-aos="fade-right" className="w-1/3">
                        <img src={blue} alt="" />
                    </div>
                    <div data-aos="fade-left" className="w-1/3 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}