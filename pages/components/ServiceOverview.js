import Image from 'next/image'

const ServiceOverview = ({service}) => {
    var stars = ""

    for(var i = 0; i < service.rating; i++) stars += "⭐"

    return(
        <div className="w-full">
            <h6 className="font-body text-sm font-semibold text-accent">{service.category}</h6>
            <h1 className="text-3xl font-semibold fold-display">{service.title}</h1>
            <div className="flex">
                <p>📍 {service.location} | {service.provider}</p>
            </div>
            <span>{stars}</span>
            <div className="my-4 h-96 bg-primary w-full"></div>
            <p>{service.description}</p>
        </div>
    )
}

export default ServiceOverview