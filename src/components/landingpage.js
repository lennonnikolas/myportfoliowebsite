import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './footer';

class LandingPage extends Component {
    render() {
        return(
            <div className="background">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                         src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                         alt="avatar"
                         className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Nikolas Lennon</h1>
                            <h2>Full Stack Web Developer</h2>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | SQL | Git</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/nikolas-lennon/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://www.github.com/lennonnikolas/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                <Footer color="white"/>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;