import { useState } from "react";
import './CreatePost.css'


const COHORT_NAME = `2302-acc-ct-web-pt-a`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function CreatePost (){
    const [ title, setTitle ] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice]= useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await fetch(`${BASE_URL}/POST/posts`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
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
            console.log(result)
        }catch(error){
            setError(error.message(error));
        }
    }
    return (
    
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label> 
            <input
            type="text"
            id="description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="location">location</label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="willDeliver">Will Deliver?</label>
            <input
            type="checkbox"
            value={willDeliver}
            onChange={(e)=> setWillDeliver(e.target.value)}
            />
            <button type="submit">Create Post</button>
        </form>
    );
}