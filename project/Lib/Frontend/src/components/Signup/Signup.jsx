import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form id="signupForm" className="flex justify-center items-center bg-customColor-home h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
                <h2 className="text-2xl font-bold text-center mb-4">SignUp Form</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        name="name"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        name="email"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        name="password"
                        placeholder="Your Password"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-green-700 hover:bg-green-800 w-full text-white py-2 px-4 rounded cursor-pointer">
                        Register
                    </button>
                </div>
                <div className="mt-4">
                    <label htmlFor="member" className="mr-2">Already have an account</label>
                    <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
                </div>
            </div>
        </form>
    );
}

export default Signup;
