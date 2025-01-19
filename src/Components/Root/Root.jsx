import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import '../../Css/Root.css'
const Root = () => {
    return (
        <div className='overleyImg'>
            <div className='md:w-10/12 w-11/12 mx-auto md:mt-16 mt-8'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;