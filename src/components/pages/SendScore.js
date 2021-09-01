import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import useForm from "react-hook-form";
// import * as yup from "yup";
import firebase from '../../config/firebase-config';
import 'firebase/auth';
import Information from './Information'
import UploadFile from './UploadFile'
import { useForm } from 'react-hook-form'

// // function SendScore() {
// //   const [user, setUser] = useState(null);
// //   useEffect(() => {
// //     firebase.auth().onAuthStateChanged((user) => {
// //       if (user) {
// //         var displayName = user.displayName;
// //         setUser(displayName)

// //       } else {
// //         setUser(null)
// //       }
// //     });
// //   }, [])
// } 
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'center'
    
},
backButton: {
    marginRight: theme.spacing(1),
},
instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
},
buttonLayout: {
    marginLeft: 'rem',
    [theme.breakpoints.down('xs')]: {
        marginLeft: '0'
    }
}
}));
   
function getSteps() {
  return ['ข้อมูลส่วนตัว', 'อัพโหลดไฟล์คะแนน'];
}

export default function StepperForm() {
  const classes = useStyles();

  const informationForm = useForm();

  const uploadFileForm = useForm();

  const onSubmit = data => {
    console.log(data)
  };


  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  //สำหรับ get Step ตาม index
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Information />;
      case 1:
        return <UploadFile/>;
      default:
        return 'Unknown stepIndex';
    }
  }

  return (

    <div className={classes.root}>
      <form onSubmit={activeStep === 0 ? informationForm.handleSubmit(onSubmit) : uploadFileForm.handleSubmit(onSubmit)}></form>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <br/>
            <br/>
            <br/>
            <Typography>อัพโหลดข้อมูลนักศึกษาและไฟล์เรียบร้อย</Typography>
            <Button onClick={handleReset}>Reset</Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        
          </div>
        ) : (
          <div className={classes.root}>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div className={classes.buttonLayout}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                variant="outlined"
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext} >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
        }




