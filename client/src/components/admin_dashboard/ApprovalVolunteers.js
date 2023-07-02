import Layout from "./Layout.js";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns = [
  { field: "name", headerName: "Name", width: 70 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "state", headerName: "State", width: 130 },
  { field: "qualification", headerName: "Qualification", width: 130 },
  { field: "docs", headerName: "Documents", width: 130 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ApprovalVolunteers = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const handleSubmit = async (event) => {
      fetch(`${process.env.REACT_APP_URL}verify/volunteer/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFormData(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    handleSubmit();
  }, []);

  const onSubmit = async (event) => {
    fetch(`${process.env.REACT_APP_URL}verify/volunteer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Layout />
      <div className="leaderboard">
        <div className="leaderboardbody">
          <div className="leaderboardTable">
            <div className=""></div>
            <div className="tableHead">
              <li className="NO">#</li>
              {/* <li>Name</li> */}
              <li className="Playavatar">Name</li>
              <li>Email</li>
              <li>Address</li>
              <li>Qualification</li>
              <li>Docs</li>
              <li>Verify</li>
            </div>
            {formData.map((play, i) => (
              <div key={i} className="tableBody">
                <div key="row" className="row">
                  <li key="no" className="NO">
                    {i + 1}
                  </li>
                  <li key="value">{play.user.name}</li>
                  <li key="email">{play.user.email}</li>
                  <li key="address">{play.user.address}</li>
                  <li key="qualification">{play.qualifications}</li>
                  <li key="prof">{play.proof}</li>
                  <li
                    key="verify"
                    class="text-blue"
                    onClick={() => {
                      onSubmit(play.user.name);
                    }}
                  >
                    Verify
                  </li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalVolunteers;
