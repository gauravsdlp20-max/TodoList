import "./App.css";
import AllDrivers from "./pages/AllDrivers";
import Home from "./pages/Home";
import {Routes, Route} from "react-router"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drivers' element={<AllDrivers/>} />
      </Routes>    
    </div>
  );
}

export default App;



