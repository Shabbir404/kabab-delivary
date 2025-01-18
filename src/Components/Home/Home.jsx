import React from 'react';
import '../../Css/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <div className='mt-28'>
                    <div className="flex flex-col ">
                        <h1 className="permanent-marker-regular-font text-white text-5xl leading-tight">
                            Not Just a Food!
                            <br />
                            It's an experience!
                            <br />
                            Fresh, fast..
                            <br />
                            <span className="gradient-text">delicious!</span>
                            <div className='mt-5 mb-3'>
                                <p className='open-sans-font text-xl'>We are helping you
                                    to get fresh food in quickly and easily.</p>
                            </div>
                        </h1>
                        <div className='mt-5'>
                            <Link className='bg-red-700 p-4 pl-10 pr-10 rounded-full text-white mt-5'>Menu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;