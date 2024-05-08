import React from 'react'
import { motion } from "framer-motion"
import ProjectIntro from '../Components/ProjectIntro'
import Image1 from "../../src/Images/Studio/Image_1.png"
import Image2 from "../../src/Images/Studio/Image_2.png"
import Image3 from "../../src/Images/Studio/Image_3.png"
import Image4 from "../../src/Images/Studio/Image_4.png"
import Image5 from "../../src/Images/Studio/Member_1.png"
import Image6 from "../../src/Images/Studio/Member_2.png"
import Image7 from "../../src/Images/Studio/Member_3.png"
import Image8 from "../../src/Images/Studio/Member_4.png"
import Image9 from "../../src/Images/Studio/Member_5.png"
import Image10 from "../../src/Images/Studio/Member_6.png"

import StudioService from '../Components/StudioService'
import ProjectImage from '../Components/ProjectImage'
import StudioMember from '../Components/StudioMember'
import { Link } from 'react-router-dom'

function Studio() {
  return (
    <>
    <motion.div initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.8 }}>
        <main>
			<div class="spacer">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <ProjectIntro projectTittle="Creative Co." projectDescription="We convert your super ideas to elegant design, awesome experiences and working brands."/>
						
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="mar-top-md">
								<div class="page-content-image"><img src={Image1} alt="Creative Co."/></div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="page-content mar-top-lg">
						<div class="row">
							<div class="col-lg-4 col-md-10">
								<h2>We like to build brands for startups</h2>
							</div>
							<div class="col-lg-7 offset-lg-1 col-md-10">
								<p class="lead">We have many years experience and many interesting problems which we solved. We are happy about collaboration with creative people and organizations to provide best design.</p>
								<p class="lead">We transform your ideas into working solutions. Our fundamental principle is to help our clients’ wishes come true. Our work help startups to solve important problems and grow up.</p>
							</div>
						</div>
					</div>
					<div class="mar-top-lg">
						<div class="row">
							<div class="col-lg-6 col-md-12">
								<div class="mar-bot-xs">
									<div class="page-content-image"><img src={Image2} alt="Creative Co."/></div>
								</div>
							</div>
							<div class="col-lg-5 offset-lg-1 col-md-10">
								<div class="page-content">
									<h2>Care and focus only on your brand</h2>
									<p class="lead">Blunes was founded many years ago and has many interesting solved problems. Our multidisciplinary team are <b className='fw-bold'>happy to collaborate</b> with creative people and organizations to provide best design.</p>
									<p class="lead">We are <Link to="/contact">looking for your project.</Link></p>
								</div>
							</div>
						</div>
					</div>
					<div class="page-content mar-top-lg">
						<div class="row">
							<div class="col-lg-10">
								<h2>Multidisciplinary Digital Agency</h2>
							</div>
						</div>
						<div class="row">
                            <StudioService name="Branding"
                            list1="Branding Strategy"
										list2="Research"
										list3="Analytics"
										list4="Logotypes"
										list5="Brandmarks"
										list6="Lettering"
										list7="Visual Identity"
										list8="Brand Guidelines"
                            />
                             <StudioService name="Print"
                           list1="Professional Binding"
                           list2="Presentations"
                           list3="Manuals"
                           list4="Booklets"
                           list5="Document Printing"
                           list6="Book Printing"
                           list7="Annuals"
                           list8="Reports"
                           list9="Print Management"
                            />
                             <StudioService name="Typography"
                          list1="Custom Font Design"
                          list2="Lettering"
                          list3="Calligraphy"
                          list4="Copywriting"
                          list5="Font Guidelines"
                          list6="Consulting Services"
                          list7="Font Licensing"
                            />
                             <StudioService name="Art Direction"
                          list1="Project Management"
                          list2="Communications"
                          list3="Content Strategy"
                          list4="Copywriting"
                          list5="Marketing Materials"
                          list6="Creative Direction"
                            />
						</div>
					</div>
                    <ProjectImage ProjectImage1={Image3} ProjectImage2={Image4}/>
					
					<div class="mar-top-lg">
					<div class="row">
							<div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
								<div class="page-section-title text-center">
									<h2>The Team</h2>
									<p class="project-description">Superheroes, problem solvers, creative thinkers, and branding addicts.</p>
								</div>
							</div>
						</div>
						<div class="mar-top-xs">
							<div class="row">
                                <StudioMember name="Ronald Norman" role="Founder, Creative Director"
                                image={Image5}
                                facebook twitter dribbble
                                 />
                                 <StudioMember name="Ann Hayes" role="Art Directo"
                                image={Image6}
                                 twitter  instagram
                                 />
                                  <StudioMember name="Mark Kelley" role="Lead Designer"
                                image={Image7}
                                behance  dribbble
                                 />
                                 <StudioMember name="Eva Myers" role="Designer"
                                image={Image8}
                                facebook  twitter instagram
                                 />
                                 <StudioMember name="Fred Jackson" role="Project Manage"
                                image={Image9}
                                behance  twitter dribbble
                                 />
                                 <StudioMember name="Barbara Horton" role="Office Manager"
                                image={Image10}
                                instagram  dribbble
                                 />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
    </motion.div>
    </>
  )
}

export default Studio