import "./App.css";
import { Navbar } from "./components/navbar/navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing.js";
import Admin from "./pages/admin_dashboard/admin.js";
import Student from "./pages/students_dashboard/students.js";
import Overview from "./components/admin_dashboard/Overview.js";
import ApproveVolunteers from "./components/admin_dashboard/ApprovalVolunteers.js";
import ApproveStudents from "./components/admin_dashboard/ApprovalStudents.js";
import CreateEvent from "./components/admin_dashboard/CreateEvent.js";
import StudentRegister from "./pages/student_registration_form/student_registration_form";
import VolunteerRegister from "./pages/volunteer_dashboard/volunteer.js";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/volunteer" element={<Student />} />
          <Route exact path="/admin/overview" element={<Overview />} />
          <Route
            exact
            path="/admin/approvalvolunteers"
            element={<ApproveVolunteers />}
          />
          <Route
            exact
            path="/admin/approvalstudents"
            element={<ApproveStudents />}
          />
          <Route exact path="/admin/createevent" element={<CreateEvent />} />
          <Route exact path="/student_register" element={<StudentRegister />} />
          <Route exact path="/login" element={<Login />} />
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
