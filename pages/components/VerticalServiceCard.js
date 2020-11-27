import Link from 'next/link'

const VerticalServiceCard = ({service}) => {
    return(
        <Link as={`/${service.id}`} href="/[id]">
            <a className="flex flex-col items-stretch shadow-md">
                <div className="h-40 w-full bg-primary"></div>
                <div className="flex flex-col justify-center flex-grow p-4">
                    <h3 className="font-display font-semibold">{service.title}</h3>
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