import React, { useState } from "react"
import NavbarItems from "./NavbarItems.js"

const Navbar = ({position}) => {
    // useState to expand or hide the navigation menu for mobile
    const [isExpanded, toggleExpansion] = useState(false)
    return (
            <div className={`w-full z-50 ${position}`}>
                <nav className="container mx-auto flex flex-wrap items-center justify-between w-full p-6">
                    {/* Site logo */}
                    <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-body font-bold text-xl tracking-tight">Site Title</span>
                    </a>
                    {/* Hamburger icon */}
                    <div className="block md:hidden" onClick={() => toggleExpansion(!isExpanded)} onKeyPress={() => toggleExpansion(!isExpanded)} role="button" tabIndex={0}>
                        <button className="flex items-center px-3 py-2 border rounded text-primary border-primary focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    {/* Wrapper for the navigation items */}
                    <div id="menu-items" className={`${ isExpanded ? `block` : `hidden`} w-full flex-grow md:flex md:items-center md:w-auto md:block`}>
                        <NavbarItems />
                    </div>
                </nav>
            </div>
    )
}

export default Navbar