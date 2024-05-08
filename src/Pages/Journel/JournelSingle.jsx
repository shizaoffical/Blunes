import React from 'react'
import { motion } from "framer-motion"
import ProjectBackImage from '../../Components/ProjectBackImage'
import Image1 from "../../Images/Journal/Featured_article.png"
import { Link } from 'react-router-dom'
import CommentBlock from '../../Components/CommentBlock'
import Image2 from "../../Images/Journal/users/User_2.png"
import Image3 from "../../Images/Journal/users/User_3.png"
import Image4 from "../../Images/Journal/users/User_4.png"
import Image5 from "../../Images/Journal/users/User_5.png"
import Image6 from "../../Images/Journal/users/User_5.png"

function JournelSingle() {
  return (
    <>
    <motion.div initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.7 }}>
     	<main id="journal">
			<div class="spacer">
				<article class="single">
					<div class="container">
						<div class="row">
							<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
								<div class="mar-top-lg"><span class="time">July 26</span><Link class="comments-link" to="#article-comments">5 Comments</Link>
									<h2 class="article-title">A Lightweight Branding Exercise for Startups</h2>
									<p>A bottom-up, alignment-oriented approach</p>
								</div>
							</div>
						</div>
            <ProjectBackImage ProjectBackImage={Image1}/>
						<div class="row">
							<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
								<p>While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
								<ul>
									<li><b>Virgin America </b>is about quality, fun, innovation, challenging assumptions. You can see it in purple aircraft lighting and quirky safety videos.</li>
									<li><b>Honda </b>is about affordable quality and trust. You can see it in reliable, albeit generic-looking vehicles, and simple and approachable visual design.</li>
									<li><b>Ikea </b>is about cost-consciousness, simplicity and togetherness. You can see it in incredibly affordable furniture, family-oriented stores, and approachable visual design.</li>
								</ul>
								<p>Building a brand is a long-term commitment which results from thousands of interactions between a customer and the brand’s touch points over time.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-10 offset-md-1">
								<div class="content-quote">
									<p>When your values are clear to you, making decisions becomes easier.</p><span class="author">Roy E. Disney</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
								<p>Startups lack the time to develop this relationship: it’s a race against the clock, and every dollar spent needs to bring the company closer to validation and traction. But users impressions — especially first impressions — matter greatly. How can a startup make the most of its branding efforts for the best results?</p>
								<p>Here I describe a simple branding exercise I’ve used and evolved with the companies at Expa with success. It can help your team get into alignment and articulate the core attributes of your brand. The output will enable designers to define how it looks, writers to how it speaks, and for any vendor or team member to make coherent decisions by themselves. And it won’t cost you more than two 90-minute sessions and a few dozen sticky-notes.</p>
								<div class="mar-top-xs">
									<h3>The Basic Idea</h3>
									<p>This exercise has four phases:</p>
									<ol>
										<li><b>Brainstorm possible values and attributes for your brand</b></li>
										<li><b>Separate those into what belongs and doesn’t belong to it</b></li>
										<li><b>Group the ones which belong into abstracted groups</b></li>
										<li><b>Distill them into values, key attributes and analogies</b></li>
									</ol>
									<p>Every brand stakeholder in your company should take part, so if your team fits in a room, get them of all in there. If it’s larger, get the people who’d be expressing the brand day-to-day: designers, marketers, executives, salespeople, recruiters. You can also bring whoever demonstrates interest — you want motivated people brainstorming. In any case, just don’t do this by yourself: you’ll end up with a limited perspective.</p>
									<p>Once you’ve listed the participants, schedule a 90-minute block for the first session in a room with whiteboards or foam boards. Get plenty of colorful sticky-notes (at least 40 per person) and Sharpies for everyone. Don’t use fine point pens so ideas can later be read from a distance. Snacks could be handy too.</p>
								</div>
								<div class="article-share"><span>Share:</span>
									<ul>
										<li><Link class="facebook" to="/journel-single">Facebook</Link></li>
										<li><Link class="twitter" to="/journel-single">Twitter</Link></li>
										<li><Link class="linkedin" to="/journel-single">LinkedIn</Link></li>
									</ul>
								</div>
								<div class="divider"></div>
							</div>
						</div>
						<div class="next-article">
							<div class="row">
								<div class="col-lg-8 offset-lg-2 col-md-12">
									<p>Next Article</p>
									<h2><Link to="#">The Psychology of Color in Marketing and Branding</Link></h2>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
			<div class="divider"></div>
			<div class="spacer">
				<div class="container">
					<div id="article-comments">
						<div class="row">
							<div class="col-md-6">
								<div class="comments-list">
									<h3>Comments</h3>
									<div class="mar-top-xs">
                    <CommentBlock 
                    reply="Reply" 
                    text="Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags from recycled plastic and we are looking to do some brand exercises in the near future. This should help!" name="Larry" 
                    time="July 26 at 8:20 PM" 
                    Image={Image2}/>
                       <CommentBlock 
                    reply="Reply" 
                    text="Such a great article, thanks for sharing" name="Evelyn" 
                    time="July 25 at 11:17 AM" 
                    Image={Image3}/>
                     <CommentBlock 
                    reply="Reply" 
                    text="Agree with you!" name="Barry" 
                    time="July 25 at 12:32 PM" 
                    Image={Image4}/>
                      <CommentBlock 
                    reply="Reply" 
                    text="Now that we have working on refining our branding, this is super helpful." name="Frederick" 
                    time="July 23 at 8:42 PM" 
                    Image={Image5}/>
                      <CommentBlock 
                    reply="Reply" 
                    text="Love this article. It’s useful and really helpful. Especially for people who have no idea about branding." name="Eliza" 
                    time="July 22 at 5:12 PM" 
                    Image={Image6}/>
									</div>
								</div>
							</div>
							<div class="col-md-5 offset-md-1">
								<div class="comment-leave">
									<h3>Leave a Comment</h3>
									<form>
										<div class="form-field">
											<label for="comment-text">Comment</label>
											<textarea name="comment-text" id="comment-text" placeholder="Write a comment here..."></textarea>
										</div>
										<div class="form-field">
											<label for="comment-name">Name</label>
											<input type="text" name="comment-name" id="comment-name" placeholder="Your name"/>
										</div>
										<div class="form-field">
											<label for="comment-email">Email</label>
											<input type="text" name="comment-email" id="comment-email" placeholder="Your email"/>
										</div>
										<input type="submit" id="comment-submit" value="Send"/>
									</form>
								</div>
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

export default JournelSingle