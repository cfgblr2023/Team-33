function Login() {
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

                      <div class="md:col-span-1 text-left">
                      <p class="font-semibold text-gray-600">Don't have an account?</p>
                    <a href="/">Register</a>
                      </div>
                    

                      <div class="md:col-span-4 text-right">
                      <a
                        href="/"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button"
                      >
                        Login
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
  
  export default Login;
  