import React, { useState } from "react"
import NavbarItems from "./NavbarItems.js"
import Search from "./Search.js"
import Link from 'next/link'

const Navbar = ({position, isLight, showSearch}) => {
    // useState to expand or hide the navigation menu for mobile
    const [isExpanded, toggleExpansion] = useState(false)
    return (
            <div className={`w-full z-50 ${position}`}>
                <nav className="container mx-auto flex items-center justify-between w-full px-6 pt-6 pb-2">
                    {/* Site logo */}
                    <Link href="/">
                        <a className={`${isLight ? "text-primary" : "text-white"} flex items-center flex-shrink-0 mr-6`}>
                            <span className="font-body font-bold text-xl tracking-tight">Site Title</span>
                        </a>
                    </Link>
                    {/* Search bar */}
                    {showSearch === true && <Search classes="flex-grow shadow"/>}
                    {/* Hamburger icon */}
                    <div className="block md:hidden" onClick={() => toggleExpansion(!isExpanded)} onKeyPress={() => toggleExpansion(!isExpanded)} role="button" tabIndex={0}>
                        <button className={`${isLight ? "text-primary border-primary" : "text-white border-white"} flex items-center px-3 py-2 border rounded focus:outline-none`}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    {/* Wrapper for the navigation items */}
                    <div id="menu-items" className={`${ isExpanded ? `block` : `hidden`} w-full pl-4 md:flex md:items-center md:w-auto md:block`}>
                        <NavbarItems isLight={isLight} />
                    </div>
                </nav>
            </div>
    )
}

export default Navbar