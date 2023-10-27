import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { signinAuthUserWithEmailAndPassword } from '../firebase';
import UserDisplay from '../UserDisplay';
import Header from '../Components/Header';
import '../CSS/Login.css';

const Login = (props) => {
  const [contact, setContact] = useState({
    email: '',
    password: ''
  });

  const { email, password } = contact;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signinAuthUserWithEmailAndPassword(email, password);
      const newUser = { email };
      setUser(newUser);
      
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));

      alert('Success! You have logged in');
    } catch (error) {
      alert('Login failed. Incorrect email or password');
    }
  };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      <div className='login-page'>
        {user ? (
          <div>
            <UserDisplay user={user} onLogout={handleLogout} />
            <button onClick={() => navigate('/')}>Go to Home</button>
          </div>
        ) : (
          <div>
            <Link className='signup-link' to='/signup'>
              Sign up instead?
            </Link>

            <h1>Your email</h1>
            <Input
              name='email'
              type='text'
              placeholder='Email'
              onChange={handleChange}
              value={contact.email}
            />

            <br></br>

            <h1>Your password</h1>
            <Input
              name='password'
              type='password'
              placeholder='Password'
              onChange={handleChange}
              value={contact.password}
            />

            <br></br>

            <button className='login-button' onClick={handleSubmit}>
              Sign in
            </button>
            <br></br>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;




