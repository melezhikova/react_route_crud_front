import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import Post from "./Post";
import PostContext from "./PostContext";

function HomePage () {
    const posts = useContext(PostContext);

    return (
        <div className="container">
            <div className="createBox">
                <Link to="/posts/new" className="btn">Создать пост</Link>
            </div>
            <div className="posts">
                {posts.map(o =>
                    <div key={o.id}>
                        <Link to={`/posts/${o.id}`}>
                            <Post item={o} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage;