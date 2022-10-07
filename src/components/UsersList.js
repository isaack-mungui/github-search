import React from "react"
import User from "./User"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"

function UsersList() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("https://api.github.com/search/users?q=type:user")
        .then((r) => r.json())
        .then((data) => {
            setUsers(data.items)
        })
    }, [])

    return (
        <div>
            <SearchBar />
            {users.map((user) => (
                <User key={user.id} url={user.avatar_url} login={user.login} repos={user.repos_url} />
            ))}
        </div>  
    )
}

export default UsersList