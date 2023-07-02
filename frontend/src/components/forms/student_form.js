import { useState } from "react";

function StudentForms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    qualification: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}register/student/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          address: formData.address,
        },
        highest_qualification: formData.qualification,
        proof: "Qualified",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("Token", data.access_token);
        localStorage.setItem("Data", JSON.stringify(data.user));
        if (data.access_token) {
          window.location.href = "/student";
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <div class="min-h-screen p-6 bg-gray-100">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 text-left">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.name}
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.email}
                        placeholder="email@domain.com"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                      />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="highest-qualification">
                        Highest Qualification:
                      </label>
                      {/* <select
                        name="highest-qualification"
                        id="highest-qualification"
                        class="text-gray-800 w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center"
                        value={formData.qualification}
                        onChange={handleChange}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="No formal education">
                          No formal education
                        </option>
                        <option value="Primary education">
                          Primary education
                        </option>
                        <option value="Secondary education">
                          Secondary education or High school
                        </option>
                        <option value="GED">GED</option>
                        <option value="Vocational qualification">
                          Vocational qualification
                        </option>
                        <option value="Bachelor's degree">
                          Bachelor's degree
                        </option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or higher">
                          Doctorate or Higher
                        </option>
                      </select> */}
                      <input
                        type="text"
                        name="qualification"
                        id="qualification"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.qualification}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="avatar">Upload Document: </label>
                      <p>
                        Add relevant Identity card, Marksheets or Bonafide
                        Certificate
                      </p>
                      <input type="file" id="avatar" name="avatar"></input>
                    </div>

                    <div class="md:col-span-5">
                      <label for="avatar">Upload Govt ID Proof: </label>
                      <input type="file" id="avatar" name="avatar"></input>
                    </div>

                    <div class="md:col-span-2 text-left">
                      <p class="font-semibold text-gray-600">
                        Already have an account?
                      </p>
                      <a href="/login" class="text-blue-600">
                        Login
                      </a>
                    </div>

                    <div
                      class="md:col-span-3 text-right"
                      onClick={handleSubmit}
                    >
                      <a
                        href="/"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button"
                      >
                        Register
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentForms;
