import React from 'react'
import { Link } from 'react-router-dom'

function JournelArticle(props) {
    return (
        <>
            <div class="col-md-4">
                <article>
                    <Link class="smooth-leave" to="/journel-single">
                    <div class="article-image">
                        <div class="icon-eye">
                            <svg>
                                <path class="outer-oval" d="M 3 16 C 3 13, 12 3, 24 3 C 36 3, 45 13, 45 16 C 45 19, 36 29, 24 29 C 12 29, 3 19, 3 16 Z"></path>
                                <circle class="inner-oval" cx="24" cy="16" r="7"></circle>
                            </svg>
                        </div><img src={props.Image} alt="A Five-Minute Guide to Better Typography"/>
                    </div>
                    <div class="article-text">
                        <h4 class="title">{props.title}</h4>
                        <p>{props.description}</p><span class="time">{props.time}</span>
                    </div>
                </Link>
                </article>
            </div>
        </>
    )
}

export default JournelArticle