import { useState } from 'react';
import Logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
import '../../Css/Header.css'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <div className=''>
                <nav className="w-11/12 mx-auto">
                    <div className=" px-4">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="flex items-center">
                                <img className="size-24" src={Logo} alt="Logo" />
                            </div>
                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center mx-auto text-xl space-x-8 menu-font">
                                <Link to="/Start" className="text-white hover:text-blue-600 transition duration-300">Start</Link>
                                <Link to="/menu" className="text-white hover:text-blue-600 transition duration-300">Menu</Link>
                                <Link to="/promotions" className="text-white hover:text-blue-600 transition duration-300">Promotions</Link>
                                <Link to="/delivery" className="text-white hover:text-blue-600 transition duration-300">Delivery</Link>
                                <Link to="/contact" className="text-white hover:text-blue-600 transition duration-300">Contact</Link>
                            </div>
                            <div>
                                <Link className='bg-green-600 rounded-xl p-2 mt-2 text-white'>Order Now</Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden flex items-center">
                                <button
                                    className="outline-none text-white mobile-menu-button p-2"
                                    onClick={toggleMenu}
                                >
                                    <div className="w-6 h-4 flex flex-col justify-between">
                                        <span className={`bg-white h-0.5 w-full transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                        <span className={`bg-white h-0.5 w-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                        <span className={`bg-white h-0.5 w-full transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden mt-10 rounded-md">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                                <Link to="/menu" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">Menu</Link>
                                <Link to="/promotions" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">Promotions</Link>
                                <Link to="/delivery" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">Delivery</Link>
                                <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>

        </div>
    );
};

export default Header;