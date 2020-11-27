import Navbar from "./Navbar.js"

const headerStyle = {
    backgroundImage: `url("./header.png")`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
}

const Header = () => {
    return(
        <>
            <div className="h-screen" style={headerStyle}>
                <Navbar />
            </div>
        </>
    )
}

export default Header