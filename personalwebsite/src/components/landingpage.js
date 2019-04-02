import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
	render(){
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<span alt='avatar' className='avatarImage'/>
						<div className='bannerText'>
							<h1>Full Stack Web Developer</h1>
							<hr/>
							<p>HTML/CSS | JS | PHP | MySQL | AWS | Apache | React | Node | Express | MongoDB</p>
							<a href='https://www.linkedin.com/in/steinchristensen/' target='_blank'><i class="fab fa-linkedin"></i></a>
							<a href='https://twitter.com/steinparkit' target='_blank'><i class="fab fa-twitter-square"></i></a>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;