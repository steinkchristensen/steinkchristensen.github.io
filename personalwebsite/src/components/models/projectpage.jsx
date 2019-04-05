import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Gallery from 'react-grid-gallery';
class ProjectPage extends Component {
	constructor(props){
		super(props);
	}

	render(){
		


		return(
			<>
		<Grid style={{background: '#292929', width: '100%'}}>
			<Cell col={5}><img style={{maxWidth: '100%'}} src={this.props.entryImage}/></Cell>
			<Cell col={7}>
				<div style={{}}>
					<h2 style={{color: 'white'}}>{this.props.title}</h2>
					<h4 style={{color: 'white'}}>{this.props.subtitle}</h4>
				</div>
			</Cell>
		</Grid>
		<Grid style={{ width: '100%', color:'#292929'}}>
			<Cell col={5}>
				<p>{this.props.description}</p>
			</Cell>
			<Cell col={7}>
				<Gallery images={this.props.images}/>
      		</Cell>
			
		</Grid>
		</>
	)}
}

export default ProjectPage;