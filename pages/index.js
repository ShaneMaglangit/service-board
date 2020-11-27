import Head from "next/head"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import CategoryBar from "./components/CategoryBar.js"

const Index = () => (
  <div className="container">
    <Head>
      <title>Service Board</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container min-h-screen">
      <Header />
      <CategoryBar />
    </main>
  </div>
)

export default Index
