/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';
import { useNavigate } from 'react-router-dom';
import menu from '/menu.svg';
import logo from '/logo-smk.png';
import night from '/night-mode.png';
import light from '/day-mode.png';

export default function Navbar() {

    // routing
    const navigasi = useNavigate()

    // menu-navbar
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleNavbar = () => {
    //     setIsOpen(!isOpen);
    //   };

    // animasi smooth
      const [isOpen, setIsOpen] = useState(false)
      const parent = useRef(null)
    
      useEffect(() => {
        parent.current && autoAnimate(parent.current)
      }, [parent])
    
      const reveal = () => setIsOpen(!isOpen)

    // darkmode
    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        if (value == "dark") {
            document.querySelector('html').classList.remove('light')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }

    return (
        <>
            

                <nav className="sticky top-0 z-30 bg-primary dark:bg-footer lg:bg-white px-4 py-4 lg:px-5 lg:py-5">
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <div className="flex flex-shrink-0 items-center lg:hidden">
                            <a href="https://www.instagram.com/smkpertiwikng/">
                                <img src={logo} className="h-14 w-auto" alt="buat logo"/>
                            </a>
                        </div>
                        <div className="font-bold text-2xl hidden lg:block dark:text-white">
                            Smk <span className="text-primary">Pertiwi</span> Kuningan
                        </div>
                        {/* end logo */}
                        <div className="hidden lg:flex lg:flex-row lg:justify-between">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a onClick={() => navigasi('/')} className="hover:bg-primary hover:text-white dark:text-white rounded-md px-3 py-2 text-xl font-medium">Home</a>
                            <a href="https://www.instagram.com/smkpertiwikng/" className="hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">Sosial Media</a>
                            <a onClick={() => navigasi('/producs')} className="hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">List Produk</a>
                            <a onClick={() => navigasi('/about')} className="hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">About</a>
                            <a onClick={() => navigasi('/login')} className="hover:bg-primary dark:text-white hover:text-white rounded-md px-3 py-2 text-xl font-medium">Admin</a>
                        </div>
                        <div className="flex flex-row">
                                    <div className="">
                                        <img onClick={() => selectTheme('dark')} src={night} alt="" width={25} height={25} className='mr-4'/>
                                    </div>
                                    <div className="">
                                        <img onClick={() => selectTheme('light')} src={light} alt="" width={25} height={25} className='mr-4'/>
                                    </div>
                        </div>                  
                        <div className="flex flex-row justify-between">                           
                            <div id="hamburger-menu" className="lg:hidden" onClick={reveal}>
                                <img src={menu} alt="" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    {/* end dekdtop mode */}
                    {/* Mobile menu */}
                    <div ref={parent}>
                        {isOpen && (
                            <>
                            <div id="mobile-menu" className="mt-5 bg-white">        
                            <a onClick={() => navigasi('/')} className="hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium dark:bg-footer2 dark:text-white dark:hover:bg-black">Home</a>
                            <a href="https://www.instagram.com/smkpertiwikng/" className="hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium dark:bg-footer2 dark:text-white dark:hover:bg-black">Sosial Media</a>
                            <a onClick={() => navigasi('/producs')} className="hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium dark:bg-footer2 dark:text-white dark:hover:bg-black">List Produk</a>
                            <a onClick={() => navigasi('/about')} className="hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium dark:bg-footer2 dark:text-white dark:hover:bg-black">About</a>
                            <a onClick={() => navigasi('/login')} className="hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium dark:bg-footer2 dark:text-white dark:hover:bg-black">Admin</a>
                            </div>
                            
                            </>
                        )}
                    </div>
                    
                </nav>


        </>
    )
}