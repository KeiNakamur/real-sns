import { MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import "./post.css";
import { Users } from "../../dummyData";

//関数の引数にpost(Timeline.jsxでprops)でデータを受け取る
const Post = ({ post }) => {
    // const user = Users.filter((user) => user.id === 1);
    // console.log(user[0].username);

    const [like, setLike] = useState(post.like);
    //いいねが押されているかの状態変数
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} alt="" className='postProfileImg' />
                        <span className='postUserName'>
                            {Users.filter((user) => user.id === post.id)[0].username}
                        </span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className='postText'>{post.desc}</span>
                    <img src={post.photo} alt="" className='postImg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/post/heart.png" alt="" className='likeIcon' onClick={() => handleLike()} />
                        <span className="postLikeCounter">{like}人がいいねを押しました</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}:コメント</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;