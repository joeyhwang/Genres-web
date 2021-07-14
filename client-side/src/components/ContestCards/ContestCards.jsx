import React from 'react'
import {Typography, Card, CardContent, Grid, Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import contest1 from '../Assets/contest1.jpg';
import contest2 from '../Assets/contest2.jpg';
import contest3 from '../Assets/contest3.jpg';



const useStyles = makeStyles({
    root: {
        display: "block",
        height: "100%",
        minWidth: 250,
        padding: 20,
        borderRadius: "10px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: '#e1e1e6'
    },
    title: {
        fontSize: "24px",
        fontWeight: 700,
        paddingTop: '10px'
    },
    description: {
        fontSize: 18,
        
    },
    align: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    },
    media: {
        height: "20rem",
        width: '100%',
        objectFit: 'cover'    }
  });


const Cards = () => {
    const classes = useStyles();

    return (
        <>
        <Grid
            container 
            spacing={8}>
            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Grid item xs={12}>
                            <img src={contest1} className={classes.media} />
                        </Grid>
                        <Grid>
                        <Typography className={classes.title} gutterBottom>
                            Annual Genres Contest
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            Submit your original works and let the readers vote for their favorite! Winners will receive cash prize.
                        </Typography>
                        <Grid item xs={12} className={classes.align}>
                            <Icon component={AccessTimeIcon} style={{paddingRight: '5px'}}></Icon>
                            <Typography className={classes.description} >10 days left</Typography>
                        </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>


            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Grid item xs={12}>
                            <img src={contest2} className={classes.media} />
                        </Grid>
                    
                        <Typography className={classes.title} gutterBottom>
                            Annual Rookie Contest
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            Our annual rookie contest is dedicated to new writers and allowing them to be heard! Winners will receive cash prize and mentorship.
                        </Typography>
                        <Grid item xs={12} className={classes.align}>
                            <Icon component={AccessTimeIcon} style={{paddingRight: '5px'}}></Icon>
                            <Typography className={classes.description} >10 days left</Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>


            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Grid item xs={12}>
                            <img src={contest3} className={classes.media} />
                        </Grid>
                        <Grid >
                            <Typography className={classes.title} gutterBottom>
                                Genres Quarterly Contest
                            </Typography>
                            <Typography className={classes.description} gutterBottom>
                                Challenge yourself by writing to our prompts and let readers vote for their favorite work!
                            </Typography>
                            <Grid item xs={12} className={classes.align}>
                                <Icon component={AccessTimeIcon} style={{paddingRight: '5px'}}></Icon>
                                <Typography className={classes.description} >10 days left</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}

export default Cards
