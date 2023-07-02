import { useState, useEffect } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedin(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setIsLoggedin(false);
    window.location.href = "/";
  };

  const handleClick = () => {
    setActive(!active);
  };

  function WinOpen2() {
    var url = document.redirect.selection.value;
    document.location.href = url;
  }

  return (
    <>
      <nav className="flex items-center flex-wrap p-1 ">
      <div class="flex items-center">
  <div class="h-10 w-10 mr-2 inline">
    <div class="logo-image">
      <img src="https://lampeducationtrust.com/wp-content/uploads/2023/02/cropped-Copy-of-LAMP-1.png" class="img-fluid h-10 w-10 self-center"/>
    </div>
  </div>
  <div>
    <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Lamp</a>
  </div>
</div>
        <button
          className=" inline-flex p-3 rounded lg:hidden ml-auto hover:text-blue outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a href="/">
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-blue">
                About Us
              </p>
            </a>
            <a href="/donate">
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-blue">
                Donate
              </p>
            </a>
            {isLoggedin ? (
              <button className="" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                <form name="redirect">
                  <select name="selection" onChange={WinOpen2}>
                    <option value="Register" onChange={WinOpen2}>
                      Register
                    </option>
                    <option value="/student_register" onChange={WinOpen2}>
                      Student
                    </option>
                    <option value="/volunteer_register" onChange={WinOpen2}>
                      Volunteer
                    </option>
                  </select>
                </form>
                <a href="/login">
                  <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-blue">
                    Login
                  </p>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
