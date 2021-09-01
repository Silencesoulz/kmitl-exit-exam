import React, { Fragment, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../style/Form.css';
import { db } from '../../config/firebase-config';
import Navbar from '../Navbar';
import firebase from '../../config/firebase-config';
import 'firebase/auth'

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
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '0.2rem'
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 193,
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



    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('students').add({
            name: name,
            lastname: lastname,
            studentid: studentid,
            dep: dep,
            scoretype: scoretype,
            level: level,
            

        })
            .then(() => {
                alert("Message has been submitted")
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
                        spacing={1}
                    >
                        <Grid item md={12} xs={12}>
                            <ul className="menu">
                                <li>
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
                                </li>
                                <li>
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
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <ul className="menu">
                                <li>
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
                                </li>
                                <li>
                                <FormControl className={classes.formControl}>
                                        <InputLabel id="">ภาควิชา</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            value={dep}
                                            onChange={(e) => setDep(e.target.value)}
                                        >
                                            <MenuItem value='วิศวกรรมไฟฟ้า'>วิศวกรรมไฟฟ้า</MenuItem>
                                            <MenuItem value='วิศวกรรมคอมพิวเตอร๋์'>วิศวกรรมคอมพิวเตอร์</MenuItem>
                                            <MenuItem value='วิศวกรรมสารสนเทศ'>วิศวกรรมสารสนเทศ</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={12} xs={12}>r
                            <ul className="menu">
                                <li>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="">ประเภทคะแนน</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            value={scoretype}
                                            onChange={(e => setScoretype(e.target.value))}
                                        >
                                            <MenuItem value='TOEIC'>TOEIC</MenuItem>
                                            <MenuItem value='IELTS'>IELTS</MenuItem>
                                            <MenuItem value='TOEFL'>TOEFL</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="">ระดับคะแนน</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            value={level}
                                            onChange={(e => setLevel(e.target.value))}
                                        >
                                            <MenuItem value='B1'>B1</MenuItem>
                                            <MenuItem value='B2'>B2</MenuItem>
                                            <MenuItem value='C1'>C1</MenuItem>
                                            <MenuItem value='C2'>C2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>


                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </Fragment>
    )
}