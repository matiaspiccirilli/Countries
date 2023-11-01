/* Components to render  */
import Landing from "./views/landing/Landing";
import Form from "./views/form/Form";
import Details from "./views/details/Details";
import Home from "./views/home/Home";

/* Hooks  */
import React from "react";
import { Routes, Route } from "react-router-dom";

const login = ""

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/form" element={<Form login={login}/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App
