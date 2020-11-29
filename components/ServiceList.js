import Service from "../classes/Service"
import VerticalServiceCard from "./VerticalServiceCard"
import Link from 'next/link'
import firebase from "firebase"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
require("firebase/firestore")

var prevSort = 1
var isEmpty = false

const ServiceList = ({sortType}) => {
    const[services, setServices] = useState([])
    const router = useRouter()

    useEffect(() => {
        if(isEmpty) return
        if(((router.asPath !== router.route || !router.asPath.includes("?")) && services.length === 0) || prevSort !== sortType) {
            const db = firebase.default.firestore()
            var query = router.query.search
            var category = router.query.category
            var sortField
            var order
            prevSort = sortType

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

            if(query !== undefined && query !== null && query !== "") {
                console.log("Fetching")
                db.collection("services")
                    .where("title", "==", query)
                    .orderBy(sortField, order)
                    .get()
                    .then(snapshot => {
                        setServices(snapshot.docs.map((doc, i) => {
                            const data = doc.data()
                            return new Service(doc.id, data.thumbnail, data.title, data.category, data.description, data.rating, data.estimatedCost, data.isHourly, data.location, data.provider, data.providerId)
                        }))
                        isEmpty = snapshot.docs.length === 0
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    })
            } else if(category !== undefined && category !== null && category !== "") {
                console.log("Fetching")
                db.collection("services")
                    .where("category", "==", category)
                    .orderBy(sortField, order)
                    .get()
                    .then(snapshot => {
                        setServices(snapshot.docs.map((doc, i) => {
                            const data = doc.data()
                            return new Service(doc.id, data.thumbnail, data.title, data.category, data.description, data.rating, data.estimatedCost, data.isHourly, data.location, data.provider, data.providerId)
                        }))
                        isEmpty = snapshot.docs.length === 0
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    }) 
            } else {
                console.log("Fetching")
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
            }
        }
    }, [router, services, sortType])

    return(
        <section className="w-11/12 mx-auto min-h-screen pb-6">
            <div className="flex flex-wrap items-stretch mt-4">
                {services.length === 0 && 
                    <div className="w-full h-96 flex justify-center items-center">
                        <p className="text-gray-400">No services found</p>
                    </div>}
                {services.length > 0 && services.map((service) => 
                    <div key={service.id} className="flex w-full md:w-4/12 lg:w-3/12 px-2 pb-4">
                        <VerticalServiceCard service={service} /> 
                    </div>)}
            </div>
        </section>
    )
}

export default ServiceList