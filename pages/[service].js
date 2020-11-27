import Head from "next/head"
import Navbar from "./components/Navbar.js"
import { useRouter } from "next/router"
import Service from "./classes/Service"
import CategoryBar from "./components/CategoryBar.js"

const ServiceDetail = () => {
  const router = useRouter()
  const { serviceId } = router.query

  const service = new Service("1", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "1")

  return(
    <div className="">
      <Head>
        <title>Service Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto container min-h-screen">
          <Navbar showSearch={true} isLight={true} />
          <CategoryBar />
      </main>
    </div>
  )
}

export default ServiceDetail
