import Head from "next/head"
import Navbar from "../components/Navbar.js"
import CategoryBar from "../components/CategoryBar.js"
import Filter from "../components/Filter.js"
import ServiceList from "../components/ServiceList.js"
import "firebase/auth"
import "firebase/firestore"

const Listing = () => (
  <div className="">
    <Head>
      <title>Service Board</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="mx-auto container min-h-screen">
        <Navbar showSearch={true} isLight={true} />
        <CategoryBar />
        <Filter />
        <ServiceList />
    </main>
  </div>
)

export default Listing
