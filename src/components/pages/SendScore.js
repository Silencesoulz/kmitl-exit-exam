import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
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
  return ['ข้อมูลส่วนตัว',];
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
        return <Information formProps={informationForm} />;
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
          </div>
        ) : (
          <div className={classes.root}>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div className={classes.buttonLayout}>

            </div>
          </div>
        )}
      </div>
    </div>
  );
        }