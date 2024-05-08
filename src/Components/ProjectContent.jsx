import React from 'react'

function ProjectContent(props) {
  return (
    <>
    <div className="project-content mar-top-lg">
						<div className="row">
							<div className="col-md-3 offset-md-1">
								<h3 className="title">{props.ProjectContentTitle}</h3>
							</div>
							<div className="col-md-7">
								<p>{props.ProjectContentDescription}</p>
							</div>
						</div>
					</div>
    </>
  )
}

export default ProjectContent