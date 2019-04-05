import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import ResumeBlock from './models/resumeBlock.jsx'


class Resume extends Component {
	render(){
		return(
			<Grid>
				<Cell col={4}>
					<div style={{textAlign: 'center'}}>
						<div class='avatarImage'/>
					</div>
					<h2 style={{paddingTop: '2em'}}>Stein Christensen</h2>
					<h4 style={{color: 'grey'}}>Programmer</h4>
					<hr style={{borderTop: '3px solid #860000'}}/>
					<p style={{fontStyle: 'italic'}}>"Be humble. Be hungery. And always be the hardest worker in the room."</p>
					<p>-- Dwayne "The Rock" Johnson </p>
					<hr style={{borderTop: '3px solid #860000'}}/>
					<h5>Email</h5>
					<p>steinc95@gmail.com</p>
					<h5>Website</h5>
					<p><a href='steinkchristensen.github.io'>www.steinkchristensen.github.io</a></p>
				</Cell>
				<Cell col={8} className='resumeRightCol'>
					<h1>Expirence</h1>
					<ResumeBlock startYear='2018' endYear='Present' expirenceName='ParkIt' title="CTO" description='Launched and maintained an automated invoicing, accounting, and customer information management system for parking companies.'/>
					<ResumeBlock startYear='2017' endYear='2017' expirenceName='Travelport' title="Project Manager Intern" description='Helped guide a team through transition to agile development from waterfall development on a piece of legacy software.'/>
					<ResumeBlock startYear='2015' endYear='Present' expirenceName='Freelance Web Designer' title="" description='Help clients develop vision and objective for websites. Create websites based on customer technical and functional requirements.'/>
					<hr style={{borderTop: '3px solid #860000'}}/>
					<h1>Education</h1>
					<ResumeBlock startYear='2014' endYear='2017' expirenceName='Colorado State University' title="BS in Computer Information Systems" description='Led Entreprenuership Club and took courses in programming, database design, systems analysis, project management, and more.'/>
					<h1>Skills</h1>
					<Grid col={12}>
						<Cell col={4}><i class="fas fa-plus-square"></i> Systems Design</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Project Management</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> MongoDB</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Express</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> React</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Node.js</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> PHP</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Apache</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Linux</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> AWS Routes, Balancing, EC2</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Javascript</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> jQuery</Cell>
						<Cell col={4}><i class="fas fa-plus-square"></i> Stripe</Cell>
					</Grid>
					
				</Cell>
			</Grid>
		)
	}
}

export default Resume;