import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component {
	
	render(){
		return(
			<div >
				<Grid className='projects-grid'>
					<Cell col={4}>
						<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
						    <CardTitle className='cardTitle ceoAdvisoryCard'></CardTitle>
						    <CardText>
						    	<h2 className='card-Heading'>ParkIt</h2>
						        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						        Mauris sagittis pellentesque lacus eleifend lacinia...
						    </CardText>
						    <CardActions border>
						        <Button colored>Get Started</Button>
						    </CardActions>
						    <CardMenu style={{color: '#fff'}}>
						        <IconButton name="share" />
						    </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
						    <CardTitle className='cardTitle ceoAdvisoryCard'></CardTitle>
						    <CardText>
						    	<h2 className='card-Heading'>CEO Advisory Group</h2>
						        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						        Mauris sagittis pellentesque lacus eleifend lacinia...
						    </CardText>
						    <CardActions border>
						        <Button colored>Get Started</Button>
						    </CardActions>
						    <CardMenu style={{color: '#fff'}}>
						        <IconButton name="share" />
						    </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
						    <CardTitle className='cardTitle ceoAdvisoryCard'></CardTitle>
						    <CardText>
						    	<h2 className='card-Heading'>Paul Gibbons</h2>
						        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						        Mauris sagittis pellentesque lacus eleifend lacinia...
						    </CardText>
						    <CardActions border>
						        <Button colored>Get Started</Button>
						    </CardActions>
						    <CardMenu style={{color: '#fff'}}>
						        <IconButton name="share" />
						    </CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
						    <CardTitle className='cardTitle ceoAdvisoryCard'></CardTitle>
						    <CardText>
						    	<h2 className='card-Heading'>Stock Balancer</h2>
						        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						        Mauris sagittis pellentesque lacus eleifend lacinia...
						    </CardText>
						    <CardActions border>
						        <Button colored>Get Started</Button>
						    </CardActions>
						    <CardMenu style={{color: '#fff'}}>
						        <IconButton name="share" />
						    </CardMenu>
						</Card>
					</Cell>
				</Grid>
			</div>
		);
		
	}
}

export default Projects;