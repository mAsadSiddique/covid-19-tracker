import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 1000,
        margin: '0px auto',
        marginTop: '30px',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderLeft: '10px solid rgba(0 ,0 , 255 , 0.9)',
    },
    title: {
        color: '#3f51b5',
    }
}));

export default function Panel() {

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            let data = await response.json();
            delete data.results[0].source
            setGlobalData(data.results[0])
            console.log(data.results[0])
        }
        getData();
    }, [])

    const classes = useStyles();

    return ( <
        div className = { classes.root } >
        <
        Grid container spacing = { 3 } > {
            Object.keys(globalData).map((key, ind) => {
                return ( <
                    Grid item xs = { 12 }
                    sm = { 4 }
                    key = { ind } >
                    <
                    Paper className = { classes.paper }
                    elevation = { 3 } >
                    <
                    h3 className = { classes.title } > { key.replace(/_/g, ' ').toUpperCase() } < /h3>

                    <
                    h3 > < CountUp start = { 0 }
                    end = { globalData[key] }
                    duration = { 2 }
                    separator = "," /
                    >
                    <
                    /h3> <
                    /Paper> <
                    /Grid>
                )
            })
        }



        <
        /Grid> <
        /div>
    );
}