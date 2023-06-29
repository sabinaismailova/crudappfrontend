import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Campuses from './pages/Campuses';
import Students from './pages/Students';
import SingleCampusPage from "./pages/SingleCampusPage";
import EditCampusPage from "./pages/EditCampusPage";
import AddCampusPage from "./pages/AddCampusPage";




function App() {
  return (
    <Router>
      {/* <div className="App">
        <Home />
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/campuses/:id" element={<SingleCampusPage />} />
        <Route path="/campuses/edit/:id" element={<EditCampusPage />} />
        <Route path="/campuses/add" element = {<AddCampusPage />}/>
        <Route path="/students" element={<Students />} />
        
      </Routes>
    </Router>
  );
}

export default App;
