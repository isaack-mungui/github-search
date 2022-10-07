import React from "react"
import Repo from "./Repo"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"

function ReposList() {
    const [repos, setRepos] = useState([])

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
            <SearchBar />
            {repos.map((repo) => (
                <Repo key={repo.id} name={repo.name} desc={repo.description} topics={repo.topics} languages={repo.language} url={repo.clone_url} />
            ))} 
        </div>
    )
}

export default ReposList