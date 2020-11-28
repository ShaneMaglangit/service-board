import Head from "next/head"
import Navbar from "../components/Navbar.js"
import AuthenticationForm from "../components/AuthenticationForm.js"
import firebase from "firebase/app"

const Authentication = () => (
  <div className="">
    <Head>
      <title>Service Board</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="mx-auto container min-h-screen">
        <Navbar position="absolute top-0" showSearch={false} isLight={true} />
        <AuthenticationForm />
    </main>
  </div>
)

export default Authentication
