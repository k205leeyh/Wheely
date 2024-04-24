import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/wheely-logo.png';

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-customColor-home">
            <div className="text-center font-sans">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Hi THERE!
                </h4>
                <h5 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    Are you
                </h5>
                <div className='py-6 md:py-6 text-center'>
                    <img src={Logo} alt="logo" className="w-96 md:w-120 lg:w-140 h-auto mx-auto" />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold py-4 md:py-4 max-w-lg lg:max-w-4xl mx-auto">
                    to find a place?
                </p>
                <div className="py-2 md:py-0">
                    <Link to="/login">
                        <button className="bg-green-700 hover:bg-green-800 text-white text-sm md:text-base lg:text-sm font-bold py-2 md:py-3 lg:py-2 px-6 md:px-8 lg:px-8">
                            START
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
