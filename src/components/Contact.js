import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';


const Contact = () => {
	return (
		<div>
		<Modal/>
			<div className ='ui raise very padded text container segment'
			style = {{marginTop:'80px'}}>
				<Link to = '/alex' className = 'ui header'> Alex </Link>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique neque sed tincidunt ullamcorper. Donec ac condimentum ipsum, vitae bibendum neque. Nunc vehicula scelerisque diam, in dapibus ante. Duis fringilla pharetra suscipit 
				</p>
			</div>
			<div className ='ui raise very padded text container segment'
			style = {{marginTop:'80px'}}>
				<Link to = '/Sarah' className = 'ui header'> Sarah </Link>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique neque sed tincidunt ullamcorper. Donec ac condimentum ipsum, vitae bibendum neque. Nunc vehicula scelerisque diam, in dapibus ante. Duis fringilla pharetra suscipit 
				</p>
			</div>
		</div>
	)

}

export default Contact;