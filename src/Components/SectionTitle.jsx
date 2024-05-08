import React from 'react'

function SectionTitle(props) {
    return (
        <>
            <div className="section-title">
                <h2>{props.Heading}</h2>
                <p>{props.Description}</p>
            </div>
        </>
    )
}

export default SectionTitle