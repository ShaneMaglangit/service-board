import Service from "../classes/Service"
import HorizontalServiceCard from "./HorizontalServiceCard"
import VerticalServiceCard from "./VerticalServiceCard"

var tempService = [
    new Service("1", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "1"),
    new Service("2", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "2"),
    new Service("3", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "3"),
    new Service("4", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "4"),
    new Service("5", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "5"),
    new Service("6", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "6"),
    new Service("7", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "7"),
    new Service("8", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "2"),
    new Service("9", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "3"),
    new Service("10", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "4"),
    new Service("11", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "5"),
    new Service("12", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "6")
]

const ServiceList = () => {
    return(
        <section className="w-11/12 mx-auto pb-6">
            <div className="flex flex-wrap mt-4">
                {tempService.map((service, i) => 
                    <div key="{service.id}" className="w-3/12 px-2 pb-4">
                        <VerticalServiceCard service={service} /> 
                    </div>
                )}
            </div>
            <div className="flex">
                <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none" href="/listing">Previous</a>
                <div className="flex-grow"></div>
                <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none" href="/listing">Next</a>
            </div>
        </section>
    )
}

export default ServiceList