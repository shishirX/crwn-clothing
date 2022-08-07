import React from "react";
import "./app.style.scss";
import Home from "./routes/home.component";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    );
  }
}
export default App;
