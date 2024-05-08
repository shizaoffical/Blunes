import React from 'react'

function ProjectBackImage(props) {
  return (
    <>
    <div className="row">
                <div className="col-md-12">
                    <div className="mar-top-lg">
                        <div className="project-image"><img src={props.ProjectBackImage} alt="No Image"/>

                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProjectBackImage