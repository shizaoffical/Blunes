import React from 'react'
import { Link } from 'react-router-dom'
function WorkItem(props) {
    return (
        <>
            <Link className="work-item" to={props.link} data-groups={props.dataGroups}>
                <div className="work-image">
                    <div className="icon-arrow"></div><img src={props.image} alt="Dom Casmurro" />
                </div>
                    <div className="work-description">
                    {props.title &&  <h3 className="work-title">{props.title}</h3>}
                      {props.title2 &&  <h4 class="work-title">{props.title2}</h4>}

                        <ul className="work-services">
                        {props.service1 &&    <li>{props.service1}</li>}
                            {props.service2 && <li>{props.service2}</li>}
                        </ul>
                    </div>
               
            </Link>

        </>
    )
}

export default WorkItem