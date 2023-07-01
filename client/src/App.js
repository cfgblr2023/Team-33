import "./App.css";
import { Navbar } from "./components/navbar/navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing.js";
import Admin from "./pages/admin_dashboard/admin.js";
import Student from "./pages/students_dashboard/students.js";
import Overview from "./components/admin_dashboard/Overview.js";
import ApproveVolunteers from "./components/admin_dashboard/ApprovalVolunteers.js";
import ApproveStudents from "./components/admin_dashboard/ApprovalStudents.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/admin/overview" element={<Overview />} />
          <Route exact path="/admin/approvalvolunteers" element={<ApproveVolunteers />} />    
          <Route exact path="/admin/approvalstudents" element={<ApproveStudents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
