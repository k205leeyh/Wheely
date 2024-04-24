import React from "react";
import { Link } from 'react-router-dom';
import { BsArrowLeftRight } from "react-icons/bs";
import Logo from '../../assets/images/wheely-icon.png';
import image from '../../assets/images/map.png';
import arrow from '../../assets/images/arrow.png';
import polygon from '../../assets/images/polygon.png';

const Map = () => {
    const navigation = [
        {
            name: "Map",
            href: "/map",
        },
        {
            name: "News & Press",
            href: "/news",
        },
        {
            name: "Contact Us",
            href: "/contact",
        },
    ];

    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-customColor-navbar p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-12 w-auto ml-5" />
                    </div>

                    <div className="flex space-x-4 pr-8">
                        {navigation.map((item, index) => (
                            <Link
                                key={index}
                                to={item.href}
                                className="text-white hover:text-customColor-text px-10 py-2 rounded-md text-lg font-bold"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="flex">
                <div className="w-5/6 p-12 relative">
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center">
                            <p className="border border-black p-2 w-full sm:w-full lg:w-full h-10 flex items-center justify-center text-base font-normal">
                                Times Sq-42nd
                            </p>
                            <BsArrowLeftRight className="text-xl m-3 w-full sm:w-full lg:w-full cursor-pointer" />
                            <p className="border border-black p-2 w-full sm:w-full lg:w-full h-10 flex items-center justify-center text-base font-normal">
                                137 St-City College
                            </p>
                        </div>

                        <div className="relative">
                            <img src={image} alt="map" className="w-full h-80" />
                            <div className="absolute top-2 left-80">
                                <img src={polygon} alt="icon" className="w-auto h-8" />
                            </div>
                            <div className="absolute top-12 left-36">
                                <img src={arrow} alt="icon" className="w-48 h-56" />
                            </div>
                            <div className="absolute top-56 left-32">
                                <img src={polygon} alt="icon" className="w-auto h-8" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-full bg-gray-200 h-32">
                        <h4 className="text-lg font-bold pt-10 pl-2">Suggested Routes</h4>
                    </div>
                    <div className="p-2 border-l border-gray-300">
                        <h6 className="text-base font-bold">35 min</h6>
                        <p className="text base font-medium">1 &gt; 2</p>
                        <p className="text-sm pt-2">Times Sq-42nd: Wheelchair-accessible entrance <br />
                            137 St-City College: Accessible entrance
                        </p>
                    </div>

                    <hr />

                    <div className="p-2 border-l border-gray-300">
                        <h6 className="text-base font-bold">45 min</h6>
                        <p className="text base font-medium">1</p>
                        <p className="text-sm pt-2">Times Sq-42nd: Wheelchair-accessible entrance <br />
                            137 St-City College: Accessible entrance
                        </p>
                    </div>
                    <div className="w-full bg-gray-200 h-32">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
