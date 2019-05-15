import React from 'react';


const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-container">
                <img className="post-thumb"
                src={props.thumbnailUrl}
                />
                <div>{props.username}</div>
            </div>
        </div>
    );
};



export default PostHeader;