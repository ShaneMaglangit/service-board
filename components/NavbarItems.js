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
        <div className={`${isLight ? "text-primary" : "text-white"} text-sm md:flex-grow md:text-right font-display flex items-center font-semibold`}>
            <Link href="/listing"><a className="mx-2 focus:outline-none">Explore</a></Link>
            <Link href="/inbox"><a className={`${signedIn ? "inline-block" : "hidden"} mx-2 focus:outline-none`}>Messages</a></Link>
            <Link href="/authentication">
                <a className={`${isLight ? "bg-primary text-white" : "border-2 hover:bg-accent hover:border-transparent hover:shadow-md"} ${signedIn ? "hidden" : "inline-block"} mx-2 px-4 py-2 rounded transition duration-150 ease-in`}>Join</a>
            </Link>
            <Link href="/profile">
                <a className={`${signedIn ? "inline-block" : "hidden"} mx-2 focus:outline-none`}>Profile</a>
            </Link>
            <button onClick={() => signOut()} className={`${signedIn ? "inline-block" : "hidden"} font-semibold mx-2 focus:outline-none`}>Logout</button>
            <Link href="/input">
                <a className={`${isLight ? "bg-primary text-white" : "border-2 hover:bg-accent hover:border-transparent hover:shadow-md"} ${signedIn ? "inline-block" : "hidden"} mx-2 px-4 py-2 rounded transition duration-150 ease-in`}>Offer Service</a>
            </Link>
        </div>
    )
}

export default NavbarItems