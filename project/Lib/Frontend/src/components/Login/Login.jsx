import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/map");
    };

    return (
        <>
            <form id="LoginForm" className="flex justify-center items-center h-screen bg-customColor-home">
                <div className="bg-white p-8 rounded-lg shadow-lg w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
                    <h2 className="text-2xl font-bold text-center mb-4">SignIn Form</h2>
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
                    <div className="flex justify-center">
                        <button type="button" onClick={handleLogin} className="bg-green-700 hover:bg-green-800 w-full text-white py-2 px-4 rounded cursor-pointer">
                            Login
                        </button>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="member" className="mr-2">Don't have an account</label>
                        <Link to="/signup" className="text-blue-500 hover:text-blue-700">Register</Link>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;
