import Head from "next/head"
import Navbar from "../components/Navbar.js"
import Chat from "../components/Chat.js"

const Inbox = () => {
    const containerStyle = {
        height: `100vh`,
        maxHeight: `100vh`
    }
    
    return(
        <div className="">
            <Head>
                <title>Inbox</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8"></meta>
            </Head>
        
            <main className="mx-auto flex flex-col" style={containerStyle}>
                <Navbar showSearch={true} isLight={true} />
                <div className="flex flex-grow overflow-hidden">
                    <Chat />
                </div>
            </main>
        </div>
    )
}

export default Inbox