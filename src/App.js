import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';



const App = () => {
	return (
		<BrowserRouter>
			<div className = "App">
				<Navbar/>
				<Switch>
					<Route exact path = '/' component = { Home } />
					<Route path = '/About' component = { About } />
					<Route path = '/Contact' component = { Contact } />
					<Route path = '/:user' component = { Card } /> 
				</Switch>
			</div>
		</BrowserRouter>
	);

}


export default App;