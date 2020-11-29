import Link from 'next/link'
import firebase from "firebase"
import { useState } from "react"

const NavbarItems = ({isLight}) => {
    const[signedIn, setIsSignedIn] = useState(false)

    firebase.default.auth().onAuthStateChanged(function(user) {
        if(user) {
            setIsSignedIn(true)
        }
    })

    function signOut() {
        firebase.default.auth().signOut().then(
            function() {
                window.location.href="/"
            }).catch(function(error) {
                alert("An error has occured")
            }
        )
    }

    return (
        <div className={`${isLight ? "text-primary" : "text-white"} text-sm flex flex-col md:flex-row items-left md:items-center md:flex-grow mt-2 md:mt-0 md:text-right font-display font-semibold px-4`}>
            <Link href="/listing"><a onClick={() => window.location.href="/listing"} className="mt-2 mx-2 focus:outline-none">Explore</a></Link>
            <Link href="/inbox"><a className={`${signedIn ? "inline-block" : "hidden"} mt-2 mx-2 focus:outline-none`}>Messages</a></Link>
            <Link href="/authentication">
                <a className={`${isLight ? "bg-primary text-white" : "border-2 hover:bg-accent hover:border-transparent hover:shadow-md mt-2"} ${signedIn ? "hidden" : "inline-block"} mx-2 px-4 py-2 rounded transition duration-150 ease-in`}>Join</a>
            </Link>
            <button onClick={() => signOut()} className={`${signedIn ? "inline-block" : "hidden"} font-semibold mx-2 text-left md:text-center focus:outline-none mt-2`}>Logout</button>
            <Link href="/create">
                <a className={`${isLight ? "md:bg-primary md:text-white md:mt-0" : "md:border-2 hover:bg-accent hover:border-transparent hover:shadow-md"} ${signedIn ? "inline-block" : "hidden"} mt-2 mx-2 md:px-4 md:py-2 rounded transition duration-150 ease-in text-left md:text-center`}>Offer Service</a>
            </Link>
        </div>
    )
}

export default NavbarItems