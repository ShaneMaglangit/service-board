import Link from 'next/link'

const ServicePricing = ({service}) => {
    return(
        <div className="w-full flex flex-col shadow p-6">
            <div className="flex mb-2">
                <h4 className="flex-grow font-display text-lg font-medium">{service.title}</h4>
                <p className="font-semibold text-xl">~ ₱{service.estimatedCost}</p>
            </div>
            <p>✔️ Recognized Provider</p>
            <p>✔️ Fraud Protection</p>
            <Link href="/">
                <a className="text-center font-display font-semibold flex-grow bg-primary text-white px-4 py-2 mt-4 rounded">Avail Service</a>
            </Link>
        </div>
    )
}

export default ServicePricing