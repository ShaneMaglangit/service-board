import Service from "../classes/Service"
import VerticalServiceCard from "./VerticalServiceCard"
import Link from 'next/link'
import firebase from "firebase"
import { useState, useEffect } from "react"
require("firebase/firestore")

const ServiceList = () => {
    const[services, setServices] = useState([])

    useEffect(() => {
        if(services.length === 0) {
            const db = firebase.default.firestore()
            db.collection("services")
                .limit(24)
                .get()
                .then(snapshot => {
                    setServices(snapshot.docs.map((doc, i) => {
                        const data = doc.data()
                        return new Service(doc.id, data.thumbnail, data.title, data.category, data.description, data.rating, data.estimatedCost, data.isHourly, data.location, data.provider, data.providerId)
                    }))
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                })
        }
    }, [services])

    return(
        <section className="w-11/12 mx-auto pb-6">
            <div className="flex flex-wrap items-stretch mt-4">
                {services.map((service) => 
                    <div key={service.id} className="flex w-3/12 px-2 pb-4">
                        <VerticalServiceCard service={service} /> 
                    </div>
                )}
            </div>
            <div className="flex">
                <Link href="/">
                    <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none">Previous</a>
                </Link>
                <div className="flex-grow"></div>
                <Link href="/">
                    <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none">Next</a>
                </Link>
            </div>
        </section>
    )
}

export default ServiceList