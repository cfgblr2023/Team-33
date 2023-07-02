import "./landing.css";

function Landing() {
  return (
    <div className="App">
      <div className="about" id="about">
        <div className="col1">
          <div className="head1">WHO WE ARE</div>
          <div className="head2">ABOUT US</div>
        </div>
        <div className="content">
          Lamp Educational and Charitable Trust is a non-profit organization
          started in 2010 by Jaganathan Rajagopal in Bangalore. When he was
          working in a corporate company, often he was visiting NGOs, Old Age
          Homes, Cancer Hospitals, and Government Schools in Bangalore as part
          of CSR activities, after listening to many students’ painful stories,
          he volunteered to donate part of his salary and also collected
          donations from his friends to pay fees to the school and college
          dropout students. Later we started donating textbooks, notebooks,
          stationaries, uniforms, new old dresses, and ration kits.
        </div>
      </div>
      <div className="about" id="donate">
        <div className="col1">
          <div className="head2">Donate Education</div>
        </div>
        <div className="content">
          You can be a helpful hand to change a child’s life forever. When you
          become a child sponsor, you become a hero to a child living in
          poverty.
        </div>
        <a
          href="/donate"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button"
        >
          Donate now
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
      <div className="about" id="register">
        <div className="col1">
          <div className="head2">Join Us</div>
        </div>
        <div className="content">
          You can be a helpful hand to change a child’s life forever. When you
          become a child sponsor, you become a hero to a child living in
          poverty.
        </div>
        <div className="col3">
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow cards">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              Students Program
            </h5>
            <p class="mb-3 font-normal text-black ">
              Education is the best tool to end “poverty”. We want every student
              in the nation should learn how to catch their fish, instead of
              begging for a fish. #Educationendspoverty
            </p>
            <a
              href="/student_register"
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
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow cards">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">Volunteer</h5>
            <p class="mb-3 font-normal text-black ">
              Volunteers are the backbone of every organization – they not only
              carry the organization’s ideals within them but also spread the
              message far and beyond.
            </p>
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
  );
}

export default Landing;
