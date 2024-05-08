import React from 'react'
import { motion } from "framer-motion"
import ProjectImage from '../../Components/ProjectImage'
import Image1 from "../../Images/Project-3/Image_1.png"
import Image2 from "../../Images/Project-3/Image_2.gif"
import Image3 from "../../Images/Project-3/Image_3.gif"
import Image4 from "../../Images/Project-3/Image_4.png"
import Image5 from "../../Images/Project-3/Image_5.png"
import Image6 from "../../Images/Project-3/Image_6.png"
import { Link } from 'react-router-dom'
function Project3() {
  return (
    <><motion.div initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.7 }}>
      	<main>
			<div class="spacer">
				<div class="intro">
					<div class="intro-image"><img src={Image1} alt="Damoon"/></div>
					<div class="intro-text">
						<h1>Damoon</h1>
					</div>
				</div>
				<div class="container">
					<div class="project-content mar-top-lg">
						<div class="row">
							<div class="col-md-8 md-offset-2">
								<h3>Brand by Chaehoon Moon</h3>
								<p>CFC developed the visual identity of Damoon, a dinnerware brand by Chaehoon Moon. She creates products with a mixture of Korean traditional materials such as Ottchil and Yuhgee, and develops unique ways of using them. Each product is elegantly handmade and possess all different identity.</p>
								<ul class="project-services">
									<li>Branding</li>
									<li>Art Direction</li>
								</ul>
							</div>
						</div>
            <ProjectImage ProjectImage1={Image2} ProjectImage2={Image3}/>
						<div class="mar-top-lg">
							<div class="row">
								<div class="col-lg-5 col-md-12">
									<div class="project-image"><img src={Image4} alt="Damoon"/></div>
								</div>
								<div class="col-lg-6 col-md-12 offset-lg-1">
									<div class="project-content mar-top-xs">
										<h3>The Material</h3>
										<p>Yughee and Ottchil have long been used for dinnerware in Korea. It takes so many steps to produce each products; alloy of copper (72%) and zinc (22%), creating mold for casting metals, pouring molten metal into a cast, tempering, polishing, applying lacquer.</p>
									</div>
								</div>
							</div>
						</div>
            <ProjectImage ProjectImage1={Image5} ProjectImage2={Image6} />
					</div>
					<div class="next-project">
						<div class="row">
							<div class="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
								<p>Next Project</p>
								<h2><Link href="/">Dom Casmurro</Link></h2>
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

export default Project3