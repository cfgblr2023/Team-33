import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-1 ">
        <a href="/">
          <p className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl font-bold uppercase tracking-wide">
              Lamp
            </span>
          </p>
        </a>
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
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-green">
                Home
              </p>
            </a>
            <a href="/">
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-blue">
                Services
              </p>
            </a>
            <a href="/">
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-blue">
                About us
              </p>
            </a>
            <a href="/">
              <p className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-blue">
                Contact us
              </p>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
