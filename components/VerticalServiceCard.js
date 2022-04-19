import Link from 'next/link'

const VerticalServiceCard = ({service}) => {
    const thumbnailStyle = {
        backgroundImage: `url(${service.thumbnail})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }

    return (
        <Link as={`/${service.id}`} href="/[id]">
            <a className="flex flex-col h-full w-full items-stretch shadow-md">
                <div className="h-40 w-full bg-gray-200" style={thumbnailStyle}></div>
                <div className="flex flex-col items-start justify-start flex-grow p-4">
                    <p className="mb-1 text-xxs uppercase font-medium text-primary-dark">{service.location}</p>
                    <h3 className="text-xl font-display font-bold">{service.title}</h3>
                    <p className="font-body text-sm">{service.description}</p>
                </div>
                <div className="flex items-center border-t px-3 py-2">
                    <h4>⭐ {service.rating}</h4>
                    <p className="flex-grow text-sm text-gray-600 text-right">Price starts at
                        <span className="text-base font-semibold text-primary-dark"> ₱{service.estimatedCost}</span>
                    </p>
                </div>
            </a>
        </Link>
    )
}

export default VerticalServiceCard