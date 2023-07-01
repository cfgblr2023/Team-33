function volunteerForms() {
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
                        type="text"
                        name="full_name"
                        id="full_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="password"
                      />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">State / province</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="md:col-span-2">
                      <label for="highest-qualification">
                        Highest Qualification:
                      </label>
                      <select
                        name="highest-qualification"
                        id="highest-qualification"
                        class="text-gray-800 w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center"
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
                      </select>
                    </div>
                    <div class="md:col-span-5">
                      <label for="Volunteer work">I want to :</label>
                      <select
                        name="Volunteer work"
                        id="Volunteer work"
                        class="text-gray-800 w-full h-10 bg-gray-50 flex border border-gray-200 rounded items-center"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Raise Funds">Raise Funds</option>
                        <option value="Event Organizer">Event Organizer</option>
                        <option value="School College Tie -Up">
                          School & College Tie -Up
                        </option>
                        <option value="Collect Non-Monetary Items">
                          Collect Non-Monetary Items
                        </option>
                        <option value="Internship Program">
                          Internship Program - Digital Marketing, Human
                          Resources, and Teachers
                        </option>
                      </select>
                    </div>
                    <div class="md:col-span-5 text-right">
                      <a
                        href="/volunteer_register"
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

export default volunteerForms;
