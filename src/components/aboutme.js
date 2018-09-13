import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';
import Footer from './footer';

class About extends Component {
    render() {
        return(
            <div >
                <Grid className="aboutme-container">
                    <Cell className="aboutme-left-side-col" col={4}>
                        <h4>Hi there! I'm Nikolas Lennon</h4>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                            style={{height: '200px'}}
                            alt="avatar"
                        />
                        <hr style={{borderTop: '5px dotted #5692E4', }}/>
                        <p>I have a passion in Web Development and Game Development and CyberSecurity. I currently reside in Niceville, Florida and I am engaged to my longtime,
                            insanely beautiful best friend and live with an extremely cute Mini Australian Shepherd (Winston). I couldn't be happier! I create elegant professional websites using best practice accessibility. 
                            I enjoy turning complex problems into simple, beautiful and intuitive interface designs.
                        </p>
                        <p>I am always interested in anything technology related and always working on a project to keep my knowledge expanding in different
                        languages and libraries.  
                        </p>
                        <p>
                            Visit my Resume page for a high level overview of my current experience or contact me for my latest Resume! 
                        </p>
                    </Cell>
                    <Cell className="aboutme-right-side-col" col={8}>
                        <div className="skills-col">
                        <h2>My Current Skill Set</h2>
                            
                            <Skills 
                                skill="HTML/CSS"
                                progress={100}
                            />
                            <Skills 
                                skill="SQL"
                                progress={100}
                            />
                            <Skills 
                                skill="JavaScript"
                                progress={80}
                            />
                            <Skills 
                                skill="C++/C#"
                                progress={75}
                            />
                            <Skills 
                                skill="NodeJS"
                                progress={50}
                            />
                            <Skills 
                                skill="React"
                                progress={50}
                            />
                            <Skills 
                                skill="ASP.NET"
                                progress={10}
                            />
                        </div>
                    </Cell>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default About;