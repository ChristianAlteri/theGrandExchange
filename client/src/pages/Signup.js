import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

function Signup(props) {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                emails: formState.email, 
                password: formState.password,
                firstname: formState.firstName,
                lastname: formState.lastName,
                username: formState.userName,
                // Get location from browser
                location: formState.location,

            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const navigate = useNavigate(); 

      const handleLoginClick = () => {
        navigate('/login'); 
      };

return (
  

    <div className="flex justify-center ">
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder=" Lee"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder=" Mcqueen"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="userName">Username:</label>
          <input
            placeholder=" voss-1"
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder=" mcqueen@gmail.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button type="submit">Submit</button>
        </div>
        <button
          className="my-4 text-center font-bold hover:text-blue-500 hover:cursor-pointer "
          onClick={handleLoginClick}
        >
          Already have an account?
        </button>

      </form>
    </div>

  );
}

export default Signup;