import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import '../../Css/Root.css'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
const Root = () => {
    return (

        <div className='overleyImg'>
            <div className='md:w-11/12 w-11/12 mx-auto md:mt-16 mt-8'>
                <Header />
                <div className="relative">
                    <Outlet />
                    <div className="  mt-12 md:-mt-40 w-screen relative left-[50%] right-[50%] -mx-[50vw]">
                        <About />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Root;