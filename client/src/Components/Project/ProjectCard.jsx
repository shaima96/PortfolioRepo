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
        maxWidth: 600,
        // backgroundColor:'red',
        marginLeft:550,
        marginTop:100,
    },
    media: {
        height: 200,
    },
});

export default function ProjectCard({project}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={project.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography  id="name" gutterBottom variant="h5" component="h1">
                        {project.name}
                    </Typography>
                    <Typography  id='desc' variant="body2" color="textSecondary" component="p">
                        {project.description}
                    </Typography>
                    <Typography  id='link' gutterBottom variant="h5" component="h2">
                        <span>Link:</span>{project.link}
                    </Typography>
                    <Typography id='git'  gutterBottom variant="h5" component="h2">
                    <span>GitHub Link:</span>{project.gitLink}
                    </Typography>
                    <Typography id='techno' gutterBottom variant="h5" component="h2">
                       <span>Technology:</span> {project.technology}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}