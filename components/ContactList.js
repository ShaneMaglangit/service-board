import { useState, useEffect } from "react"
import Contact from "../classes/Contact.js"
import firebase from "firebase"
require("firebase/firestore")

const ContactList = ({getMessages}) => {
    const[contacts, setContacts] = useState([{
        "id": "1",
        "lastUpdated": new Date(),
        "members": [],
        "membersId": [],
        "recentMessage": "I'm looking forward to it."
    }])
    const [signedIn, setIsSignedIn] = useState(true)
    var hasFetched = false

    return(
        <div className="border h-full overflow-y-auto">
            {contacts !== null && contacts.map(contact => {
                const senderName = contact.members[0] !== "Archive User" ? contact.members[0] : contact.members[1]
                return(
                    <button key={contact.id} onClick={() => getMessages(contact.id, senderName)} className="w-full flex flex-col border-b p-4 overflow-x-hidden focus:outline-none">
                        <h3 className="block md:hidden">JD</h3>
                        <h3 className="hidden md:block w-full text-left text-base font-display">Jane Doe</h3>
                        <p className="hidden md:block w-full mb-1 text-left truncate flex-grow text-sm text-gray-600">{contact.recentMessage}</p>
                        <p className="hidden md:block w-full text-left text-gray-400 text-xs">{contact.lastUpdated.toLocaleString()}</p>
                    </button>
                )
            })}
        </div>
    )
}

export default ContactList