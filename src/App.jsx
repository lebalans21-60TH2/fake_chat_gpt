

import Welcome from "./component/Welcome";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./component/Home";

function App() {
 

  return (
    
    <Routes>
      <Route path="/" element={<Welcome />}/>
          <Route path="/question" element={<Home />} />
    </Routes>
 
  );
}

export default App;
