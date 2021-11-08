import Home from './Home';
import About from './About';
import {Route, Routes} from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
