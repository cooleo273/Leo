import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Pricing from "./Screens/Pricing";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" exact element = {<About/>}></Route>
            <Route path="/pricing" exact element = {<Pricing/>}></Route>
            
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
