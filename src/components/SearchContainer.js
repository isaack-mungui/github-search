import React from "react"
import { useEffect, useState } from "react"
import UsersList from "./UsersList"

function SearchContainer() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/isaack-mungui/repos")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setUserData(data)
        })
    }, [])

    return (
        <div>
            <UsersList data={userData} />
        </div>
    )
}

export default SearchContainer