import Navbar from "./Navbar.js"

const heroStyle = {
    backgroundImage: `url("./hero-background.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const Hero = () => {
    return(
        <div className="h-screen w-screen" style={heroStyle}>
            <Navbar />
        </div>
    )
}

export default Hero