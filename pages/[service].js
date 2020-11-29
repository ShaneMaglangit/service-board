import Head from "next/head"
import Navbar from "../components/Navbar.js"
import { useRouter } from "next/router"
import Service from "../classes/Service"
import CategoryBar from "../components/CategoryBar.js"
import ServiceOverview from "../components/ServiceOverview.js"
import ServicePricing from "../components/ServicePricing.js"
import ServiceReview from "../components/ServiceReview.js"
import { useState, useEffect } from "react"
import firebase from "firebase"
import Footer from "../components/Footer.js"
require("firebase/firestore")

const ServiceDetail = () => {
  const [service, setService] = useState(null)
  const router = useRouter()
  const db = firebase.default.firestore()

  useEffect(() => {
      if (router.asPath !== router.route && service === null) {
        db.collection("services")
          .doc(router.query.service)
          .get()
          .then(doc => {
            const data = doc.data()
            setService(new Service(doc.id, data.thumbnail, data.title, data.category, data.description, data.rating, data.estimatedCost, data.isHourly, data.location, data.provider, data.providerId))
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          })
      }
  }, [router])

  return(
    <div className="">
      <Head>
        <title>Servir</title>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto min-h-screen">
          <Navbar showSearch={true} isLight={true} />
          <CategoryBar />
          <div className="container">
            <div className="flex items-stretch mx-auto w-11/12 py-6">
                <div className="w-7/12">
                  {service !== null && <ServiceOverview service={service} /> }
                </div>
                <div className="flex flex-col pl-4 w-5/12">
                  {service !== null && <ServicePricing service={service} /> }
                  {service !== null && <ServiceReview service={service} /> }
                </div>
            </div>
          </div>
          <Footer />
      </main>
    </div>
  )
}

export default ServiceDetail
