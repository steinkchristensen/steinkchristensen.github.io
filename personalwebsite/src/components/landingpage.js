import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
	render(){
		return(
			<div style={{width: '100%', margin: 'auto', height:'100%'}}>
				<Grid className="landing-grid" style={{ height:'100%'}}>
					<Cell col={12}>
						<span alt='avatar' className='avatarImage'/>
						<div className='bannerText'>
							<h1>Full Stack Web Developer</h1>
							<p>I use web developement to help you reach your goals</p>
							<hr/>
							<p>HTML/CSS | JS | PHP | MySQL | AWS | Apache | React | Node | Express | MongoDB</p>
							<a href='https://linkedin.com/in/steinchristensen' target='_blank'><i class="fab fa-linkedin"></i></a>
							<a href='https://twitter.com/steinparkit' target='_blank'><i class="fab fa-twitter-square"></i></a>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;