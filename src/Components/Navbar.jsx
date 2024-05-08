import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12"><Link className="logo smooth-leave" to="/"></Link>
              <nav>
                <ul>
                  <li className="current dropdown">
                    <div><span>Work</span>
                      <ul>
                        <li><Link className="smooth-leave" to="/2-columns">2 Columns</Link></li>
                        <li><Link className="smooth-leave" to="/3-columns">3 Columns</Link></li>
                        <li><Link className="smooth-leave" to="/clean">Clean</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown">
                    <div><span>Project</span>
                      <ul>
                        <li><Link className="smooth-leave" to="/project-1">Project 1</Link></li>
                        <li><Link className="smooth-leave" to="/project-2">Project 2</Link></li>
                        <li><Link className="smooth-leave" to="/project-3">Project 3</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li><Link className="smooth-leave" to="/studio">Studio</Link></li>
                  <li><Link className="smooth-leave" to="/journel">Journal</Link></li>
                  {/* <li className="dropdown">
                    <div><span>Journal</span>
                      <ul>
                        <li><Link className="smooth-leave" to="/journel">Journal </Link></li>
                        <li><Link className="smooth-leave" to="/journel-single">Journal Single</Link></li>

                      </ul>
                    </div>
                  </li> */}
                  <li><Link className="smooth-leave" to="/contact">Contact</Link></li>
                </ul>
              </nav><span className="nav-toggle">Menu</span>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom if not already done

// function Navbar() {
//   const [lastScroll, setLastScroll] = useState(0);
//   const [headerHidden, setHeaderHidden] = useState(false);
//   const [navResponsive, setNavResponsive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll > lastScroll && currentScroll >= document.querySelector("header").offsetHeight) {
//         setHeaderHidden(true);
//       } else {
//         setHeaderHidden(false);
//       }
//       setLastScroll(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScroll]);

//   const toggleNav = () => {
//     const header = document.querySelector("header");
//     if (!navResponsive) {
//       document.querySelector(".nav-toggle").textContent = "Menu";
//     }
//     header.classList.toggle("nav-responsive");
//     setNavResponsive(!navResponsive);
//     if (header.classList.contains("nav-responsive")) {
//       document.querySelector(".nav-toggle").textContent = "Close" ;
//     }
//     else{
//       document.querySelector(".nav-toggle").textContent = "Menu" ;
//     }
//   };

//   const toggleDropdown = (event) => {
//     const parent = event.target.parentElement;
//     if (!document.querySelector("header").classList.contains("nav-responsive")) return;

//     if (parent.classList.contains("open")) {
//       parent.querySelector("ul").style.display = "none";
//       parent.classList.remove("open");
//     } else {
//       document.querySelectorAll("header nav ul li.dropdown div").forEach(item => {
//         item.classList.remove("open");
//         item.querySelector("ul").style.display = "none";
//       });
//       parent.classList.add("open");
//       parent.querySelector("ul").style.display = "block";
//     }
//   };

//   return (
//     <header className={headerHidden ? "hide" : ""}>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <Link className="logo smooth-leave" to="/"></Link>
//             <nav>
//               <ul>
//                 <li className="current dropdown" onClick={toggleDropdown}>
//                   <div><span>Work</span>
//                     <ul>
//                       <li><Link className="smooth-leave" to="/">2 Columns</Link></li>
//                       <li><Link className="smooth-leave" to="/work-columns-3">3 Columns</Link></li>
//                       <li><Link className="smooth-leave" to="/work-clean">Clean</Link></li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="dropdown" onClick={toggleDropdown}>
//                   <div><span>Project</span>
//                     <ul>
//                       <li><Link className="smooth-leave" to="/project-1">Project 1</Link></li>
//                       <li><Link className="smooth-leave" to="/project-2">Project 2</Link></li>
//                       <li><Link className="smooth-leave" to="/project-3">Project 3</Link></li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li><Link className="smooth-leave" to="/studio">Studio</Link></li>
//                 <li><Link className="smooth-leave" to="/journal">Journal</Link></li>
//                 <li><Link className="smooth-leave" to="/contact">Contact</Link></li>
//               </ul>
//             </nav>
//             <span className="nav-toggle" onClick={toggleNav}>Menu</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

