import { useState } from "react";
import './CreatePost.css';


const COHORT_NAME = `2302-acc-ct-web-pt-a`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function CreatePost ({setToken}){
    const [ title, setTitle ] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice]= useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setwillDeliver] = useState(false);
    const [error,setError]= useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await fetch(`${BASE_URL}/POST/posts`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${setToken}`
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    location,
                    willDeliver,
                }),
                }
            );
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.error(err);
            setError(error);
        }
    }
    return (
    
        <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>
            <label className="postLabels" htmlFor="title">Title</label>
            <input type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
            />
            <label className="postLabels" htmlFor="description">Description:</label> 
            <input
            type="text"
            id="description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            />
            <label className="postLabels" htmlFor="price">Price:</label>
            <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <label className="postLabels" htmlFor="location">location:</label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <label className="postLabels" htmlFor="willDeliver">Will Deliver?</label>
            <input
            type="checkbox"
            value={willDeliver}
            onChange={(e)=> setwillDeliver(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}