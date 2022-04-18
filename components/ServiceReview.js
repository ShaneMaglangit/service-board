import {useState, useEffect} from "react"
import firebase from "firebase"
import Reviews from "../classes/Reviews"
import mockReviews from "../mock/mockReviews"
require("firebase/firestore")

var isFetched = false

const ServiceReview = ({service}) => {
    const reviews = mockReviews
    const [reviewMessage, setReviewMessage] = useState("")
    const [signedIn, setIsSignedIn] = useState(true)

    function handleInputChange(event) {
        const target = event.target;
        var value = target.value
        setReviewMessage(value)
    }

    function submitReview() {
        window.alert("Review submission does not function on archive mode.")
    }

    return(
        <div className="mt-4 bg-white shadow h-96 flex flex-col overflow-hidden">
            <h3 className="mb-2 border-b py-2 px-6">Customer Reviews</h3>
            <div className="flex-1 px-6 py-2 h-auto overflow-y-auto">
                {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
            </div>
            <div className="flex">
                <input onChange={handleInputChange} className={`${signedIn ? "inline-block" : "hidden"} shadow text-gray-600 flex-grow bg-white h-10 px-5 pr-16 text-sm focus:outline-none`} type="text" placeholder="Enter your review..." name="review" />
                <button onClick={() => submitReview()} className={`${signedIn ? "inline-block" : "hidden"} focus:outline-none bg-primary text-sm text-white font-display px-4 py-2`}>Post</button>
                <p className={`${signedIn ? "hidden" : "inline-block"} w-full text-center py-2 border text-xs mt-2 text-red-500 text-center`}>Please sign in to use this feature</p>
            </div>
        </div>
    )
}

const ReviewItem = ({review}) => {
    return(
        <div className="flex items-stretch mb-3">
            <div className="w-1 bg-accent mr-2"></div>
            <div className="text-sm py-2">
                <h4 className="text-sm font-medium">{review.sender}</h4>
                <p className="text-xs">{review.message}</p>
            </div>
        </div>
    )
}

export default ServiceReview