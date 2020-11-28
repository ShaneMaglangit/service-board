import Link from 'next/link'
import { useState } from "react"
import firebase from "firebase"

const ServicePricing = ({service}) => {
    const[signedIn, setIsSignedIn] = useState(false)

    firebase.default.auth().onAuthStateChanged(function(user) {
        if(user) {
            setIsSignedIn(true)
        }
    })

    function creatChat() {
        if(signedIn) {
            // Get current user
            const currentUser = firebase.default.auth().currentUser

            // Write to firestore
            const db = firebase.default.firestore()
            const message = "Hi, I would like to avail your service \"" + service.title + "\"."

            db.collection("chat").doc(service.providerId).get().then((doc) => {
                if(!doc.exists) {
                    db.collection("chat").doc(service.providerId).set({
                        lastUpdated: firebase.default.firestore.Timestamp.now(),
                        members: [currentUser.displayName, service.provider],
                        membersId: [currentUser.uid, service.providerId],
                        recentMessage: message
                    }).then((chatSnapshot) => {
                        sendMessage(db, currentUser.displayName, currentUser.uid, firebase.default.firestore.Timestamp.now(), message)
                    })
                } else {
                    sendMessage(db, currentUser.displayName, currentUser.uid, firebase.default.firestore.Timestamp.now(), message)
                }
            })
            .catch(function(error) {
                alert('An error occurred while saving to the database');
            });
        }
    }

    function sendMessage(db, sender, senderId, time, message) {
        db.collection("chat").doc(service.providerId).collection("messages").add({
            sender: sender,
            senderId: senderId,
            time: time,
            message: message
        })
        .then((docRef) => {
            window.location.href="/inbox"
        })
        .catch((error) => {
            alert('An error occurred while saving to the database');
        });
    }

    return(
        <div className="w-full flex flex-col shadow p-6">
            <div className="flex mb-2">
                <h4 className="flex-grow font-display text-lg font-medium">{service.title}</h4>
                <p className="font-semibold text-xl">~ ₱{service.estimatedCost}</p>
            </div>
            <p>✔️ Recognized Provider</p>
            <p>✔️ Fraud Protection</p>
            <button onClick={() => creatChat()} className={`${signedIn ? "bg-primary text-white" : "bg-gray-300 text-white"} text-center font-display font-semibold flex-grow px-4 py-2 mt-4 rounded focus:outline-none`}>Avail Service</button>
            <p className={`${signedIn ? "hidden" : "inline-block"} text-xs mt-2 text-red-500 text-center`}>Please sign in to avail services</p>
        </div>
    )
}

export default ServicePricing