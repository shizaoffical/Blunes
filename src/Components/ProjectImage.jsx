import React from 'react'

function ProjectImage(props) {
	return (
		<>
			<div className="mar-top-lg">
				<div className="row">
					<div className="col-md-6">
						<div className="project-image"><img src={props.ProjectImage1} alt="No Image" /></div>
					</div>
					<div className="col-md-6">
						<div className="project-image"><img src={props.ProjectImage2} alt="No Image" /></div>
					</div>
				</div>
				{props.ProjectImage3 &&
					<div className="row">
						<div className="col-md-6">
							<div className="project-image"><img src={props.ProjectImage3} alt="Partner Pages" /></div>
						</div>
						<div className="col-md-6">
							<div className="project-image"><img src={props.ProjectImage4} alt="Partner Pages" /></div>
						</div>
					</div>
				}

			</div>
		</>
	)
}

export default ProjectImage