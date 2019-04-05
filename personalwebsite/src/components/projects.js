import React, { Component } from 'react';
import ProjectPage from './models/projectpage'
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component {
	constructor(props){
		super(props);
		this.state={
			activeTab: 0
		}
	}
	toggleCatagories(){
		if(this.state.activeTab === 0 ){
			const images =
					[{
					        src: process.env.PUBLIC_URL + '/img/parkit1.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/parkit1.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 174,
					        caption: "After Rain (Jeshu John - designerspics.com)"
					},
					{
					        src: process.env.PUBLIC_URL + '/img/parkit2.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/parkit2.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 212,
					        caption: "Boats (Jeshu John - designerspics.com)"
					},

					{
					        src: process.env.PUBLIC_URL + '/img/parkit3.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/parkit3.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 212
					}]
				return(
				
					<>
					<ProjectPage images={images} entryImage={process.env.PUBLIC_URL + '/img/parkitentry.png'} title='ParkIt' subtitle="A monthly parking management system to streamline parking operations." description="As CTO and co-founder, I have worked with my business partner to identify a gap in the market for a robust but easy to use cloud based monthly parking management software. I am the sole developer responsible for creating and maintaining this web application. Our system helps parking operations grow without needing to hire additional staff to handle invoicing, applications, and accounting."/>
					</>
				);
							
		}else if(this.state.activeTab === 1 ){
				const images =
					[{
					        src: process.env.PUBLIC_URL + '/img/portfolio1.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/portfolio1.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 174,
					}]
				return(
				
					<>
					<ProjectPage images={images} entryImage={process.env.PUBLIC_URL + '/img/portfolioentry.png'} title='Portfolio Manager' subtitle="A stock management tool to organize your allocations." description="This tool stores your stocks and compares your current asset class allocations to your goal allocations based on live stock price data."/>
					</>
				);
		}else if(this.state.activeTab === 2 ){
				const images =
					[{
					        src: process.env.PUBLIC_URL + '/img/portfolio1.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/paul1.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 174,
					},
					{
					        src: process.env.PUBLIC_URL + '/img/paul2.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/paul2.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 212,
					},

					{
					        src: process.env.PUBLIC_URL + '/img/paul3.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/paul3.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 212
					}]
				return(
				
					<>
					<ProjectPage images={images} entryImage={process.env.PUBLIC_URL + '/img/paulentry.png'} title='Paul Gibbons' subtitle="A virtual podium to challenge current ways of thinking." description="This website was created for a client who provides keynotes, blogs, podcasts, and books to individuals who are interested in the intersection of science and philosophy. His goal was to grow his audience and expand his reach as a recognized authority. As a result of his hard work and creativity the website redesign gave him a platform to share his unique content and draw in."/>
					</>
				);
		}else if(this.state.activeTab === 3 ){
				const images =
					[{
					        src: process.env.PUBLIC_URL + '/img/ceo1.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/ceo1.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 174,
					        caption: "After Rain (Jeshu John - designerspics.com)"
					},
					{
					        src: process.env.PUBLIC_URL + '/img/ceo2.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/ceo2.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 212,
					        caption: "Boats (Jeshu John - designerspics.com)"
					},

					{
					        src: process.env.PUBLIC_URL + '/img/ceo3.jpg',
					        thumbnail: process.env.PUBLIC_URL + '/img/ceo3.jpg',
					        thumbnailWidth: 320,
					        thumbnailHeight: 212
					}]
				return(
				
					<>
					<ProjectPage images={images} entryImage={process.env.PUBLIC_URL + '/img/ceoadvisoryentry.png'} title='CEO Advisory' subtitle="An online library to educate potential clients on a new way of viewing their organization." description="This website was created for a client who owns a credit union merger advisory firm. His goal was to position his company as a thought leader in the industry and needed an online presence to act as a library of whitepapers and information. As a result of the website rebuilt and new content driven marketing strategy, website traffic increased over 250% and continues to generate valuable business."/>
					</>
				);
		}
	}
	

	render(){
		return(
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId})} ripple> 
					<Tab>Streamline</Tab>
					<Tab>Organize</Tab>
					<Tab>Challenge</Tab>
					<Tab>Educate</Tab>
				</Tabs>
				<Grid className='projects-grid'>
					{this.toggleCatagories()}
				</Grid>
			</div>
		);
		
	}
}

export default Projects;