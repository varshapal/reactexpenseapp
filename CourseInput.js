import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [buttonColor, setButtonColor] = useState('#8b005d');



  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
      setButtonColor('#8b005d');
    }
    setEnteredValue(event.target.value);
  };

  
  
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      
      return;
    }
    props.onAddGoal(enteredValue);
  };


  const buttonColorChangeHandler = (event) => {
    if(event.target.value.trim().length === 0) {
      setButtonColor('pink');
    }
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" onClick={buttonColorChangeHandler} style={{background: buttonColor}}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
