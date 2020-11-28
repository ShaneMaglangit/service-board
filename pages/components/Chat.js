import ContactList from "./ContactList.js"
import MessageBox from "./MessageBox.js"
import {useState, useEffect} from 'react'
import firebase from "firebase"
import Message from "../classes/Message.js"
require("firebase/firestore")

const Chat = () => {
    const [selectedSender, setSelectedSender] = useState("")
    const [messages, setMessages] = useState([])
    const [selectedContactId, setSelectedContactId] = useState("")

    function getMessages(id, senderName) {
        const db = firebase.default.firestore()
        db.collection("chat").doc(id).collection("messages").orderBy("time", "asc")
            .onSnapshot((snapshots) => {
                setMessages(snapshots.docs.map((doc, i) => {
                    const data = doc.data()
                    return new Message(doc.id, data.sender, data.senderId, data.timeSent, data.message)
                }))
                setSelectedSender(senderName)
                setSelectedContactId(id)
            })
    }

    return(
        <div className="flex w-full">
            <div className="w-3/12">
                <ContactList getMessages={getMessages} />
            </div>
            <div className="w-9/12">
                <MessageBox selectedContactId={selectedContactId} messages={messages} selectedSender={selectedSender}/>
            </div>
        </div>
    )
}

export default Chat