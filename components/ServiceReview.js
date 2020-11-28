import {useState, useEffect} from "react"
import firebase from "firebase"
import Reviews from "../classes/Reviews"
require("firebase/firestore")

var isFetched = false

const ServiceReview = ({service}) => {
    const [reviews, setReviews] = useState([])
    const [reviewMessage, setReviewMessage] = useState("")
    const [signedIn, setIsSignedIn] = useState(false)

    firebase.default.auth().onAuthStateChanged(function(user) {
        if(user) {
            setIsSignedIn(true)
        }
    })

    useEffect(() => {
        if(!isFetched) {
            const db = firebase.default.firestore()
            db.collection("services").doc(service.id).collection("reviews").orderBy("timeCreated", "desc")
                .onSnapshot((snapshots) => {
                    setReviews(snapshots.docs.map((doc, i) => {
                        const data = doc.data()
                        return new Reviews(doc.id, data.sender, data.message, data.timeCreated)
                    }))
                })
            isFetched = true
        }
    }, [])

    function handleInputChange(event) {
        const target = event.target;
        var value = target.value
        setReviewMessage(value)
    }

    function submitReview() {
        if(reviewMessage === null || reviewMessage === "") return

        // Get current user
        const currentUser = firebase.default.auth().currentUser

        // Write to firestore
        const db = firebase.default.firestore()

        db.collection("services").doc(service.id).collection("reviews").add({
            sender: currentUser.displayName,
            timeCreated: firebase.default.firestore.Timestamp.now(),
            message: reviewMessage
        })
        .then((snap) => {
            setNewMessage("")
            document.getElementById("#message-box").value = ""
        })
        .catch(function(error) {
            alert('An error occurred while saving to the database');
        });
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