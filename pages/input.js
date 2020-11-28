import Head from "next/head"
import Navbar from "./components/Navbar.js"
import firebase from "firebase"
import { useState } from "react"

require("firebase/firestore");

const Input = () => {
    const [thumbnail, setThumbnail] = useState(null)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(0)
    const [estimatedCost, setEstimatedCost] = useState(0)
    const [isHourly, setIsHourly] = useState(false)
    const [location, setLocation] = useState("")

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
            case "rating": setRating(value); break;
            case "estimatedCost": setEstimatedCost(value); break;
            case "isHourly": setIsHourly(value); break;
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
                        rating: rating,
                        estimatedCost: estimatedCost,
                        isHourly: isHourly,
                        location: location,
                        provider: currentUser.displayName,
                        providerId: currentUser.uid,
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch(function(error) {
                        alert('An error occurred while saving to the database');
                    });

                    setThumbnail(null)
                    setTitle("")
                    setCategory("")
                    setDescription("")
                    setRating(0)
                    setEstimatedCost(0)
                    setIsHourly(false)
                    setLocation("")
                });
        });
    }

    return(
        <div className="">
            <Head>
                <title>Service Board</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mx-auto container min-h-screen">
                <Navbar position="absolute top-0" showSearch={false} isLight={true} />
                <div className="h-screen flex justify-center items-center">
                    <div className="flex flex-col shadow p-2">
                        <input onChange={handleInputChange} className="mb-2" type="file" name="thumbnail" />
                        <input onChange={handleInputChange} className="mb-2 border" type="text" name="title" placeholder="title" />
                        <input onChange={handleInputChange} className="mb-2 border" type="text" name="category" placeholder="category" />
                        <input onChange={handleInputChange} className="mb-2 border" type="text" name="description" placeholder="desc" />
                        <input onChange={handleInputChange} className="mb-2 border" type="number" name="rating" placeholder="rating" />
                        <input onChange={handleInputChange} className="mb-2 border" type="number" name="estimatedCost" placeholder="cost" />
                        <input onChange={handleInputChange} className="mb-2 border" type="checkbox" name="isHourly"/>
                        <input onChange={handleInputChange} className="mb-2 border" type="text" name="location" placeholder="location" />
                        <button onClick={() => submit()}>Submit</button>
                    </div>
                </div>
            </main>
    </div>
    )
}

export default Input
