import Head from "next/head"
import Navbar from "./components/Navbar.js"
import Chat from "./components/Chat.js"

const Inbox = () => {
    const containerStyle = {
        height: `100vh`,
        maxHeight: `100vh`
    }
    return(
        <div className="">
            <Head>
                <title>Service Board</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="mx-auto container flex flex-col" style={containerStyle}>
                <Navbar showSearch={true} isLight={true} />
                <div className="flex flex-grow overflow-hidden">
                    <Chat />
                </div>
            </main>
        </div>
    )
}

export default Inbox