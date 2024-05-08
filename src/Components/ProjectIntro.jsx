import React from 'react'

function ProjectIntro(props) {
    return (
        <>
            <div className="project-intro mar-top-lg">
                <h1 className="project-title">{props.projectTittle}</h1>
                <p className="project-description">{props.projectDescription} </p>
                {props.projectservice1 &&  <ul className="project-services">
                    <li>{props.projectservice1}</li>
                    {props.projectservice2 && <li>{props.projectservice2}</li>}
                    
                </ul>}
               
            </div>
            
        </>
    )
}

export default ProjectIntro