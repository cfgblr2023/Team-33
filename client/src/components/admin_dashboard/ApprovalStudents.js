import React, { useEffect } from "react";
import Layout from "./Layout.js";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const columns = [
  { field: "name", headerName: "Name", width: 70 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "address", headerName: "State", width: 130 },
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

const ApprovalStudents = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const handleSubmit = async (event) => {
      fetch(`${process.env.REACT_APP_URL}verify/student/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    handleSubmit();
  }, []);

  return (
    <div>
      <Layout />
      <div
        style={{
          height: 400,
          width: "80%",
          marginLeft: "auto",
          marginRight: "20px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default ApprovalStudents;
