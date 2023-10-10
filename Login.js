import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR')
  {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6 };
  }
  if(action.type === 'INPUT_BLUR')
  {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
};


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  //const [enteredCollegeName, setEnteredCollegeName] = useState('');
  // const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  // call reducer 

   const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });


  const authCtx = useContext(AuthContext);


  useEffect(() => {
    console.log('EFFECT RUNNING');

    return() => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState; 

  // useEffect(() => {
  //   console.log('Checking form validity');
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim().length > 0
  //     );
  //   }, 500);
    
  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   }
  // }, [enteredEmail, enteredPassword, enteredCollegeName]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  // const collegeNameChangeHandler = (event) => {
  //   setEnteredCollegeName(event.target.value);

  //   // setFormIsValid(
  //   //   event.target.value.trim().length > 0 && enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   // );
  // };


  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  // const validateCollegeNameHandler = () => {
  //   setCollegeNameIsValid(enteredCollegeName.trim().length > 0);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id="email" 
          label="E-Mail" 
          type="email" 
          isValid={emailIsValid} 
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input 
          id="password" 
          label="Password" 
          type="password" 
          isValid={passwordIsValid} 
          value={passwordState.value} 
          onChange={passwordChangeHandler} 
          onBlur={validatePasswordHandler}
        />
          
          
        {/* <div
          className={`${classes.control} ${
            collegeNameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collegename">College Name</label>
          <input
            type="text"
            id="collegename"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
