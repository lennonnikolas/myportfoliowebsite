import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{color: `${this.props.color}`, width: '100%', height: '100px', margin: 'auto', display: 'flex'}}>
                <h5>Copyright 2018. Nikolas Lennon</h5>
            </div>
        );
    }
}

export default Footer;