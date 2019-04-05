import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className='headerColor' title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'monospace'}} to='/'>Stein Christensen</Link>} scroll>
                <Navigation>
                    
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </Navigation>
            </Header>
            <Drawer title="Stein Christensen" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'monospace'}} to='/'>Stein Christensen</Link>}>
                <Navigation>
                    
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </Navigation>
            </Drawer>
            <Content>
                <Main />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
