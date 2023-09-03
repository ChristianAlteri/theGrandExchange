import React, {useEffect, useState} from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";



function UserProfile() {

    const { data, error, loading } = useQuery(QUERY_USER);

    let user;

    if (data) {
        user = data.user;
    }


    console.log(data, error)


    return (
        <div className="container flex object-center justify-center p-5">
            <div className="column col-span-5 p-10">
                <h3>Welcome {user} </h3>
                <h1>User Information</h1>
                <h1>User Information</h1>
                <h1>User Information</h1>
            </div>
            <div className="flex column col-span-4 p-10">
                <div className="flex column p-5">
                    <h4>My Products</h4>
                </div>
                <div className="flex column p-5">
                    <h4>My Products</h4>
                </div>
            </div>
        </div>
    )
}


export default UserProfile;