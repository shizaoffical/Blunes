import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
function Contact() {
  return (
    <>
    <motion.div initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.7 }}>
        {/* <div id="contact"> */}
    <main>
			<div class="spacer">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
							<div class="page-intro mar-top-lg">
								<h1 class="page-title">Let's Talk</h1>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-10 offset-md-1">
							<form id="contact-form">
								<p>Hola, my name is
									<input id="contact-name" type="text" name="contact-name" placeholder="Name"/>. I want to order from you 
                                    <span class="select">
										<select id="contact-service">
											<option value="">-</option>
											<option value="Branding">Branding</option>
											<option value="Print">Print</option>
											<option value="Typography">Typography</option>
											<option value="Art Direction">Art Direction</option>
										</select>
                                        </span>
                                        service. I am looking to stay around a budget of <span class="select">
										<select id="contact-budget">
											<option value="">-</option>
											<option value="$10,000">$10,000</option>
											<option value="$20,000">$20,000</option>
											<option value="$30,000">$30,000</option>
											<option value="$40,000">$40,000</option>
										</select></span>. You can contact me at
									<input id="contact-email" type="text" name="contact-email" placeholder="Email"/>to discuss details.
								</p>
								<div class="submit-button"><Link id="contact-submit" to="/">Send</Link></div>
								<div id="contact-response">
									<p>Hey, Amigo! We will contact you later, thanx.</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
        {/* </div>/ */}
        </motion.div>
    </>
  )
}

export default Contact