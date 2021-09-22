import React, { Fragment, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText} from '@material-ui/core';
import '../style/Form.css';
import { db, storage } from '../../config/firebase-config';
import firebase from '../../config/firebase-config';
import 'firebase/auth'
import { Button } from '@material-ui/core';
import { Progress, Alert, AlertIcon } from "@chakra-ui/react"


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
        minWidth: 198,
        margin: '-1rem 0 2rem 0'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export default function Information() {

    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [studentid, setStudentID] = useState("");
    const [dep, setDep] = useState("");
    const [scoretype, setScoretype] = useState("");
    const [level, setLevel] = useState("");
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
    const checkstatus = false;
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
   

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };


    const handleUpload = (e) => {
        const uploadTask = storage.ref(`images/${scoretype}/${dep}/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                setProgress(progress);

            },
            error => {
                alert("กรุณาอัพโหลดไฟล์หลักฐานที่มีขนาดต่ำกว่า 2MB")
                console.log(error);
                
            },
            () => {
                storage
                    .ref(`images/${scoretype}/${dep}`)
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setUrl(url)
                    });
            }
        )
    };

    console.log("image: ", image);

    const onSubmit = (e) => {
        e.preventDefault();

        db.collection('students').add({
            Title: title,
            Name: name,
            Lastname: lastname,
            Studentid: studentid,
            Dep: dep,
            Scoretype: scoretype,
            Level: level,
            Timestamp: timestamp,
            Checkstatus: checkstatus,
            ImgURL: url,
        })
            .then(() => {
                alert("ระบบได้ทำการส่งคะแนนของท่านเรียบร้อยแล้ว")
                window.location.href = '/';
            })
            .catch((error) => {
                alert("กรุณาล็อกอินด้วยอีเมล์สถาบันเพื่อส่งคะแนนของท่าน");

            });
        setTitle("");
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
                <br />
                <div className={classes.root}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        {/* <Grid item md={12} xs={12}> */}
                        <FormControl className={classes.formControl}>
                            <InputLabel id="">&nbsp;&nbsp;&nbsp;คำนำหน้าชื่อ</InputLabel>
                            <Select
                                variant="standard"
                                name="title"
                                margin="dense"
                                labelId=""
                                id=""
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            >
                                <MenuItem value='นาย'>นาย</MenuItem>
                                <MenuItem value='นางสาว'>นางสาว</MenuItem>
                                <MenuItem value='นาง'>นาง</MenuItem>
                            </Select>
                        </FormControl>
                        {/* </Grid>     */}
                        <Grid item md={12} xs={12}>
                            <TextField
                                name="name"
                                id="name"
                                label="ชื่อ"
                                margin="normal"
                                variant="filled"
                                placeholder="ชื่อนักศึกษา"
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
                                    <MenuItem value='KMITL EXIT EXAM'>KMITL EXIT EXAM</MenuItem>
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
                                <InputLabel id=""></InputLabel>
                                <TextField
                                    name="level"
                                    id="level"
                                    label="ระดับคะแนน"
                                    variant="filled"
                                    placeholder="ระดับคะแนน"
                                    value={level}
                                    onChange={(e => setLevel(e.target.value))}
                                    required
                                >
                                </TextField>
                                <FormHelperText>เช่น B1 หรือตัวเลขคะแนนที่ได้</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <br />

                    <div class="form-group">
                        <p><i class="far fa-check-circle"></i>&nbsp;ให้นักศึกษาเปลี่ยนชื่อไฟล์ดังนี้ ( เช่น 640xxxxx_ชื่อ )</p>
                        <p>นักศึกษาสามารถเลือกไฟล์ในการอัพโหลดได้เพียง 1 ไฟล์เท่านั้น</p>
                        <br />
                        <label>
                            <i class="fas fa-file-upload"></i>&nbsp;เลือกไฟล์หลักฐานการสอบ
                        </label>

                        <Progress value={progress} size="md" colorScheme="green" hasStripe isAnimated />

                        {progress ? (
                            <Alert
                                status="success"
                                variant="left-accent"
                                value={progress}>
                                <AlertIcon />
                                อัพโหลดไฟล์สำเร็จ
                            </Alert>
                        ) : (
                           <div/>
                        )}
                    
                        <input
                            class="form-control form-control-sm"
                            type="file"
                            onChange={handleChange}
                            required
                        />
                        <br />

                        {image ? (
                            <Button
                                color=""
                                className="form-control"
                                id="contained-button-file"
                                variant="contained"
                                component="span"
                                type="submit"
                                onClick={handleUpload}
                                required
                            >
                                กดเพื่ออัพโหลดไฟล์
                            </Button>
                        ) : (
                            <Button
                                className="form-control"
                                id="contained-button-file"
                                variant="contained"
                                component="span"
                                type="submit"
                                onClick={handleUpload}
                                disabled
                            >
                                อัพโหลดไฟล์
                            </Button>
                        )}
                         
                        <br />
                        <br />
                        <img src={url} alt="" />
                        <br />
                    </div>
                    <br />
                    {url ? (
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            ส่งแบบฟอร์ม
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled
                        >
                            ส่งแบบฟอร์ม
                        </Button>
                    )}
                </div>
            </form>

        </Fragment>
    )
}

