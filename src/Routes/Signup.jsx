import React, { useState } from 'react';
import Input from '../Components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserDocFromAuth } from '../firebase';
import "../CSS/Signup.css"
import { auth } from '../firebase';

const Signup = (props) => {
  const [contact, setContact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = contact;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await createUserDocFromAuth(user, { displayName });
      alert('Account created! You can now log in');
      navigate('/login');
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h1 className='signup-title'>Create a Dev@Deakin Account</h1>
        <label htmlFor='displayName' className='signup-label'>
          Name*
        </label>
        <Input
          name='displayName'
          type='signup_name'
          placeholder='Name'
          onChange={handleChange}
          value={contact.displayName}
        />
        <br />
        <label htmlFor='email' className='signup-label'>
          Email*
        </label>
        <Input
          name='email'
          type='signup_email'
          placeholder='Email'
          onChange={handleChange}
          value={contact.email}
        />
        <br />
        <label htmlFor='password' className='signup-label'>
          Password*
        </label>
        <Input
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}
          value={contact.password}
        />
        <br />
        <label htmlFor='confirmPassword' className='signup-label'>
          Confirm Password*
        </label>
        <Input
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
          value={contact.confirmPassword}
        />
        <br />
        <button className='signup-button' onClick={handleSubmit}>
          Sign up
        </button>
        <br />
        <br />
        <Link to='/login' className='signup-link'>
          Login instead?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
