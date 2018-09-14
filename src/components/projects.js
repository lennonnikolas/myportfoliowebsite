import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
//import ProjectCard from './ProjectCards/projectCards';
import UnderConstruction from './UnderConstruction/UnderConstruction';
import Footer from './footer';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    };

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <UnderConstruction />
                /*
                <div className="projects-grid">
                    <ProjectCard 
                    textColor="white"
                    project="React" 
                    number={1} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <ProjectCard 
                    textColor="white"
                    project="React" 
                    number={2} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <ProjectCard
                    textColor="white"
                    project="React" 
                    number={3} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                </div>
                */
            )
        } else if(this.state.activeTab === 1) {
            return (
                <UnderConstruction />
                /*
                <div className="projects-grid">
                    <ProjectCard
                    textColor="black" 
                    project="SQL" 
                    number={1} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://www.logolynx.com/images/logolynx/0c/0cad65e12fd7f5fa4b1ffba6d502c759.png" />
                    <ProjectCard
                    textColor="black" 
                    project="SQL" 
                    number={2} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://www.logolynx.com/images/logolynx/0c/0cad65e12fd7f5fa4b1ffba6d502c759.png" />
                    <ProjectCard
                    textColor="black" 
                    project="SQL" 
                    number={3} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://www.logolynx.com/images/logolynx/0c/0cad65e12fd7f5fa4b1ffba6d502c759.png" />
                </div>
                */
            )
        } else if(this.state.activeTab === 2) {
            return (
                <UnderConstruction />
                /*
                <div className="projects-grid">
                    <ProjectCard
                    textColor="black"
                    project="ASP.NET" 
                    number={1} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://jshype.com/img/vuejs.png" />
                    <ProjectCard
                    textColor="black" 
                    project="ASP.NET" 
                    number={2} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://jshype.com/img/vuejs.png" />
                    <ProjectCard
                    textColor="black" 
                    project="ASP.NET" 
                    number={3} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://jshype.com/img/vuejs.png" />
                </div>
                */
            )
        } else if (this.state.activeTab === 3) {
            return (
                <UnderConstruction />
                /*
                <div className="projects-grid">
                    <ProjectCard
                    textColor="black" 
                    project="C#" 
                    number={1} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://png.icons8.com/color/1600/c-programming.png" />
                    <ProjectCard
                    textColor="black"  
                    project="C#" 
                    number={2} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://png.icons8.com/color/1600/c-programming.png" />
                    <ProjectCard
                    textColor="black"  
                    project="C#" 
                    number={3} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://png.icons8.com/color/1600/c-programming.png" />
                </div>
                */
            )
        } else if (this.state.activeTab === 4) {
            return (
                <UnderConstruction />
                /*
                <div className="projects-grid">
                    <ProjectCard
                    textColor="black" 
                    project="C++" 
                    number={1} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://png.icons8.com/color/1600/c-programming.png" />
                    <ProjectCard
                    textColor="black"  
                    project="C++" 
                    number={2} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://png.icons8.com/color/1600/c-programming.png" />
                    <ProjectCard
                    textColor="black"  
                    project="C++" 
                    number={3} 
                    cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                    img="https://png.icons8.com/color/1600/c-programming.png" />
                </div>
                */
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
            <h1 style={{textAlign: 'center'}}>Here are some of my Current Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>SQL</Tab>
                    <Tab>ASP.NET</Tab>
                    <Tab>C#</Tab>
                    <Tab>C++</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                        <Footer color="black"/>
                    </Grid>
            </div>
        );
    }
}

export default Projects;