import React from "react"
import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import ReposList from "./ReposList"
import UsersList from "./UsersList"

function SearchContainer() {
    const [userData, setUserData] = useState([])
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/search/users?q=type:user")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setUserData(data)
        })
    }, [])


    useEffect(() => {
        fetch("https://api.github.com/users/jumaallan/repos")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            setRepos(data)
        })
    }, [])


    return (    
        <div>
            <NavBar />
            <ReposList repoInfo={repos} />
            <UsersList userInfo={userData} />
        </div>
    )
}

export default SearchContainer