import React from 'react'; 
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

import './Post.css';



const Post = props => {
    return
    (
        <div className="post-border">
            <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl} 
            />
    <div className="post-image-div">
        <img classNamer="post-image"
        src={props.post.imageUrl}
        />
    </div>

        </div>
    );
};




export default Post;