import Head from "next/head"
import Navbar from "../components/Navbar.js"
import CategoryBar from "../components/CategoryBar.js"
import Filter from "../components/Filter.js"
import ServiceList from "../components/ServiceList.js"
import "firebase/auth"
import "firebase/firestore"
import { useState } from 'react'
import Footer from "../components/Footer.js"

const Listing = () => {
  const [sortType, setSortType] = useState(1)

  function setSort(sortType) {
    setSortType(sortType)
  }

  return (
    <div className="">
      <Head>
        <title>Service Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto container min-h-screen">
          <Navbar showSearch={true} isLight={true} />
          <CategoryBar />
          <Filter setSort={setSort}/>
          <ServiceList sortType={sortType}/>
          <Footer />
      </main>
    </div>
  )
}

export default Listing
