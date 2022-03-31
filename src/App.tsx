import React from 'react';
import './App.css';
import {Login} from "./login/Login";
import {Route, Routes} from "react-router-dom";

function App() {
    debugger
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
