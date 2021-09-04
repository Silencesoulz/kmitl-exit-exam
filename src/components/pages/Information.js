import React, { Fragment, useState, useMemo, useEffect, } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../style/Form.css';
import { db } from '../../config/firebase-config';
import firebase from '../../config/firebase-config';
import 'firebase/auth'
import UploadFile from './UploadFile';
import { Link, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '-1rem 0 2rem 0',
        padding: '0 7rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0'
        },
        [theme.breakpoints.down('md')]: {
            padding: '0'
        },
        marginTop: 'auto',
        alignItems: 'center'
    },
    textField: {
        minWidth: 20,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            
        }
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '0.2rem'
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 198,
        margin: '-1rem 0 2rem 0'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export default function Information() {

    const classes = useStyles();

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [studentid, setStudentID] = useState("");
    const [dep, setDep] = useState("");
    const [scoretype, setScoretype] = useState("");
    const [level, setLevel] = useState("");
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('students').add({
            name: name,
            lastname: lastname,
            studentid: studentid,
            dep: dep,
            scoretype: scoretype,
            level: level,
            timestamp: timestamp,
        })
            .then(() => {
                alert("Message has been submitted")
                window.location.href='/';
            })
            .catch((error) => {
                alert(error.message);
            });

        setName("");
        setLastName("");
        setStudentID("");
        setDep("");
        setScoretype("");
        setLevel("");
    };

    return (
        <Fragment>
            <form className="form" onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item md={12} xs={12}>
                                    <TextField
                                        id="firstName"
                                        label="ชื่อ"
                                        margin="normal"
                                        variant="filled"
                                        placeholder="ชื่อนักศึกษา"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)
                                        }
                                    />
                        </Grid>
                        <Grid item md={12} xs={12}>
                                    <TextField
                                        id="lastName"
                                        label="นามสกุล"
                                        margin="normal"
                                        variant="filled"
                                        placeholder="นามสกุลนักศึกษา"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)
                                        }
                                    />
                        </Grid>    
                        <Grid item md={12} xs={12}>
                                    <TextField
                                        id="studentid"
                                        label="รหัสนักศึกษา"
                                        margin="normal"
                                        variant="filled"
                                        placeholder="640xxxxx"
                                        value={studentid}
                                        onChange={(e) => setStudentID(e.target.value)
                                        }
                                    />
                        </Grid> 
                       
                        {/* // Dropdown section */}

                        <Grid item md={12} xs={12}>  
                        <br/>
                                <FormControl className={classes.formControl}>
                                        <InputLabel id="">&nbsp;&nbsp;&nbsp;ภาควิชา</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            variant="filled"
                                            value={dep}
                                            onChange={(e) => setDep(e.target.value)}
                                        >
                                            <MenuItem value='วิศวกรรมไฟฟ้า'>วิศวกรรมไฟฟ้า</MenuItem>
                                            <MenuItem value='วิศวกรรมคอมพิวเตอร์'>วิศวกรรมคอมพิวเตอร์</MenuItem>
                                            <MenuItem value='วิศวกรรมสารสนเทศ'>วิศวกรรมสารสนเทศ</MenuItem>
                                            <MenuItem value='วิศวกรรมเคมี'>วิศวกรรมเคมี</MenuItem>
                                            <MenuItem value='วิศวกรรมเกษตร'>วิศวกรรมเกษตร</MenuItem>
                                            <MenuItem value='วิศวกรรมอัตโนมัติ'>วิศวกรรมอัตโนมัติ</MenuItem>
                                            <MenuItem value='วิศวกรรมโทรคมนาคม'>วิศวกรรมโทรคมนาคม</MenuItem>
                                            <MenuItem value='วิศวกรรมอิเล็กทรอนิกส์'>วิศวกรรมอิเล็กทรอนิกส์</MenuItem>
                                            <MenuItem value='วิศวกรรมเครื่องกล'>วิศวกรรมเครื่องกล</MenuItem>
                                            <MenuItem value='วิศวกรรมอุตสาหการ'>วิศวกรรมอุตสาหการ</MenuItem>
                                            <MenuItem value='วิศวกรรมปิโตรเคมี'>วิศวกรรมปิโตรเคมี</MenuItem>
                                            <MenuItem value='วิศวกรรมโยธา'>วิศวกรรมโยธา</MenuItem>
                                            <MenuItem value='วิศวกรรมอาหาร'>วิศวกรรมอาหาร</MenuItem>
                                        </Select>
                                    </FormControl>
                        </Grid>    
                        <Grid item md={12} xs={12}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="">&nbsp;&nbsp;&nbsp;ประเภทคะแนน</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            variant="filled"
                                            value={scoretype}
                                            onChange={(e => setScoretype(e.target.value))}
                                        >
                                            <MenuItem value='KMITL-TEP'>KMITL-TEP</MenuItem>
                                            <MenuItem value='IELTS'>IELTS</MenuItem>
                                            <MenuItem value='TOEFL(IPT)'>TOEFL(IPT)</MenuItem> 
                                            <MenuItem value='TOEFL(IBT)'>TOEFL(IBT)</MenuItem>
                                            <MenuItem value='TOEIC'>TOEIC</MenuItem>
                                            <MenuItem value='CU-TEP'>CU-TEP</MenuItem>
                                            <MenuItem value='TU-GET'>TU-GET</MenuItem>

                                        </Select>
                                    </FormControl>
                        </Grid>
                        <Grid item md={12} xs={12}>  
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="">&nbsp;&nbsp;&nbsp;ระดับคะแนน</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            variant="filled"
                                            value={level}
                                            onChange={(e => setLevel(e.target.value))}
                                        >
                                            <MenuItem value='B1'>B1</MenuItem>
                                            <MenuItem value='B2'>B2</MenuItem>
                                            <MenuItem value='C1'>C1</MenuItem>
                                            <MenuItem value='C2'>C2</MenuItem>
                                        </Select>
                                    </FormControl>
                        </Grid>
                    </Grid>
                    <br/>
                    <UploadFile/>
                    <br/>
                    <br/>
                    
                    <button type="submit" >
                        Submit
                    </button>
                    
                </div>
            </form>
        </Fragment>
    )
}

