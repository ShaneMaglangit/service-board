import HorizontalServiceCard from "./HorizontalServiceCard"
import Link from 'next/link'
import mockFeaturedServices from "../mock/mockFeaturedServices"

const FeaturedServices = () => {
    const services = mockFeaturedServices
    return (
        <section className="w-11/12 lg:w-10/12 mx-auto py-12 container">
            <h1 className="text-xl font-bold font-display">Popular Services</h1>
            <div className="flex flex-wrap mt-4">
                {services.length > 0 && services.map((service, i) =>
                    <div key={service.id} className={`${i % 2 === 0 ? "lg:pr-4" : ""} w-full lg:w-1/2 pb-4`}>
                        <HorizontalServiceCard service={service}/>
                    </div>
                )}
            </div>
            <div className="flex justify-center md:justify-end">
                <Link href="/listing">
                    <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none">Browse
                        More</a>
                </Link>
            </div>
        </section>
    )
}

export default FeaturedServices