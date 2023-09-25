import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

export default function Pertanyaan () {

        // animasi smooth
        const [isOpen, setIsOpen] = useState(false)
        const parent = useRef(null)
      
        useEffect(() => {
          parent.current && autoAnimate(parent.current)
        }, [parent])
      
        const reveal = () => setIsOpen(!isOpen)

    return (
        <>

            <div className=" mt-10 mx-2">
            <p className="font-bold text-xl lg:text-2xl py-4 px-4 pb-8 hover:underline text-center dark:text-white" onClick={reveal}>
                Pertanyaan - Pertanyaan Konsumen <br />
                <span className="font-medium text-lg lg:text-xl"> (click me)</span> 
            </p>
                <div ref={parent}>
                {isOpen && (
                    <div className="flex flex-wrap lg:justify-evenly items-stretch">

                        <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-primary2 dark:bg-black dark:text-white">
                            <div className="flex flex-row ">
                            <p className="font-semibold text-sm lg:text-xl pr-1">
                                1.
                            </p>
                            <p className="font-semibold text-sm lg:text-xl">
                                Lorem ipsum dolor sit.
                            </p>
                            </div>
                            <div className="px-4 font-normal text-xs lg:text-lg">
                                Lorem ipsum dolor sit.
                            <img alt="" className='pt-3 w-10 lg:w-28' />
                            </div>
                        </div>

                        <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-primary2 dark:bg-black dark:text-white">
                            <div className="flex flex-row ">
                            <p className="font-semibold text-sm lg:text-xl pr-1">
                                1.
                            </p>
                            <p className="font-semibold text-sm lg:text-xl">
                                Lorem ipsum dolor sit.
                            </p>
                            </div>
                            <div className="px-4 font-normal text-xs lg:text-lg">
                                Lorem ipsum dolor sit.
                            <img alt="" className='pt-3 w-10 lg:w-28' />
                            </div>
                        </div>

                        <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-primary2 dark:bg-black dark:text-white">
                            <div className="flex flex-row ">
                            <p className="font-semibold text-sm lg:text-xl pr-1">
                                1.
                            </p>
                            <p className="font-semibold text-sm lg:text-xl">
                                Lorem ipsum dolor sit.
                            </p>
                            </div>
                            <div className="px-4 font-normal text-xs lg:text-lg">
                                Lorem ipsum dolor sit.
                            <img alt="" className='pt-3 w-10 lg:w-28' />
                            </div>
                        </div>

                        <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-primary2 dark:bg-black dark:text-white">
                            <div className="flex flex-row ">
                            <p className="font-semibold text-sm lg:text-xl pr-1">
                                1.
                            </p>
                            <p className="font-semibold text-sm lg:text-xl">
                                Lorem ipsum dolor sit.
                            </p>
                            </div>
                            <div className="px-4 font-normal text-xs lg:text-lg">
                                Lorem ipsum dolor sit.
                            <img alt="" className='pt-3 w-10 lg:w-28' />
                            </div>
                        </div>

                    </div>
                )}
                </div>
            </div>

        </>
    )
}