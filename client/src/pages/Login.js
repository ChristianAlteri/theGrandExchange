import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log("muttation Response", mutationResponse);
      
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      console.log('login successful')
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className=" flex justify-center p-10 w-full">
      <form onSubmit={handleFormSubmit} className='login-form'>
      <h3>Welcome Back</h3>
        <div className="flex-row my-2">
          <input
            placeholder="email address"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          {/* <label htmlFor="pwd">Password:</label> */}
          <input
            placeholder="your password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end form-button">
          <button type="submit">Submit</button>
        </div>
        <div className='flex justify-center pt-5'>
        <Link to="/signup">← Go to Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
