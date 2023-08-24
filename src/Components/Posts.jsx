import { fetchAllPosts } from '../API/index';
import { useState } from 'react';
import { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

export default function Posts(){
    const [posts, setPosts] = useState([])
    useEffect (() => {
        async function fetchPosts(){
            try{
                const posts = await fetchAllPosts();
                setPosts(posts);
                console.log("hi it works;...");
                console.log(posts);
            } catch (error){
                console.log("sorry fail");
                console.log(error);
            }
        }
        fetchPosts();
    }, []);
    
    return (
        <div className='allPostsWrapper'>
            <h3 id='component-h3'> Posts </h3>
        {posts.map((obj) => {
        return (
        <div key={obj.id} className='single-message' >

                <p> Message: {obj.messages}</p>
                <p> Author ID: {obj.author.id}</p>
                <p> Username: {obj.author.username}</p>
                <p> Title: {obj.title}</p>
                <p> Description: {obj.description}</p>
                <p>Price: {obj.price}</p>
                <h4 className='location'>{obj.location}</h4>
            </div>
        );
    
    })}
        </div>
    )
}