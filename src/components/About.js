import React from 'react';
import './Modal.css';


const About = () => {
	return (
		<div>
			<div className = 'modal'>
				<div className = 'modal-content'>
					<h3>I am a modal </h3>
				</div>
			</div>
			<div className ='ui raise very padded text container segment'
			style = {{marginTop:'80px'}}>
				<h3 className = 'ui header'> About </h3>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique neque sed tincidunt ullamcorper. Donec ac condimentum ipsum, vitae bibendum neque. Nunc vehicula scelerisque diam, in dapibus ante. Duis fringilla pharetra suscipit 
				</p>
			</div>
		</div>
	)

}

export default About;