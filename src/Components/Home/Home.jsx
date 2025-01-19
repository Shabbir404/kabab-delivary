import React from 'react';
import '../../Css/Home.css'
import { Link } from 'react-router-dom';
import kebabImg from '../../Images/kebab.jpeg'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Home = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto mr-5'>
                <div className=''>
                    <div className='mt-10 md:mt-28 md:flex md:justify-between'>
                        <div className="text-center md:text-left md:flex md:flex-col">
                            <h1 className="permanent-marker-regular-font text-white text-5xl leading-tight">
                                Not Just a Food!
                                <br />
                                It's an experience!
                                <br />
                                Fresh, fast..
                                <br />
                                <span className="gradient-text">delicious!</span>
                                <div className="mt-5 mb-3">
                                    <p className="open-sans-font text-xl">
                                        We are helping you to get fresh food in quickly and easily.
                                    </p>
                                </div>
                            </h1>
                            <div className="mt-10 md:mt-5 md:flex">
                                <Link href="#" className="hover:bg-red-600 bg-red-700 px-10 py-4 rounded-full text-white mt-5">
                                    Menu  ☰
                                </Link>
                                <Link
                                    to="https://play.google.com/store/apps/details?id=com.restaumatic.delta_kebab_starogard_gdanski_production"
                                    target="_blank"
                                    className="hover:text-green-400 text-center md:flex hidden
                                    border-2 border-white md:ml-2 px-10 py-4 rounded-full text-white mt-5">
                                    <IoLogoGooglePlaystore className='mr-2 text-2xl  ml-10 md:ml-0 '></IoLogoGooglePlaystore>Download from Play store
                                </Link>
                            </div>
                        </div>

                        <div className='hidden md:block md:ml-80'>
                            <img className='md:w-5/6 md:h-4/6 md:mb-20 md:border-2 border-yellow-600 rounded-md' src={kebabImg} alt="" />
                        </div>

                    </div>
                </div>
            </div >

        </div>
    );
};

export default Home;