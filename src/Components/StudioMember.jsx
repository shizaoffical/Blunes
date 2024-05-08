import React from 'react'
import { Link } from 'react-router-dom'

function StudioMember(props) {
    return (
        <>
            <div class="col-lg-4 col-md-6">
                <div class="studio-member">
                    <div class="studio-member-photo">
                        <div class="social-links">
                            <ul>
                              {props.twitter && <li><Link class="twitter" to="/"></Link></li>}  
                              {/* {props.dribbble && <li><Link class="dribbble" to="/"></Link></li>} */}
                               {props.instagram && <li><Link class="instagram" to="/"></Link></li>}
                               {props.facebook && <li><Link class="facebook" to="/"></Link></li>}
                               {props.behance &&<li><Link class="behance" to="/"></Link></li>}
                               {props.dribbble && <li><Link class="dribbble" to="/"></Link></li>}
                            </ul>
                        </div><img src={props.image} alt="Ronald Norman"/>
                    </div>
                    <h4 class="name">{props.name}</h4>
                    <p class="role">{props.role}</p>
                </div>
            </div>
        </>
    )
}

export default StudioMember