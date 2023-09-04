import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADD_USER } from "../utils/mutations";
import { GET_USER_BY_EMAIL } from "../utils/queries";
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
  const [createUser] = useMutation(ADD_USER);
  // TODO: Add back when working
  // const [getUserId] = useMutation(GET_USER_BY_EMAIL); 

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const email = formState.email;

    const mutationResponse = await createUser({
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

    // TODO: Fix error. Maybe import it as a function
    
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
          <label htmlFor="DOB">Date Of Birth: </label>
          <input
            placeholder="********"
            name="dateOfBirth"
            type="date"
            id="dateOfBirth"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Location">Location</label>
          <input
            placeholder="Western Australia"
            name="location"
            type="location"
            id="location"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="********"
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
