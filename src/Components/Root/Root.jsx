import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import '../../Css/Root.css'
const Root = () => {
    return (
        <div className='overleyImg'>
            <div className='w-10/12 mx-auto mt-16'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;