import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Footer from './footer';

class Contact extends Component {
    render() {
        return(
            <div>
                <Grid className="contact-grid">
                    <Cell col={4}>
                        <h2>Nikolas Lennon</h2>
                        <img 
                          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
                          alt="avatar"
                          style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Please use the following methods of contact to the right to reach out to me. I am mostly available by email but will respond to phone calls and texts on a regular basis. 
                        </p>
                    </Cell>
                    <Cell col={8}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List >
                            <div>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    <h4>(850) 582-0468</h4>
                                </ListItemContent>
                            </ListItem>
                            </div>
                            <div>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                    <h4>lennon.nikolas@gmail.com</h4>                                
                                </ListItemContent>
                            </ListItem>
                            </div>
                            <div>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                    <h4>lennon.nikolas</h4>                                
                                </ListItemContent>
                            </ListItem>
                            </div>
                            </List>   
                        </div>
                    </Cell>
                    <Footer color="black"/>
                </Grid>
            </div>
        );
    }
}

export default Contact;