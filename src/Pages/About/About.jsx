import storeImg from '../../Images/store.jpg'
import '../../Css/About.css'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <div className=' bg-black'>
                <div className='w-11/12 md:w-10/12  mx-auto p-6 '>
                    <div className='md:flex justify-between text-center'>
                        <div>
                            <img className='border-2 border-red-600 rounded-md' src={storeImg} alt="" />
                        </div>
                        <div className='border-2 border-white p-8 md:w-6/12 mt-3 md:mt-0 flex flex-col justify-between'>
                            <h1 className='permanent-marker-regular-font text-yellow-400 text-4xl'>Get to know us...</h1>
                            <h1 className='open-sans-font mt-4 text-white text-6xl'>Delta Kebab</h1>
                            <p className='open-sans-font-sm text-2xl mt-10 text-white leading-loose'>
                                We offer a wide selection of delicious kebabs, made fresh daily!
                                Our professional chefs and cooks use the freshest ingredients to prepare the perfect dish just for you.
                                Order now and we will deliver it straight to your door.
                            </p>
                            <div className=" text-center md:mt-2 mt-6">
                                <Link className="bg-yellow-400  hover:bg-yellow-300 p-4 pr-10 pl-10 open-sans-font-sm text-black">Order with delivery</Link>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;