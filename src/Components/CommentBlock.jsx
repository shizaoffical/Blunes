import React from 'react'
import { Link } from 'react-router-dom'
function CommentBlock(props) {
    return (
        <>
            <div class="comment-block">
                <div class="userpic"><img src={props.Image}alt="Larry"/></div>
                <div class="content">
                    <h6 class="author-name">{props.name}</h6><span class="time">{props.time}</span>
                    <p class="comment-text">{props.text}</p>
                    <Link class="reply-link" to={props.reply}>Reply</Link>
                </div>
            </div></>
    )
}

export default CommentBlock