import {useState} from "react"

const MessageBox = ({messages, selectedSender}) => {
    const signedIn = true
    const [newMessage, setNewMessage] = useState("")

    function handleInputChange(event) {
        const target = event.target;
        var value = target.value
        setNewMessage(value)
    }

    function sendMessage() {
        if (newMessage === null || newMessage === "") return
        window.alert("Sending message does not function on archive mode")
    }

    return (
        <div className="flex flex-col h-full">
            <div className="py-2 px-4 border z-20">
                <h3>{selectedSender === "" ? "Select conversation" : selectedSender}</h3>
            </div>
            <div className="flex flex-col-reverse border flex-1 bg-gray-50 z-10 p-4 overflow-auto">
                {messages !== null && messages.map(message => {
                    return (
                        <div
                            className={`${signedIn && message.senderId === "0" ? "pl-36 justify-end" : "justify-start pr-36"} w-full flex mb-2`}>
                            <p className={`${signedIn && message.senderId === "0" ? "bg-accent text-white text-right" : "text-left bg-gray-200"} px-4 py-2 rounded-3xl md:rounded-full text-sm`}>{message.message}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex border py-2 px-4 z-20">
                <input id="#message-box" onChange={handleInputChange}
                       className="shadow text-gray-600 rounded-lg flex-grow bg-white h-10 px-5 pr-16 text-sm rounded-xl focus:outline-none"
                       type="text" placeholder="Enter your message..." name="message"/>
                <button onClick={() => sendMessage()} className="ml-4 text-primary focus:outline-none">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                         width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MessageBox