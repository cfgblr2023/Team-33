import "./App.css";
import { Navbar } from "./components/navbar/navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing.js";
import Admin from "./pages/admin_page/admin.js";
import Student from "./pages/students_dashboard/students.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/student" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
