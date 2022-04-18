import Service from "../classes/Service"
import VerticalServiceCard from "./VerticalServiceCard"
import Link from 'next/link'
import firebase from "firebase"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import mockServices from "../mock/mockServices"
require("firebase/firestore")

var prevSort = 1
var isEmpty = false

const ServiceList = ({sortType}) => {
    const services = mockServices
    const router = useRouter()

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