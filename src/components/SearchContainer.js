import React from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"

import ReposList from "./ReposList"
import UsersList from "./UsersList"

function SearchContainer() {
    return (    
        <div>
            <NavBar />
            <Routes>
                <Route exact path='/' />
                <Route path='/repo' element={<ReposList />} />
                <Route path="/user" element={<UsersList />}/>
            </Routes>
        </div>
    )
}

export default SearchContainer