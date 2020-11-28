import Link from "next/link"

const Footer = () => {
    return(
        <div className="flex justify-between items-center px-12 py-4 bg-black">
            <Link href="/">
                <a className="flex items-center flex-shrink-0 mr-6 focus:outline-none">
                    <span className="font-display text-white font-bold text-base tracking-tight">Site Title</span>
                </a>
            </Link>
            <p className="text-white text-xs font-body">Copyright © 2020 codeJAMS. All rights reserved.</p>
        </div>
    )
}

export default Footer