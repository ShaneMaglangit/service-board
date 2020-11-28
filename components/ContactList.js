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

    function updateContacts(data) {
        var isFirstLoad = contacts.length === 0
        setContacts(data)

        if(isFirstLoad && data.length !== 0) {
            const senderName = data[0].members[0] !== currentUser.displayName ? data[0].members[0] : data[0].members[1]
            getMessages(data[0].id, senderName)
        }
    }

    useEffect(() => {
        if(!hasFetched && signedIn) {
            const db = firebase.default.firestore()
            currentUser = firebase.default.auth().currentUser
            db.collection("chat")
                .where("membersId", "array-contains", currentUser.uid)
                .orderBy("lastUpdated", "desc")
                .onSnapshot((snapshots) => {
                    updateContacts(snapshots.docs.map((doc, i) => {
                        const data = doc.data()
                        return new Contact(doc.id, data.lastUpdated, data.members, data.membersId, data.recentMessage)
                    }))
                })
            hasFetched = true
        }
    }, [hasFetched, signedIn])

    return(
        <div className="border h-full overflow-y-auto">
            {contacts !== null && contacts.map(contact => {
                const senderName = contact.members[0] !== currentUser.displayName ? contact.members[0] : contact.members[1]
                return(
                    <button key={contact.id} onClick={() => getMessages(contact.id, senderName)} className="w-full flex flex-col border-b p-4 overflow-x-hidden focus:outline-none">
                        <h3 className="w-full text-left text-base font-display">{senderName}</h3>
                        <p className="w-full mb-1 text-left truncate flex-grow text-sm text-gray-600">{contact.recentMessage}</p>
                        <p className="w-full text-left text-gray-400 text-xs">{contact.lastUpdated.toDate().toLocaleString()}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default ContactList