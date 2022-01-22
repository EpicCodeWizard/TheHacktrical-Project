import React from 'react'

const NavBar = () => {
    return (
        <nav className="relative flex items-center justify-between px-2 py-3" >
            <div className="lg:flex flex-grow items-center">
                <ul className="flex">
                    <li className="nav-item">
                        <a className="px-5 py-2 flex items-center hover:opacity-75 font-bold" href="/">
                            THEHACKTRICAL
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="px-5 py-2 flex items-center hover:opacity-75" href="/jobs">
                            Jobs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="px-5 py-2 flex items-center hover:opacity-75" href="/login">
                            Log In
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="px-5 py-2 flex items-center hover:opacity-75" href="/register">
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default NavBar

