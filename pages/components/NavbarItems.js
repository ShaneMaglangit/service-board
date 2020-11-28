import Link from 'next/link'

const NavbarItems = ({isLight}) => {
    return (
        <div className={`${isLight ? "text-primary" : "text-white"} text-sm md:flex-grow md:text-right font-display font-semibold`}>
            <Link href="/listing"><a className="mx-2">Explore</a></Link>
            <Link href="/"><a className="mx-2">Messages</a></Link>
            <Link href="/authentication">
                <a className={`${isLight ? "bg-primary text-white" : "border-2 hover:bg-accent hover:border-transparent hover:shadow-md"} mx-2 px-4 py-2 rounded transition duration-150 ease-in`}>Join</a>
            </Link>
        </div>
    )
}

export default NavbarItems