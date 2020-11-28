import Head from "next/head"
import Navbar from "../components/Navbar.js"
import Header from "../components/Header.js"
import CategoryBar from "../components/CategoryBar.js"
import FeaturedServices from "../components/FeaturedServices.js"

const Index = () => (
  <div className="">
    <Head>
      <title>Service Board</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="mx-auto container min-h-screen">
      <Header />
      <CategoryBar />
      <FeaturedServices />
    </main>
  </div>
)

export default Index
