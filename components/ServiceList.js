import Service from "../classes/Service"
import VerticalServiceCard from "./VerticalServiceCard"
import Link from 'next/link'
import firebase from "firebase"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
require("firebase/firestore")

var prevSort = 1

const ServiceList = ({sortType}) => {
    const[services, setServices] = useState([])
    const router = useRouter()

    useEffect(() => {
        if(((router.asPath !== router.route || !router.asPath.includes("?")) && services.length === 0) || prevSort !== sortType) {
            const db = firebase.default.firestore()
            var query = router.query.search
            var sortField
            var order
            prevSort = sortType

            console.log("Fetching " + sortType)

            switch(parseInt(sortType)) {
                case 1: 
                    sortField = "rating";
                    order = "desc";
                    break;
                case 2:
                    sortField = "estimatedCost";
                    order = "asc";
                    break;
                default:
                    sortField = "estimatedCost";
                    order = "desc";
            }

            console.log(sortField + " " + order)

            if(query === undefined || query === null || query === "") {
                db.collection("services")
                    .orderBy(sortField, order)
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
            } else {
                db.collection("services")
                    .where("title", "==", query)
                    .orderBy(sortField, order)
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
        }
    }, [router, services, sortType])

    return(
        <section className="w-11/12 mx-auto pb-6">
            <div className="flex flex-wrap items-stretch mt-4">
                {services.length === 0 && 
                    <div className="w-full h-96 flex justify-center items-center">
                        <p className="text-gray-400">No services found</p>
                    </div>}
                {services.length > 0 && services.map((service) => 
                    <div key={service.id} className="flex w-3/12 px-2 pb-4">
                        <VerticalServiceCard service={service} /> 
                    </div>)}
            </div>
        </section>
    )
}

export default ServiceList