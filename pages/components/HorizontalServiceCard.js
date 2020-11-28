import Link from 'next/link'

const HorizontalServiceCard = ({service}) => {
    const thumbnailStyle = {
        backgroundImage: `url(${service.thumbnail})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }

    return (
        <div className="flex items-stretch shadow-md">
            <div className="h-40 w-48 bg-gray-200" style={thumbnailStyle}></div>
            <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="font-display font-semibold">{service.title}</h3>
                <p className="font-body text-sm">{service.description}</p>
            </div>
        </div>
    )
}

export default HorizontalServiceCard