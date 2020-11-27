const NavbarItems = ({isLight}) => {
    return (
        <div className={`${isLight ? "text-primary" : "text-white"} text-sm md:flex-grow md:text-right font-display font-semibold`}>
            <a href="/listing" className="mx-2">Explore</a>
            <a href="/" className="mx-2">Contact</a>
            <a href="/" className="mx-2">
                <span className={`${isLight ? "bg-primary text-white" : "border-2 hover:bg-accent hover:border-transparent hover:shadow-md"} px-4 py-2 rounded transition duration-150 ease-in`}>Join</span>
            </a>
        </div>
    )
}

export default NavbarItems