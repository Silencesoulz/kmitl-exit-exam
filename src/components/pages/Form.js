import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SendScore from './SendScore'
import '../style/Form.css'


const useStyles = makeStyles(theme => ({
    
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.75rem',
        color: '#000000',
        fontSize: '1.3rem',
        letterSpacing: '0.1rem',
    },
    border: {
        border: '0.2rem solid #5D6D7E ',
        borderRadius: '20px',
        padding: '2%',
        width: '20rem',
        textAlign: 'center',
    },
    topLayout: {
        margin: '1.5rem 0',
        [theme.breakpoints.down('xs')]: {
            margin: '1rem 0'
        }
    },
    paperLayout: {
        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            width: '50rem',
        },
        marginTop: '2rem',
        margin: 'auto',
        border: '4.5px solid #DD8327',
        borderRadius: '25px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '3rem'
        }
    },

}));

export default function Form() {
    const classes = useStyles();
    return (
        <div className='form-background'>
        <Fragment>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.topLayout}
            >
                <Grid item md={11} xs={11}>
                    <Paper className={classes.paperLayout}>
                        <Grid container>
                            <Grid item md={12} xs={12}>
                                <div className={classes.logo}>
                                <div className={classes.border}>
                                    <div className= "font-mitr">
                                        แบบฟอร์มยื่นคะแนน
                                    </div>
                                </div>
                                </div>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <SendScore/>
                                <tugetForm/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
        <br/>
        </div>
    )
}