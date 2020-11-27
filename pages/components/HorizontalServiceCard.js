const ServiceCard = ({service}) => {
    return (
        <div className="flex items-stretch shadow-md">
            <div className="h-40 w-48 bg-primary"></div>
            <div className="flex flex-col justify-center flex-grow p-6">
                <h3 className="font-display font-semibold">{service.title}</h3>
                <p className="font-body text-sm">{service.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard