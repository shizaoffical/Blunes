import React from 'react'
 
function HeroSection(props) {
    return (
        <>
            <div className="spacer">
                <div className="intro">
                    <div className="intro-image"><img src={props.Image} alt="Your Brand Matters" /></div>
                    <div className="intro-text">
                        <h1>{props.heading1}<br />{props.heading2}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection