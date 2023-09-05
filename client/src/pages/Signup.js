import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function Signup(props) {
  const [formState, setFormState] = useState({ 
    email: "", 
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    dateOfBirth: "",
    location: "",
  });
  const [CreateUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("formState", formState);
    // TODO: grab the user email and then fetch the object id
    // const email = formState.email;

    const mutationResponse = await CreateUser({
      variables: {
        input: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
          userName: formState.userName,
          dateOfBirth: formState.dateOfBirth,
          location: formState.location,
        },
      },
    });
      console.log("mutationResponse ",  mutationResponse);

    // TODO: Handle mutationResponse and errors.

    // const idOfUser = await getUserId(email);
    // console.log("idOfUser", idOfUser);

    // localStorage.setItem('userId', idOfUser);

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
    navigate("/login");
  };

  return (
    <div className="flex justify-center p-10">
      <form onSubmit={handleFormSubmit} className="signup-form">
        <h3>Signup</h3>
        <div className="flex-row space-between my-2 w-4/5">
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="Lee"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-col space-between my-2 w-4/5">
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Mcqueen"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 w-4/5">
          <label htmlFor="userName">Username</label>
          <input
            placeholder="voss-1"
            name="userName"
            type="text"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 w-4/5">
          <label htmlFor="email">Email</label>
          <input
            placeholder="mcqueen@gmail.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2 w-4/5">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            placeholder="MM/DD/YYYY"
            name="dateOfBirth"
            type="date"
            id="dateOfBirth"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 w-4/5">
          <label htmlFor="location">Location</label>
          <input
            placeholder="Western Australia"
            name="location"
            type="text"
            id="location"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 w-4/5">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter Password"
            name="password"
            type="password"
            id="password"
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
