import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostContext from "./PostContext";
import user from '../src/img/user.png';
import { format } from "date-fns";

const ActivePost = () => {
    const params = useParams();
    const posts = useContext(PostContext);
    const post = posts.find(o => o.id === params.id * 1);
    const navigate = useNavigate();

    const time = new Date(post.created * 1);
    const date = format(time, 'yyyy/MM/dd');

    const deletePost = () => {
        fetch(`${process.env.REACT_APP_POSTS_URL}/${post.id}`, {
            method: 'DELETE'
        }).then(() => navigate ('/'));
    }

    const close = () => {
        navigate ('/');
    }

    return (
        <div className="singlePost">
            <div className="post-container">
                <button className="close" type="button" onClick={close}></button>
                <div className='postDetails'>
                    <img src={user} alt='some face' className='userPhoto'></img>
                    <div className='nameAndTime'>
                        <div className='userName'>Иван Иванов</div>
                        <div className='postTime'>{date}</div>
                    </div>
                </div>
                <div className='postContent'>{post.content}</div>
                <div className="btnsBox">
                    <Link to={`/posts/editpost/${post.id}`} >
                        <button type="button" className="btn">Изменить</button>
                    </Link>
                    <button type="button" className="btn del" onClick={deletePost}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default ActivePost;