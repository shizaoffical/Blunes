import React from 'react'
import ProjectIntro from '../../Components/ProjectIntro'
import ProjectBackImage from '../../Components/ProjectBackImage'
import ProjectContent from '../../Components/ProjectContent'
import ProjectImage from '../../Components/ProjectImage'



import Image1 from "../../Images/Project-1/Image_1.png"
import Image2 from "../../Images/Project-1/Image_2.gif"
import Image3 from "../../Images/Project-1/Image_3.png"
import Image4 from "../../Images/Project-1/Image_4.png"
import Image5 from "../../Images/Project-1/Image_5.png"
import Image6 from "../../Images/Project-1/Image_6.png"
import Image7 from "../../Images/Project-1/Image_7.png"
import Image8 from "../../Images/Project-1/Image_8.png"
import Image9 from "../../Images/Project-1/Image_9.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


function Project1() {
  return (
    <>
<motion.div initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.7 }}>
    <main>
			<div className="spacer">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <ProjectIntro projectTittle="Flyby" projectDescription="Flyby is a company on a journey. As one of America’s newest, most unique start-up brands, it’s steadily building a devoted community of folk who don’t have time for hangovers. Our challenge was to create a brand that brings to life their vision of drinking smarter and living better." projectservice1="Branding"/>
							
						</div>
					</div>
                    <ProjectBackImage ProjectBackImage={Image1}/>
                    <ProjectContent ProjectContentTitle="Flyby Your Hangover" ProjectContentDescription="Inspired by the name of the product, we created the Flyby 'loop' as a visual representation of the product and how it allows you to 'fly by your hangover'. The loop is infinitely adaptable to its surroundings; be that the brand logo, typography, imagery or iconography and provides a flexible brand asset that is instantly identifiable to the Flyby brand. With help from James Huson, we developed an animation style to bring a life of it's own to the loop device."/>
				
					<div className="mar-top-lg">
						<div className="row">
							<div className="col-md-5">
								<div className="project-image"><img src={Image2} alt="Flyby"/></div>
							</div>
							<div className="col-md-5 offset-md-2">
								<div className="mar-top-xs">
									<div className="project-image"><img src={Image3} alt="Flyby"/></div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 offset-md-4">
								<div className="mar-top-sm">
									<div className="project-image"><img src={Image4} alt="Flyby"/></div>
								</div>
							</div>
						</div>
					</div>
                    <ProjectContent ProjectContentTitle="A Punchy Personality" ProjectContentDescription="We played heavily on the name of the product and connected it to real life 'hangover' situations in order to bring personality and a friendly, realistic tone to a market that can otherwise be quite dull and boring."/>
					<ProjectImage ProjectImage1={Image5} ProjectImage2={Image6}/>
					<div className="row">
						<div className="col-md-10 offset-md-1">
							<div className="content-quote mar-top-lg">
								<p>The new Flyby identity is simple, welcoming and memorable — like the product itself, the brand is a direct challenge to a category that is generally boring and full of jargon.</p><span className="author">Sam Lane, Co-Founder @ Alphabet</span>
							</div>
						</div>
					</div>
                    <ProjectImage ProjectImage1={Image7} ProjectImage2={Image8}/>

                   
                    <ProjectContent ProjectContentTitle="The Result" ProjectContentDescription="We created a comprehensive set of guidelines to help Flyby bring the brand to life across all channels. But we continue to work closely together, developing their internal and external communications."/>
                    <ProjectBackImage ProjectBackImage={Image9}/>
					
					<div className="next-project">
						<div className="row">
							<div className="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
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

export default Project1