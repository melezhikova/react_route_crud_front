import user from '../src/img/user.png';
import { format } from 'date-fns';

function Post (props) {
    const {item} = props;
    
    const time = new Date(item.created * 1);
    const date = format(time, 'yyyy/MM/dd');

    return (
        <div className="post-container">
            <div className='postDetails'>
                <img src={user} alt='some face' className='userPhoto'></img>
                <div className='nameAndTime'>
                    <div className='userName'>Иван Иванов</div>
                    <div className='postTime'>{date}</div>
                </div>
            </div>
            <div className='postContent'>{item.content}</div>
        </div>
    )
}

export default Post;