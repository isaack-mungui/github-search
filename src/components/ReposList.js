import React from "react"
import { useEffect, useState } from "react"
import Form from "./Form"
import Repo from "./Repo"

function ReposList({ repoInfo }) {
    console.log(repoInfo);
    // return (
    //     <div>
    //         <Form />
    //         <Repo key={repos.id} name={repos.login} repo={repos} />
    //         <table className="ui celled striped padded table">
    //             <tbody>
    //                 <tr>
    //                 <th>
    //                     <h3 className="ui center aligned header">Name</h3>
    //                 </th>
    //                 <th>
    //                     <h3 className="ui center aligned header">Owner</h3>
    //                 </th>
    //                 <th>
    //                     <h3 className="ui center aligned header">Description</h3>
    //                 </th>
    //                 <th>
    //                     <h3 className="ui center aligned header">Deployed at</h3>
    //                 </th>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>
    // )

    return (
        <Repo repo={repoInfo} />
    )
}

export default ReposList