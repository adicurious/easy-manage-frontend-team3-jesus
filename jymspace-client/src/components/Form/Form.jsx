import React, { useState } from 'react';
import './Form.css';
import FormSignin from '../Form/FormSignin'
import Dashboard from '../Dashboard/Dashboard';
import signin from '../../assets/signin.jpg';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img src={signin} alt="img" className='form-img' />
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : 
          <Dashboard />
        }
      </div>
    </>
  );
};

export default Form;