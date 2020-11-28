import {useState, useEffect} from "react"
import firebase from "firebase"

const MessageBox = ({selectedContactId, messages, selectedSender}) => {
    const[signedIn, setIsSignedIn] = useState(false)
    const[newMessage, setNewMessage] = useState("")
    var currentUser = firebase.default.auth().currentUser

    useEffect(() => {
        if(!signedIn) {
            firebase.default.auth().onAuthStateChanged(function(user) {
                if(user) {
                    currentUser = firebase.default.auth().currentUser
                    setIsSignedIn(true)
                }
            })
        }
    }, [signedIn])

    function handleInputChange(event) {
        const target = event.target;
        var value = target.value
        setNewMessage(value)
    }

    function sendMessage() {
        if(newMessage === null || newMessage === "") return

        // Get current user
        const currentUser = firebase.default.auth().currentUser

        // Write to firestore
        const db = firebase.default.firestore()
        const tempMessage = newMessage
        db.collection("chat").doc(selectedContactId).collection("messages").add({
            sender: currentUser.displayName,
            senderId: currentUser.uid,
            time: firebase.default.firestore.Timestamp.now(),
            message: tempMessage
        })
        .then(function(docRef) {
            db.collection("chat").doc(selectedContactId).update({
                lastUpdated: firebase.default.firestore.Timestamp.now(),
                recentMessage: tempMessage
            })
        })
        .catch(function(error) {
            alert('An error occurred while saving to the database');
        });

        setNewMessage("")
        document.getElementById("#message-box").value = ""
    }

    return(
        <div className="flex flex-col h-full">
            <div className="py-2 px-4 border z-20">
                <h3>{selectedSender === "" ? "Select conversation" : selectedSender}</h3>
            </div>
            <div className="flex flex-col-reverse border flex-1 bg-gray-50 z-10 p-4 overflow-auto">
                {messages !== null && messages.map(message => {
                    return( 
                        <div className={`${signedIn && message.senderId === currentUser.uid ? "justify-end" : "justify-start"} w-full flex mb-2`}>
                            <p className={`${signedIn && message.senderId === currentUser.uid ? "bg-accent text-white" : "bg-gray-200"} px-4 py-2 rounded-full text-sm`}>{message.message}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex border py-2 px-4 z-20">
                <input id="#message-box" onChange={handleInputChange} className="shadow text-gray-600 rounded-lg flex-grow bg-white h-10 px-5 pr-16 text-sm rounded-xl focus:outline-none" type="text" placeholder="Enter your message..." name="message" />
                <button onClick={() => sendMessage()} className="ml-4 text-primary focus:outline-none">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MessageBox