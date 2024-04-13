import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
          <Router>
          <Routes>
            <Route path="" exact element={<Home/>}></Route>
          </Routes>
         </Router>
       
      </header>
    </div>
  );
}

export default App;
