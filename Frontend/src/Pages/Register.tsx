import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900 ">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign Up</h1>
                        <p className="text-gray-500 dark:text-gray-400">Register a new Account</p>
                    </div>
                    <div className="m-7">
                        <form action="">
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6" >
                                <label htmlFor="type" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Account Type</label>
                                <select name="type" id="type" className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'>
                                    <option value="volvo">Actor</option>
                                    <option value="saab">Recruiter</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="button" className="w-full px-3 py-4 text-white bg-sky-300 rounded-md focus:bg-sky-500 hover:bg-sky-500 focus:outline-none">Register</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">Already have an account? <a href="/login" className="text-sky-400 focus:outline-none focus:underline focus:text-sky-500 dark:focus:border-sky-800">Login</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
