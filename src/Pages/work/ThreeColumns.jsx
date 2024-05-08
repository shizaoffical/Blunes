import React , {useEffect}from 'react'
import HeroSection from '../../Components/HeroSection'
import WorkItem from '../../Components/WorkItem'
import Image from "../../Images/Homepage_intro.png"
import Image1 from "../../Images/Works/Work_1.png"
import Image2 from "../../Images/Works/Work_2.png"
import Image3 from "../../Images/Works/Work_3.png"
import Image4 from "../../Images/Works/Work_4.png"
import Image5 from "../../Images/Works/Work_5.png"
import Image6 from "../../Images/Works/Work_6.png"
import Image7 from "../../Images/Works/Work_7.png"
import Image8 from "../../Images/Works/Work_8.png"
import Image9 from "../../Images/Works/Work_9.png"
import Image10 from "../../Images/Works/Work_10.png"
import Image11 from "../../Images/Works/Work_11.png"
import Image12 from "../../Images/Works/Work_12.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import "../../css/Style.css"
import "../../css/AnimsitionMin.css"
import "../../css/OwlCarouselMin.css"
import "../../css/BootstrapGridMin.css"
import $ from 'jquery';
import Shuffle from 'shufflejs';
function ThreeColumns() {
    useEffect(() => {
        const works = () => {
            const $grid = $(".works-grid"); // Use jQuery to select the element
            if ($grid.length <= 0) return;

            const shuffle = new Shuffle($grid, {
                itemSelector: ".work-item",
                gutterWidth: $(".works-gutter").width(),
                speed: 500
            });

            $(".works .open-filters").on("click", function() {
                $(".fullscreen-filters").addClass("open");

                $("html, body").animate({
                    scrollTop: $(this).offset().top - 48
                }, 400);
            });

            $(".works .close-filters").on("click", function() {
                $(".fullscreen-filters").removeClass("open");
            });

            $(".works .works-filters ul li").on("click", function() {
                const filtersValue = $.parseJSON($(this).attr("data-group"));

                shuffle.filter(filtersValue);
                if (filtersValue.join("") === "*") {
                    shuffle.filter();
                }

                $grid.find(".work-item").find(".animate").removeClass("appear");

                $(".works .open-filters").html($(this).clone().children().remove().end().text());

                $(".works .works-filters ul li").removeClass("current");
                $(this).addClass("current");
                $(".fullscreen-filters").removeClass("open");
            });

            $(".works .works-filters ul li").each(function() {
                const filterGroup = $.parseJSON($(this).attr("data-group"));
                let counter = 0;

                $.each(filterGroup, function(index, value) {
                    if (value === "*") {
                        counter = $grid.find(".work-item").length;
                    }
                    $grid.find(".work-item").each(function() {
                        const workGroup = $.parseJSON($(this).attr("data-groups"));
                        if ($.inArray(value, workGroup) !== -1) {
                            counter++;
                        }
                    });
                });

                $(this).find("span").text(counter);
            });

            // Arrow icon position in Clean layout
            $(".works.clean").find(".work-item").each(function() {
                const $arrow = $(this).find(".icon-arrow");
                const $desc = $(this).find(".work-description");
                $arrow.css("bottom", $desc.outerHeight() / 2 + "px");
            });
        };

        works(); // Call the function after the component is mounted

        // Cleanup function if necessary
        return () => {
            // Cleanup logic if needed
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <motion.div initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ duration: 0.7 }}>
        
    <main>
    <HeroSection Image={Image} heading1="Your Brand" heading2="Matters"/>
    <section class="works columns-3 mar-top-lg">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-md-12">
							<div class="section-title animate">
								<h2>You’re in good company</h2>
								<p>Our work help startups to solve important problems and grow up. We have many years experience and many interesting problems which we solved.</p>
							</div>
							<div class="works-filters">Shown: <span class="open-filters">All Projects</span>
								<div class="fullscreen-filters">
									<div class="close-filters">Close</div>
									<ul>
										<li class="current" data-group="[&quot;*&quot;]">All Projects<span></span></li>
										<li data-group="[&quot;branding&quot;]">Branding<span></span></li>
										<li data-group="[&quot;print&quot;]">Print<span></span></li>
										<li data-group="[&quot;typography&quot;]">Typography<span></span></li>
										<li data-group="[&quot;art direction&quot;]">Art Direction<span></span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="works-grid">
								<div class="works-gutter"></div>
                              
                                  <WorkItem 
           dataGroups="[&quot;branding&quot;]" 
           image={Image1} 
           title2="Dom Casmurro" 
           service1="Branding"
           />
           <WorkItem 
           dataGroups="[&quot;branding&quot;]" 
           image={Image2} 
           title2="Self-Cultivation for Designers" 
           service1="Branding"/>
           <WorkItem 
           dataGroups="[&quot;typography&quot;]" 
           image={Image3} 
           title2="Catalogue — Voice &amp; Vote" 
           service1="Typography"/>
           <WorkItem 
           dataGroups="[&quot;art direction&quot;]" 
           image={Image4} 
           title2="Booklet with Sport Grids" 
           service1="Art Direction"/>
           <WorkItem 
           dataGroups="[&quot;print&quot;]" 
           image={Image5} 
           title2="The Rise of Andy Warhol — Robert Hughes" 
           service1="Print"/>
           <WorkItem 
           dataGroups="[&quot;typography&quot;]" 
           image={Image6} 
           title2="Design 360° Magazine" 
           service1="Typography"/>
             <WorkItem 
           dataGroups="[&quot;typography&quot;]" 
           image={Image7} 
           title2="Open Your Charisma" 
           service1="Typography"/>
           <WorkItem 
           dataGroups="[&quot;branding&quot;]" 
           image={Image8} 
           title2="Flyby" 
           service1="Branding"/>
             <WorkItem 
           dataGroups="[&quot;art direction&quot;,&quot;print&quot;]" 
           image={Image9} 
           title2="Guy Oberson — Sous La Peau Du Monde" 
           service1="Art Direction"
		   service2="Print"
           />
             <WorkItem 
           dataGroups="[&quot;print&quot;]" 
           image={Image10} 
           title2="Precisiones Sobre La Incerteza" 
           service1="Print"/>
              <WorkItem 
           dataGroups="[&quot;art direction&quot;]" 
           image={Image11} 
           title2="Transpassar: Poética Do Movimento" 
           service1="Art Direction"/>
           
              <WorkItem 
           dataGroups="[&quot;branding&quot;]" 
           image={Image12} 
           title2="Akurat Law &amp; Consultancy" 
           service1="Branding"/>
							</div>
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
			</section>
    </main>
     </motion.div>
  )
}

export default ThreeColumns