import Link from 'next/link'

const HorizontalServiceCard = ({service}) => {
    const thumbnailStyle = {
        backgroundImage: `url(${service.thumbnail})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }

    return (
        <Link as={`/${service.id}`} href="/[id]">
            <a className="h-full flex items-stretch shadow-md">
                <div className="h-full w-48 bg-gray-200" style={thumbnailStyle}></div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col flex-1 justify-center p-6">
                        <p className="mb-1 text-xxs uppercase font-medium text-primary-dark">{service.location}</p>
                        <h3 className="font-display font-semibold">{service.title}</h3>
                        <p className="font-body text-sm">{service.description}</p>
                    </div>
                    <div className="flex items-center border-t px-4 py-2">
                        <h4 className="text-xs">⭐ {service.rating}</h4>
                        <p className="flex-grow text-xs text-gray-600 text-right">Price starts at 
                            <span className="text-sm font-semibold text-primary-dark"> ₱{service.estimatedCost}</span>
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default HorizontalServiceCard