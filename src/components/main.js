import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import Articles from './articles';
import {Switch, Route} from 'react-router-dom';


const Main =  () => (
	<Switch>
		<Route exact path='/' component={LandingPage} />
		<Route path='/aboutme' component={AboutMe} />
		<Route path='/articles' component={Articles} />
		<Route path='/projects' component={Projects} />
		<Route path='/resume' component={Resume} />
		<Route path='/contact' component={Contact} />
	</Switch>
)

export default Main;