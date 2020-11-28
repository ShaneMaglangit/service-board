import Service from "../../classes/Service"
import HorizontalServiceCard from "./HorizontalServiceCard"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import firebase from "firebase"
require("firebase/firestore")

const FeaturedServices = () => {
    const[services, setServices] = useState([])

    useEffect(() => {
        if(services.length === 0) {
            const db = firebase.default.firestore()
            db.collection("services")
                .where("featured", "==", true)
                .orderBy("rating", "desc")
                .limit(6)
                .get()
                .then(snapshot => {
                    setServices(snapshot.docs.map((doc) => {
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
        <section className="w-10/12 mx-auto py-12">
            <h1 className="text-xl font-bold font-display">Popular Services</h1>
            <div className="flex flex-wrap mt-4">
                {services.length > 0 && services.map((service, i) => 
                    <div key={service.id} className={`${i % 2 === 0 ? "pr-4" : ""} w-1/2 pb-4`}>
                        <HorizontalServiceCard service={service} /> 
                    </div>
                )}
            </div>
            <div className="flex justify-end">
                <Link href="/listing">
                    <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none">Browse More</a>
                </Link>
            </div>
        </section>
    )
}

export default FeaturedServices