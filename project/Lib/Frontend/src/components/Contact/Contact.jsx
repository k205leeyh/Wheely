import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/contact.png';

const Contact = () => {
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
        <div className="flex flex-col min-h-screen bg-customColor-navbar">
            <div className="flex justify-end px-4 md:px-10 lg:px-20 py-4">
                <div className="space-x-4">
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className="text-white hover:text-customColor-text px-4 py-2 rounded-md text-sm md:text-lg lg:text-xl font-bold"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-grow mx-auto px-10 py-5">
                <div className="md:w-1/2 pr-2 pl-10 order-2 md:order-1">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block">Name</label>
                            <input type="text" id="name" className="border border-gray-900 px-3 py-2 w-full sm:w-3/4 focus:outline-none" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block">Email</label>
                            <input type="email" id="email" className="border border-gray-900 px-3 py-2 w-full sm:w-3/4 focus:outline-none" />
                        </div>

                        <div>
                            <label htmlFor="desc" className="block">Message</label>
                            <textarea id="desc" className="border border-gray-900 px-3 py-2 w-full sm:w-3/4 h-32 sm:h-48 focus:outline-none"></textarea>
                        </div>

                        <div>
                            <button className="bg-green-700 hover:bg-green-800 text-white text-sm md:text-base lg:text-sm font-bold py-2 md:py-3 lg:py-2 px-3 sm:px-6 md:px-8 lg:px-8 w-full sm:w-3/4">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 pl-2 flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
                    <img src={Image} alt="Contact" className="w-full md:w-3/4 h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Contact;
