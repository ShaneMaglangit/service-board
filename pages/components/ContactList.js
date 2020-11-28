import { useState, useEffect } from "react"
import Contact from "../classes/Contact.js"
import firebase from "firebase"
require("firebase/firestore")

const ContactList = ({getMessages}) => {
    const[contacts, setContacts] = useState([])
    const[signedIn, setIsSignedIn] = useState(false)
    var hasFetched = false
    var currentUser = firebase.default.auth().currentUser

    firebase.default.auth().onAuthStateChanged(function(user) {
        if(user) {
            setIsSignedIn(true)
        }
    })

    useEffect(() => {
        if(!hasFetched && signedIn) {
            const db = firebase.default.firestore()
            currentUser = firebase.default.auth().currentUser
            db.collection("chat")
                .where("membersId", "array-contains", currentUser.uid)
                .onSnapshot((snapshots) => {
                    setContacts(snapshots.docs.map((doc, i) => {
                        const data = doc.data()
                        return new Contact(doc.id, data.lastUpdated, data.members, data.membersId, data.recentMessage)
                    }))
                })
            hasFetched = true
        }
    }, [hasFetched, signedIn])

    return(
        <div className="border h-full overflow-y-auto">
            {contacts.map(contact => {
                const senderName = contact.members[0] !== currentUser.displayName ? contact.members[0] : contact.members[1]
                return(
                    <button onClick={() => getMessages(contact.id, senderName)} className="w-full flex flex-col border-b p-4 focus:outline-none">
                        <h3 className="text-base font-display">{senderName}</h3>
                        <p className="mb-1 truncate flex-grow text-sm text-gray-600">{contact.recentMessage}</p>
                        <p className="text-gray-400 text-xs">{contact.lastUpdated.toDate().toLocaleString()}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default ContactList