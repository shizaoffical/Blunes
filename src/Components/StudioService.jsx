import React from 'react'

function StudioService(props) {
  return (
    <>
    <div class="col-lg-3 col-md-6">
								<div class="studio-services">
									<h4>{props.name}</h4>
									<ul>
										<li>{props.list1}</li>
										<li>{props.list2}</li>
										<li>{props.list3}</li>
										<li>{props.list4}</li>
										<li>{props.list5}</li>
										<li>{props.list6}</li>
										<li>{props.list7} </li>
										{props.list8 && <li>{props.list8} </li>}
										{props.list9 && <li>{props.list9} </li>}
										{props.list10 && <li>{props.list10} </li>}
										{props.list11 && <li>{props.list11} </li>}
										{props.list12 && <li>{props.list12} </li>}

									</ul>
								</div>
							</div>
    </>
  )
}

export default StudioService