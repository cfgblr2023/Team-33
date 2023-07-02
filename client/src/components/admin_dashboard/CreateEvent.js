import React, { useEffect } from "react";
import Layout from "./Layout.js";
import { useState } from "react";
import moment from "moment";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({
    skill: "",
    online: "false",
    date_and_time: "",
    link: "",
    location: "",
  });
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = () => {
      fetch(`${process.env.REACT_APP_URL}skills`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSkills(data);
        })
        .catch((err) => {
          console.log(err.message);
          setSkills([]);
        });
    };
    getSkills();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skill: formData.skill,
        online: formData.online,
        date_and_time: moment(formData.date_and_time).toISOString(),
        link: formData.link,
        loaction: formData.location,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Layout />
      <div className="App">
        <div class="min-h-screen p-6 bg-white">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 text-left">
                      <div class="md:col-span-5">
                        <label for="full_name">Event title</label>
                        {skills.map((play, i) => (
                          <select
                            name="highest-qualification"
                            id="highest-qualification"
                            class="text-gray-800 w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center"
                            key="qa"
                            value={formData.skill}
                            onChange={(e) =>
                              this.setForm({ value: e.target.value })
                            }
                          >
                            <option value="No formal education" key="formal">
                              {play.name}
                            </option>
                          </select>
                        ))}
                      </div>
                      <label>
                        <input
                          type="checkbox"
                          value="true"
                          onChange={handleChange}
                        />
                        Online
                      </label>
                      <div>
                        <label for="event_mode">Date</label>
                        <div class="relative max-w-sm ">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"></div>
                          <input
                            value={formData.date_and_time}
                            onChange={handleChange}
                            datepicker
                            type="date"
                            class="bg-white border border-black text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2 dark:bg-white-700"
                          />
                        </div>
                      </div>
                      <div>
                        <label class="md:col-span-2" for="link">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label class="md:col-span-2" for="link">
                          Link
                        </label>
                        <input
                          type="text"
                          name="link"
                          id="link"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.link}
                          onChange={handleChange}
                        />
                      </div>
                      <a
                        href="/volunteer_register"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button"
                        onClick={handleSubmit}
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
    </>
  );
}

export default CreateEvent;
