import React from "react"
// import Card from "./Card";
import { useEffect, useState } from 'react'
import User from "./User"

function UsersList({ userInfo }) {
    console.log(userInfo);
    return (
        <div>
            {/* <Card /> */}
            <User users={userInfo} />
        </div>  
    )
}

export default UsersList