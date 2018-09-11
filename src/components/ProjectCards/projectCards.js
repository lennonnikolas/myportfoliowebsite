import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const ProjectCard = (props) => {
    return (
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={
            {color: `${props.textColor}`, height: '176px', background: `url(${props.img}) center / cover`}}>
            <h2 className="mdl-card__title-text">{props.project} Project #{props.number}</h2>
        </CardTitle>
        <CardText>
            {props.cardText}
        </CardText>
        <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
    );
}

export default ProjectCard