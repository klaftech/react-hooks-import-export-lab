import React from "react";
import NavBar from "./NavBar.js"
import Home from "./Home"
import About from './About';
import { username, city, image } from '../data/user.js'

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About image={image} />
    </div>
  );
}

export default App;
