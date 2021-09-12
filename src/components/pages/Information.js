import React, { Fragment, useState, useMemo, useEffect, Component } from 'react'
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
import { Button } from '@material-ui/core';


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

export default function Information(props) {
    
    

    const classes = useStyles();
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [studentid, setStudentID] = useState("");
    const [dep, setDep] = useState("");
    const [scoretype, setScoretype] = useState("");
    const [level, setLevel] = useState("");
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date()).toDate();

    const onSubmit = (e) => {
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
                window.location.href = '/';
            })
            .catch((error) => {
                alert(error.message);
                name=('');
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

            <form className="form" onSubmit={onSubmit} >
            
                <div className={classes.root}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                       
                        
                        <Grid item md={12} xs={12}> 
                            <TextField
                                
                                name="name"
                                id="name"
                                label="ชื่อ"
                                margin="normal"
                                variant="filled"
                                placeholder="ชื่อนักศึกษา"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <TextField
                                register="lastname"
                                name="lastname"
                                id="lastname"
                                label="นามสกุล"
                                margin="normal"
                                variant="filled"
                                placeholder="นามสกุลนักศึกษา"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                name="studentid"
                                id="studentid"
                                label="รหัสนักศึกษา"
                                margin="normal"
                                variant="filled"
                                placeholder="640xxxxx"
                                value={studentid}
                                onChange={(e) => setStudentID(e.target.value)
                                }
                                required
                            />
                        </Grid>

                        {/* // Dropdown section */}

                        <Grid item md={12} xs={12}>
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel id="">&nbsp;&nbsp;&nbsp;ภาควิชา</InputLabel>
                                <Select
                                    name="dep"
                                    labelId=""
                                    id=""
                                    variant="filled"
                                    value={dep}
                                    onChange={(e) => setDep(e.target.value)}
                                    required
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
                                    name="scoretype"
                                    labelId=""
                                    id=""
                                    variant="filled"
                                    value={scoretype}
                                    onChange={(e => setScoretype(e.target.value))}
                                    required
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
                                    name="level"
                                    native defaultValue=""
                                    labelId=""
                                    id="grouped-native-select"
                                    variant="filled"
                                    value={level}
                                    onChange={(e => setLevel(e.target.value))}
                                    required
                                >

                                    <option aria-label="None" value="" />
                                    <optgroup label="KMITL-TEP">
                                        <option value='B1'>B1</option>
                                        <option value='B2'>B2</option>
                                        <option value='C1'>C1</option>
                                        <option value='C2'>C2</option>
                                    </optgroup>
                                    <optgroup label="IELTS">
                                        <option value='4-6'>4-6</option>
                                        <option value='7-9'>7-9</option>
                                    </optgroup>
                                    <optgroup label="TOEFL(IPT)">
                                        <option value='450-496'>450-496</option>
                                        <option value='487-546'>487-546</option>
                                        <option value='547-588'>547-589</option>
                                        <option value='590-677'>590-677</option>
                                    </optgroup>
                                    <optgroup label="TOEFL(iBT)">
                                        <option value='45-59'>45-59</option>
                                        <option value='60-78'>60-78</option>
                                        <option value='79-95'>79-95</option>
                                        <option value='96-120'>96-120</option>
                                    </optgroup>
                                    <optgroup label="TOEIC">
                                        <option value='500-650'>500-650</option>
                                        <option value='660-780'>651-780</option>
                                        <option value='790-880'>781-880</option>
                                        <option value='890-990'>881-990</option>
                                    </optgroup>
                                    <optgroup label="CU-TEP">
                                        <option value='45-69'>45-69</option>
                                        <option value='70-98'>70-98</option>
                                        <option value='99-120'>99-120</option>
                                    </optgroup>
                                    <optgroup label="TU-GET">
                                        <option value='500-650'>500-650</option>
                                        <option value='651-750'>651-750</option>
                                        <option value='851-1000'>851-1000</option>
                                    </optgroup>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <UploadFile
                    required 
                    />
                    <br />
                    <br />

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        >
                        SUBMIT
                    </Button>

                </div>
            </form>
           
        </Fragment>
    )
}

