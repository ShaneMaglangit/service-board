import Link from "next/link"

const Footer = () => {
    return (
        <div className="px-12 py-4 bg-black">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link href="/">
                    <a className="flex items-center text-center mb-2 flex-shrink-0 mr-6 focus:outline-none">
                        <span className="font-display text-white font-bold text-base tracking-tight">Servir</span>
                    </a>
                </Link>
                <p className="text-white text-center text-xs font-body">Copyright © 2020 codeJAMS. All rights
                    reserved.</p>
            </div>
        </div>
    )
}

export default Footer