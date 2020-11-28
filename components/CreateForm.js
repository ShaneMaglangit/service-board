import firebase from "firebase"
import { useState } from "react"

require("firebase/firestore");

const CreateForm = () => {
    const [thumbnail, setThumbnail] = useState(null)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [estimatedCost, setEstimatedCost] = useState(0)
    const [location, setLocation] = useState("")

    const imageStyle = {
        backgroundImage: `url("./form.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    function handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        var value = target.value

        if(target.type === 'checkbox') value = target.checked
        else if(target.type === 'file') value = target.files[0]
        
        switch(target.name) {
            case "thumbnail": setThumbnail(value); break;
            case "title": setTitle(value); break;
            case "category": setCategory(value); break;
            case "description": setDescription(value); break;
            case "estimatedCost": setEstimatedCost(value); break;
            case "location": setLocation(value); break;
        }
    }
    
    function submit() {
        // Upload to storage
        const storage = firebase.default.storage()
        const uploadTask = storage.ref(`/thumbnails/${thumbnail.name}`).put(thumbnail)
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("thumbnails")
                .child(thumbnail.name)
                .getDownloadURL()
                .then((url) => {
                    // Get current user
                    const currentUser = firebase.default.auth().currentUser

                    // Write to firestore
                    const db = firebase.default.firestore()
                    db.collection("services").add({
                        thumbnail: url,
                        title: title,
                        category: category,
                        description: description,
                        rating: 0,
                        estimatedCost: parseFloat(estimatedCost),
                        isHourly: false,
                        location: location,
                        provider: currentUser.displayName,
                        providerId: currentUser.uid,
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        window.location.href="/" + docRef.id
                    })
                    .catch(function(error) {
                        alert('An error occurred while saving to the database');
                    });
                });
        });
    }

    return(
        <div className="w-full flex h-full">
            <div className="w-2/5 flex items-center z-10 -mr-12 justify-end">
                <div className="bg-gray-200 h-96 w-96" style={imageStyle}></div>
            </div>
            <div className="w-3/5 -ml-12 flex z-20 flex-col justify-center">
                <div className="shadow-md p-6 bg-white">
                    <div className="grid grid-rows-2 grid-cols-2 gap-2">
                        <input onChange={handleInputChange} className="border text-sm rounded py-2 px-4" type="text" name="title" placeholder="Enter title" />
                        <input onChange={handleInputChange} className="border text-sm rounded py-2 px-4" type="text" name="category" placeholder="Enter category" />
                        <input onChange={handleInputChange} className="border text-sm rounded py-2 px-4" type="text" name="location" placeholder="Enter location" />
                        <input onChange={handleInputChange} className="border text-sm rounded py-2 px-4" type="number" name="estimatedCost" placeholder="Enter pricing" />
                    </div>
                    <textarea onChange={handleInputChange} rows="6" className="w-full mt-2 border text-sm rounded py-2 px-4" name="description" placeholder="Enter a brief description of your service..." />
                    <div className="flex items-center m-2">
                        <input onChange={handleInputChange} className="text-sm flex-1" accept="image/*" type="file" name="thumbnail"/>
                        <button onClick={() => submit()} className="bg-primary text-white font-display text-sm font-semibold rounded-md py-2 px-4 focus:outline-none">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateForm