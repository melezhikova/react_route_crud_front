import { useContext, useState } from "react";
import PostContext from "./PostContext";
import user from '../src/img/user.png';
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const params = useParams();
    const posts = useContext(PostContext);
    const post = posts.find(o => o.id === params.id * 1);
    
    const [form, setForm] = useState({postContent: post.content});
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setForm(prevForm => ({...prevForm,
            postContent: evt.target.value}));  
    }

    const savePost = (evt) => {
        evt.preventDefault();
        
        const data = {
            "id": post.id,
            "content": form.postContent
        }  

        fetch(process.env.REACT_APP_POSTS_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => navigate (`/posts/${post.id}`));
    }

    const close = () => {
        navigate ('/');
    }

    return (
        <div className="singlePost">
            <div className="post-container">
                <button className="close" type="button" onClick={close}></button>
                <img src={user} alt='some face' className='userPhoto'></img>
                <form onSubmit={savePost}>
                    <input name="postContent" className='postInput' onChange={handleChange} value={form.postContent}></input>
                    <div className="btnsBox">
                        <button className="btn" type="submit">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditPost;