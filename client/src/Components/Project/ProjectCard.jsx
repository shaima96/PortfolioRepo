import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './project.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        // backgroundColor:'red',
        marginLeft: 50,
        marginTop: 50,
        borderRadius:30,
    },
    media: {
        height: 150,
    },
});

export default function ProjectCard({ project }) {
    const classes = useStyles();

    return (
        <Card id='project' className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={project.image}
                    title="Contemplative Reptile"
                />
                <br/>

                <CardContent>
                    <Typography id="name" gutterBottom variant="h5" component="h1">
                        {project.name}
                    </Typography>
                    <Typography id='desc' variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                    <br/>
                    <Typography id='link' gutterBottom variant="h5" component="h2">
                        <span>Link: </span>{project.link}
                    </Typography>
                    <Typography id='git' gutterBottom variant="h5" component="h2">
                        <span>GitHub Link: </span>{project.gitLink}
                    </Typography>
                    <Typography id='techno' gutterBottom variant="h5" component="h2">
                        <span>Technology: </span> {project.technology}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}