import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Footer from './footer';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                              alt="avatar"
                              style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Nikolas Lennon</h2>
                        <h4 style={{color: 'gray'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #5692E4', width: '50%'}}/>
                        <p>
                        Hello! My name is Nikolas Lennon and I have a strong interest in programming and computer security. I am an adaptable team player easily coordinating and implementing approved changes within the business process. I also am a knowledgeable applicant skilled in data collection, analysis and management who works well under pressure and consistently meets deadlines and targets while delivering high quality work
                        </p>
                        <hr style={{borderTop: '3px solid #5692E4', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>
                            149 Raintree blvd.
                            Niceville, FL 32578
                        </p>
                        <h5>Phone</h5>
                        <p>(850) 582-0468</p>
                        <h5>Email</h5>
                        <p>lennon.nikolas@gmail.com</p>
                        <h5>Web</h5>
                        <p><a href="https://www.nikolaslennon.com/">nikolaslennon.com</a></p>
                        <hr style={{borderTop: '3px solid #5692E4', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2016}
                            endYear="Current"
                            schoolName="Florida State University"
                            degree="Bachelors of Science - Computer Science"
                            schoolDescription="Currently in progress. Expected graduation is Fall 2019." />
                        
                        <Education 
                            startYear={2013}
                            endYear={2016}
                            schoolName="Northwest Florida State College"
                            degree="Associates of Arts"
                            schoolDescription="Emphasis in Computer Science/Engineering.
                            Continuing education in Network Security and Computer Science.
                            Graduated with Phi Theta Kappa Honors.
                            Cumulative 3.50 GPA.
                            Intro to programming and Java classes.
                            Calculus 2 and Physics 2 for Engineering purposes.
                            Continuing degree at Florida State University Panama City with emphasis in a Bachelor’s of Computer Science" />
                        
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                        startYear={2016}
                        endYear="Current"
                        jobName="ELEAD1ONE"
                        jobDescription="Help develop and maintain web services in C# and web applications in React/Redux. 
                        Fix bugs and implement feature requests brought down from the business. Coordinate Release candidates and help with testing out code changes.
                        Peer review pull requests in TFS/VSTS to make sure quality code is released" />

                        <Experience
                        startYear={2013}
                        endYear={2016}
                        jobName="Office Depot/Office Max"
                        jobDescription="Greeted Customers in a timely fashion while quickly determining their needs. Recommended merchandise to customers based on their needs and preferences. 
                        Maintained knowledge of current sales and promotions, policies regarding payment and exchanges and security practices. Installed software, modified and repaired hardware, and resolved technical issues. 
                        Remained up-to-date on the latest technologies and solutions applicable to company products." />

                        <Experience
                        startYear={2011}
                        endYear={2013}
                        jobName="Bed Bath and Beyond"
                        jobDescription="Answered customer questions regarding store merchandise, department information and pricing. 
                        Organized store merchandise racks by size, style, and color. Led merchandise selection, pricing, planning, and marketing. 
                        Completed all cleaning, stocking, and organizing tasks in assigned sales area" />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
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
                    </Cell>
                    <Footer color="black"/>
                </Grid>
            </div>
        );
    }
}

export default Resume;