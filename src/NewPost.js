import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from '../src/img/user.png';

const NewPost = () => {
    const [form, setForm] = useState({postContent: ""});
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setForm(prevForm => ({...prevForm,
            postContent: evt.target.value}));  
    }

    const createPost = (evt) => {
        evt.preventDefault();

        const data = {
            "id": 0,
            "content": form.postContent
        }  

        fetch(process.env.REACT_APP_POSTS_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(close());
    }

    const close = () => {
        navigate ('/');
    }

    return (
        <div className="singlePost">
            <div className="post-container">
                <button className="close" type="button" onClick={close}></button>
                <img src={user} alt='some face' className='userPhoto'></img>
                <form onSubmit={createPost}>
                    <input name="postContent" className='postInput' onChange={handleChange} value={form.postContent}></input>
                    <div className="btnsBox">
                        <button className="btn" type="submit">Опубликовать</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPost;