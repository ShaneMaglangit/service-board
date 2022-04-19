import Head from "next/head"
import Navbar from "../components/Navbar.js"
import {useRouter} from "next/router"
import CategoryBar from "../components/CategoryBar.js"
import ServiceOverview from "../components/ServiceOverview.js"
import ServicePricing from "../components/ServicePricing.js"
import ServiceReview from "../components/ServiceReview.js"
import {useEffect, useState} from "react"
import Footer from "../components/Footer.js"
import mockServices from "../mock/mockServices"

const ServiceDetail = () => {
    const [service, setService] = useState(null)
    const router = useRouter()

    useEffect(() => {
        if (router.asPath !== router.route && service === null) {
            setService(mockServices.find(service => service.id === router.query.service))
        }
    }, [router])

    return (
        <div className="">
            <Head>
                <title>Servir</title>
                <meta charSet="utf-8"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="mx-auto min-h-screen">
                <Navbar showSearch={true} isLight={true}/>
                <CategoryBar/>
                <div className="container">
                    <div className="flex flex-col md:flex-row items-stretch mx-auto w-11/12 py-6">
                        <div className="w-full md:w-7/12">
                            {service !== null && <ServiceOverview service={service}/>}
                        </div>
                        <div className="flex flex-col mt-4 md:mt-0 md:pl-4 w-full md:w-5/12">
                            {service !== null && <ServicePricing service={service}/>}
                            {service !== null && <ServiceReview service={service}/>}
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    )
}

export default ServiceDetail
