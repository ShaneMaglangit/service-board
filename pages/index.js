import Head from "next/head"
import Navbar from "../components/Navbar.js"
import Header from "../components/Header.js"
import CategoryBar from "../components/CategoryBar.js"
import FeaturedServices from "../components/FeaturedServices.js"
import Footer from "../components/Footer.js"

const Index = () => (
  <div className="">
    <Head>
      <title>Servir</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8"></meta>
    </Head>

    <main className="mx-auto min-h-screen">
      <Header />
      <CategoryBar />
      <FeaturedServices />
      <Footer />
    </main>
  </div>
)

export default Index
