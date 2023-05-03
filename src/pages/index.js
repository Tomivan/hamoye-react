import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";

const Pages = () => {
    return(
        <Router>
            <Routes>
            <Route  path="/" element={<Login />}/>
            <Route  path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </Router>
    )
}

export default Pages;