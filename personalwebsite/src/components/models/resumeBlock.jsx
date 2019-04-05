import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class ResumeBlock extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
		<Grid>
			<Cell col={4}>
				<p>{this.props.startYear} - {this.props.endYear}</p>
			</Cell>
			<Cell col={8}>
				<h4 style={{margin: '0px'}}>{this.props.expirenceName}</h4>
				<h6 style={{marginTop: '0px'}}>{this.props.title}</h6>
				<p>{this.props.description}</p>
			</Cell>
		</Grid>
	)}
}

export default ResumeBlock;