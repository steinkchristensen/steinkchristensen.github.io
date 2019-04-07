import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class CardModal extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
		<Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
			<CardTitle className={`cardTitle ${this.props.cardClass}`}></CardTitle>
				    <CardText>
				    	<h2 className='card-Heading'>{this.props.title}</h2>
				        {this.props.body}
				    </CardText>
				    <CardActions border>
				        <a href={this.props.buttonLink}><Button colored>{this.props.buttonText}</Button></a>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
			</CardMenu>
		</Card>
	)}
}

export default CardModal;