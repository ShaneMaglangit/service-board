import Service from "../classes/Service"
import ServiceCard from "./ServiceCard"

var tempService = [
    new Service("1", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 12.00, true, "Sampaloc, Manila", "David's Salon", "1"),
    new Service("2", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 12.00, true, "Sampaloc, Manila", "David's Salon", "2"),
    new Service("3", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 12.00, true, "Sampaloc, Manila", "David's Salon", "3"),
    new Service("4", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 12.00, true, "Sampaloc, Manila", "David's Salon", "4")
]

const FeaturedServices = () => {
    return(
        <section className="w-10/12 mx-auto py-12">
            <h1 className="text-xl font-bold">Popular Services</h1>
            <div className="flex flex-wrap mt-4">
                {tempService.map((service, i) => 
                    <div className={`${i % 2 === 0 ? "pr-4" : ""} w-1/2 pb-4`}>
                        <ServiceCard service={service} /> 
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedServices