import React from 'react'
import { motion } from "framer-motion"
import Image1 from "../../Images/Journal/Article_1.png"
import Image2 from "../../Images/Journal/Article_2.png"
import Image3 from  "../../Images/Journal/Article_3.png"
import Image4 from "../../Images/Journal/Article_4.png"
import Image5 from "../../Images/Journal/Article_5.png"
import Image6 from "../../Images/Journal/Article_6.png"
import Image7 from "../../Images/Journal/Article_7.png"
import Image8 from "../../Images/Journal/Article_8.png"
import Image9 from "../../Images/Journal/Article_9.png"
import Image10 from "../../Images/Journal/Featured_article.png"
import JournelArticle from '../../Components/JournelArticle'
import { Link } from 'react-router-dom'
function Journel() {
  return (
    <>
    <motion.div initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.7 }}>
      <main id="journal">
			<div class="spacer">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
							<div class="page-intro mar-top-lg">
								<h1 class="page-title">Journal</h1>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="mar-top-md">
								<article class="featured"><a class="smooth-leave" href="journal-single.html">
										<div class="article-image"><img src={Image10} alt="A Lightweight Branding Exercise for Startups"/></div>
										<div class="article-text"><span class="time">July 26</span>
											<h2 class="title">A Lightweight Branding Exercise for Startups</h2>
											<p>A bottom-up, alignment-oriented approach</p>
										</div>
									</a></article>
							</div>
						</div>
					</div>
					<div class="articles-list">
						<div class="row">
              <JournelArticle Image={Image1} 
              title="Branding for Builders" 
              description="How Netflix defined a brand that helped it to build a great product." 
              time="July 23"/>
							<JournelArticle Image={Image2} 
              title="The Psychology of Color in Marketing and Branding" 
              description="The psychology of color is one of the most interesting aspects of marketing" 
              time="July 20"/>
								<JournelArticle Image={Image3} 
              title="It’s a Complicated Time to be a Consumer" 
              description="Why your business should hire a designe" 
              time="July 18"/>
							
						</div>
            
						<div class="row">
            <JournelArticle Image={Image4} 
              title="Branding for Builders" 
              description="‘Better’ will always be a losing game for your brand." 
              time="July 16"/>
							<JournelArticle Image={Image5} 
              title="Printing the Annual Report Books" 
              description="The story of designing &amp; printing personalized books." 
              time="July 15"/>
								<JournelArticle Image={Image6} 
              title="A Five-Minute Guide to Better Typography" 
              description="From a three-part talk series on graphic design." 
              time="July 12"/>
						</div>
						<div class="row">
            <JournelArticle Image={Image7} 
              title="Art Director Mission: Setting a Box of Rules" 
              description="We’ve talked with Jamie McNulty about his profession and the way art director works." 
              time="July 11"/>
							<JournelArticle Image={Image8} 
              title="Brush Calligraphy Quick Start" 
              description="You’ve seen this new modern calligraphy thing." 
              time="July 28"/>
								<JournelArticle Image={Image9} 
              title="You're Working in the Wrong Place" 
              description="Open offices misunderstand psychology and design." 
              time="July 25"/>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="load-more">
							<h2><Link to="/">Load More</Link></h2>
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

export default Journel