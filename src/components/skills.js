import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'
class Skills extends Component {
    render() {
        const { skill, progress } = this.props;
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{skill}</p>
                    </Cell>
                    <Cell col={8}>
                        <ProgressBar progress={progress} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;