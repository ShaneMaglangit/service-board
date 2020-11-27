import Service from "../classes/Service"
import HorizontalServiceCard from "./HorizontalServiceCard"

var tempService = [
    new Service("1", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "1"),
    new Service("2", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "2"),
    new Service("3", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "3"),
    new Service("4", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "4"),
    new Service("5", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "5"),
    new Service("6", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "6")
]

const FeaturedServices = () => {
    return(
        <section className="w-10/12 mx-auto py-12">
            <h1 className="text-xl font-bold font-display">Popular Services</h1>
            <div className="flex flex-wrap mt-4">
                {tempService.map((service, i) => 
                    <div key="{service.id}" className={`${i % 2 === 0 ? "pr-4" : ""} w-1/2 pb-4`}>
                        <HorizontalServiceCard service={service} /> 
                    </div>
                )}
            </div>
            <div className="flex justify-end">
                <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none" href="/listing">Browse More</a>
            </div>
        </section>
    )
}

export default FeaturedServices