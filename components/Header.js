import Navbar from "./Navbar.js"
import Search from "./Search.js"

const headerStyle = {
    backgroundImage: `url("./header.png")`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
}

const searchStyle = {
    enableBackground: "new 0 0 56.966 56.966",
}

const Header = () => {
    return(
        <div className="flex h-screen relative" style={headerStyle}>
            <Navbar position="absolute top-0" showSearch={false} isLight={false} />
            <div className="flex-shrink h-full mx-auto flex flex-col items-center justify-center">
                {/* Header text */}
                <h1 className="text-3xl text-white font-extrabold font-display text-center">Enjoy the best services a the <br />comforts of your own home.</h1>
                {/* Search bar */}
                <Search classes="w-10/12 mt-4" />
            </div>
        </div>
    )
}

export default Header