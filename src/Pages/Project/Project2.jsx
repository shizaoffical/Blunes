import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import ProjectIntro from '../../Components/ProjectIntro'
import ProjectBackImage from '../../Components/ProjectBackImage'
import ProjectImage from '../../Components/ProjectImage'
import Image1 from "../../Images/Project-2/Image_1.png"
import Image2 from "../../Images/Project-2/Image_2.png"
import Image3 from "../../Images/Project-2/Image_3.png"
import Image4 from "../../Images/Project-2/Image_4.png"
import Image5 from "../../Images/Project-2/Image_5.png"
import Image6 from "../../Images/Project-2/Image_6.png"
import Image7 from "../../Images/Project-2/Image_7.png"
import Image8 from "../../Images/Project-2/Image_8.png"
import { Link } from 'react-router-dom'
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
function Project2() {

	const owlRef = useRef(null);

	useEffect(() => {
		const loadOwlCarouselScript = () => {
		  const script = document.createElement('script');
		  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'; // Replace with the actual CDN link for Owl Carousel
		  script.async = true;
		  script.onload = initializeOwlCarousel;
		  document.body.appendChild(script);
		};
	
		const initializeOwlCarousel = () => {
		  const $owl = window.jQuery(owlRef.current);
		  $owl.owlCarousel({
			center: true,
			items: 2,
			margin: 120,
			dots: false,
			responsive: {
			  1440: {
				margin: 120
			  },
			  1024: {
				margin: 64
			  },
			  768: {
				margin: 32
			  },
			  425: {
				margin: 16
			  },
			  375: {
				margin: 16
			  }
			}
		  });
		  const nextSlideHandler = () => {
			$owl.trigger("next.owl.carousel");
		  };
	  
		  const prevSlideHandler = () => {
			$owl.trigger("prev.owl.carousel");
		  };
	  	const nextButton = document.querySelector('.next-slide');
		const prevButton = document.querySelector('.prev-slide');
		nextButton.addEventListener('click', nextSlideHandler);
		prevButton.addEventListener('click', prevSlideHandler);
	
		return () => {
		  // Clean up event listeners and destroy the Owl Carousel instance
		  nextButton.removeEventListener('click', nextSlideHandler);
		  prevButton.removeEventListener('click', prevSlideHandler);
		  $owl.trigger('destroy.owl.carousel');
		};
		};
	
		loadOwlCarouselScript();
		
		return () => {
		  // Clean up Owl Carousel instance if needed
		  const $owl = window.jQuery(owlRef.current);
		  if ($owl.data('owl.carousel')) {
			$owl.trigger('destroy.owl.carousel');
		  }
		};
		
	  }, []);
  


  return (
    <>
    <motion.div initial={{ opacity: 0, y: -150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.7 }}>
<main>
			<div class="spacer">
				<div class="container">
					<div class="row">
						<div class="col-md-8 offset-md-2">
            <ProjectIntro projectTittle="Partner Pages" projectDescription="Partner Pages is a magazine full of beautifully curated content, produced annually." projectservice1="Branding Art" projectservice2=" Direction"/>
							
						</div>
					</div>
          <ProjectBackImage ProjectBackImage={Image1}/>
					<div class="project-content mar-top-md mar-bot-md">
						<div class="row">
							<div class="col-md-10 offset-md-1">
								<p class="lead">It is written by Xero partners, who write inspiring stories to champion change within the finance and accounting industries. Several thousand units were printed and copies were handed out at Xero’s Australian Roadshows and at events throughout the year. Klim Type Foundry's National 2 is the preliminary typeface.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content-slider">
				<div class="navigation">
					<div class="prev-slide"></div>
					<div class="next-slide"></div>
				</div>
				<div class="owl-carousel" ref={owlRef}>
					<div class="slide"><img src={Image2} alt="Partner Pages"/></div>
					<div class="slide"><img src={Image3} alt="Partner Pages"/></div>
					<div class="slide"><img src={Image4} alt="Partner Pages"/></div>
				</div>
			</div>
			<div class="spacer">
				<div class="container">
				<ProjectImage ProjectImage1={Image5} ProjectImage2={Image6} 
        ProjectImage3={Image7} ProjectImage4={Image8}/>

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

export default Project2