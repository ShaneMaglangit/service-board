import Head from "next/head"
import Hero from "./components/Hero.js"

const Index = () => (
  <div className="container">
    <Head>
      <title>Service Board</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container">
      <Hero />
    </main>
  </div>
)

export default Index
