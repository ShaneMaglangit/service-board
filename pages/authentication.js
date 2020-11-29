import Head from "next/head"
import Navbar from "../components/Navbar.js"
import AuthenticationForm from "../components/AuthenticationForm.js"
import firebase from "firebase/app"
import Footer from "../components/Footer.js"

const Authentication = () => (
  <div className="">
    <Head>
      <title>Join Us</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8"></meta>
    </Head>

    <main className="mx-auto min-h-screen">
        <Navbar position="absolute top-0" showSearch={false} isLight={true} />
        <AuthenticationForm />
        <Footer />
    </main>
  </div>
)

export default Authentication
