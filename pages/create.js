import CreateForm from '../components/CreateForm.js'
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import Head from "next/head"

const Create = () => {
    const containerStyle = {
        height: `100vh`,
        maxHeight: `100vh`
    }

    return (
        <div className="">
            <Head>
                <title>Create Service</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta charSet="utf-8"></meta>
            </Head>

            <main className="mx-auto flex flex-col h-screen" style={containerStyle}>
                <Navbar showSearch={true} isLight={true}/>
                <div className="mx-auto container flex-1">
                    <CreateForm/>
                </div>
                <Footer/>
            </main>
        </div>
    )
}

export default Create