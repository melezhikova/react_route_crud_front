import { useState, useEffect } from "react"; 
import PostContext from "./PostContext";

function PostProvider (props) {
    const [posts, setPosts] = useState([]);

    const upload = () => {
        fetch(process.env.REACT_APP_POSTS_URL)
        .then(response=>response.json())
        .then(posts => {
            console.log(posts);
            setPosts([...posts])
        })
    }

    useEffect(() => {
        upload();
    }, []);
    
    return (
        <PostContext.Provider value={posts}>
            {props.children}
        </PostContext.Provider>
    )
} 

export default PostProvider;