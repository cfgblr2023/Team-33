import "./App.css";
import { Navbar } from "./components/navbar/navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing.js";
import Admin from "./pages/admin_page/admin.js";
import Student from "./pages/students_dashboard/students.js";
import StudentRegister from "./pages/student_registration_form/student_registration_form";
import VolunteerRegister from "./pages/volunteer_dashboard/volunteer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/student_register" element={<StudentRegister />} />
          <Route
            exact
            path="/volunteer_register"
            element={<VolunteerRegister />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
