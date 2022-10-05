import React from "react"
import Form from "./Form"
import Repo from "./Repo"

function ReposList({ repoInfo }) {
    console.log(repoInfo);
    return (
        <div>
            {repoInfo.map((repo) => (
                <Repo key={repo.id} topics={repo.topics} />
            ))} 
        </div>
    )
}

export default ReposList