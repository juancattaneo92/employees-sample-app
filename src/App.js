import React from 'react';
import { makeServer } from "./server";
import NavBar from "./Frontend/Components/NavBar";
import Employees from "./Frontend/Components/Employees";
import './Frontend/Components/Styles/Styles.css';

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const App = () => { 

  return (
      <div className="main-container">
        <NavBar />
        <Employees />
      </div>
  )
}

export default App;