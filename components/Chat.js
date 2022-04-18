import ContactList from "./ContactList.js"
import MessageBox from "./MessageBox.js"
import {useState, useEffect} from 'react'
import firebase from "firebase"
import Message from "../classes/Message.js"
import mockMessages from "../mock/mockMessages"
require("firebase/firestore")

const Chat = () => {
    const [selectedSender, setSelectedSender] = useState("Jane Doe")
    const [messages, setMessages] = useState(mockMessages)
    const [selectedContactId, setSelectedContactId] = useState("1")

    function getMessages(id, senderName) {
        setMessages(mockMessages)
    }

    return(
        <div className="flex w-full">
            <div className="md:w-3/12">
                <ContactList getMessages={getMessages} />
            </div>
            <div className="flex-1 md:w-9/12">
                <MessageBox selectedContactId={selectedContactId} messages={messages} selectedSender={selectedSender}/>
            </div>
        </div>
    )
}

export default Chat