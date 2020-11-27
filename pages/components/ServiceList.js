import Service from "../classes/Service"
import VerticalServiceCard from "./VerticalServiceCard"
import Link from 'next/link'

var tempService = [
    new Service("1", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "1"),
    new Service("2", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "2"),
    new Service("3", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "3"),
    new Service("4", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "4"),
    new Service("5", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "5"),
    new Service("6", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "6"),
    new Service("7", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "7"),
    new Service("8", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "8"),
    new Service("9", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "9"),
    new Service("10", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "10"),
    new Service("11", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "11"),
    new Service("12", null, "Haircut", "Grooming", "Service includes cutting, styling, and treatment of the hair", 5, 12.00, true, "Sampaloc, Manila", "David's Salon", "12")
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
                <Link href="/">
                    <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none">Previous</a>
                </Link>
                <div className="flex-grow"></div>
                <Link href="/">
                    <a className="bg-primary rounded px-6 py-2 font-display text-white focus:outline-none">Next</a>
                </Link>
            </div>
        </section>
    )
}

export default ServiceList