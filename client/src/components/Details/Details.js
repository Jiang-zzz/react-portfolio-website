import React from 'react'
import AboutMe from "./AboutMe"
import TechStack from './TechStack'
import '../default.css'
function Details (){
    return(
        <section className="s2">
		<div className="main-container">
			<div className="about-wrapper">
				<AboutMe />
				<div>
				<h4>Tech Stack</h4>
				<TechStack/>
				</div> 
			</div>

		</div>
	</section>
    )
}

export default Details