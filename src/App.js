import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Campuses from './pages/Campuses';
import Students from './pages/Students';


function App() {
  return (
    <Router>
      {/* <div className="App">
        <Home />
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;
