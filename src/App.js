import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Campuses from "./pages/Campuses/Campuses";
import Students from './pages/Students';
import SingleCampusPage from "./pages/SingleCampusPage";
import EditCampusPage from "./pages/EditCampusPage";
import AddCampusPage from "./pages/AddCampusPage";
import SingleStudentPage from "./pages/SingleStudentPage";
import EditStudentPage from "./pages/EditStudentPage";
import AddStudentPage from "./pages/AddStudentPage";




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
        <Route path="/students/:id" element={<SingleStudentPage />}/>
        <Route path="/students/edit/:id" element={<EditStudentPage />} />
        <Route path="/students/add" element = {<AddStudentPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
