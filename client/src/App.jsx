import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";
import Form from "./views/form/Form";
import Details from "./views/details/Details";

import { Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
      <p>Hola Countries!</p>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/details" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
