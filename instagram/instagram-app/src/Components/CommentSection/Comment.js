import React from 'react';
import ProTypes from 'pro-types';
import './Comment.css';


const Comment = props => {
    return (
        <div className="comment-text">
            <span className="comment">{props.comment.text}</span>
            <span className="user">-{props.comment.username}</span>
        </div>
    );
};

Comment.ProTypes = {
    comment: ProTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string

    
    })
};

export default Comment;