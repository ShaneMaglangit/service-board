import {useState} from "react"

const ServicePricing = ({service}) => {
    const [signedIn, setIsSignedIn] = useState(true)

    function createChat() {
        window.alert("Availing services does not function on archive mode (In production, users are redirected to a chat box where they can reach out to the service provider)")
    }

    return (
        <div className="w-full flex flex-col shadow p-6">
            <div className="flex mb-2">
                <h4 className="flex-grow font-display text-lg font-medium">{service.title}</h4>
                <p className="font-semibold text-xl">~ ₱{service.estimatedCost}</p>
            </div>
            <p className="text-sm">✔️ Recognized Provider</p>
            <p className="text-sm">✔️ Fraud Protection</p>
            <button onClick={() => createChat()}
                    className={`${signedIn ? "bg-primary text-white" : "bg-gray-300 text-white"} text-center font-display font-semibold flex-grow px-4 py-2 mt-4 rounded focus:outline-none`}>Avail
                Service
            </button>
            <p className={`${signedIn ? "hidden" : "inline-block"} text-xs mt-2 text-red-500 text-center`}>Please sign
                in to use this feature</p>
        </div>
    )
}

export default ServicePricing