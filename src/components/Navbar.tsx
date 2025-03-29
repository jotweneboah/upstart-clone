
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <div className="flex items-center">
              <svg
                width="118"
                height="32"
                viewBox="0 0 118 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M99.5 5.6a13.5 13.5 0 017.3 7.3L118 0 99.5 5.6zM0 15.2h5.8v10.4c0 .6.4 1 1 1h5.1c.5 0 1-.4 1-1V4.5c0-.5-.5-1-1-1H1c-.5 0-1 .5-1 1v10.7zm30.4-1.5c0-3.2-2.4-4.8-5.5-5.6-2.1-.6-4-1-4-2.3 0-1 .9-1.6 2.3-1.6 1.7 0 3.4.7 5 1.9.2.2.5.2.8 0l2.8-2.6c.3-.2.3-.6 0-.8-2.5-2.3-5.7-3.5-9-3.5-5 0-8.4 3-8.4 7 0 4.3 3.5 5.7 6.8 6.5 2.2.5 3.8 1 3.8 2.4 0 1.2-1 2-2.7 2-2.2 0-4.2-1-5.8-2.6a.5.5 0 00-.8 0L13 17.8a.5.5 0 000 .7c2.4 2.6 5.8 4 9.4 4 5.2 0 8-3.1 8-7zm30.9 11.9h5c.6 0 1-.4 1-1V4.5c0-.5-.4-1-1-1h-5c-.6 0-1 .5-1 1v20.1c0 .6.4 1 1 1zm40.4-22h5.1c.5 0 1 .5 1 1v15.4c0 3.2-1.8 4.8-5.5 4.8s-5.6-1.6-5.6-4.8V4.6c0-.5.5-1 1-1h5.1c.6 0 1 .5 1 1v14.8c0 .8.4 1.2 1.4 1.2s1.5-.4 1.5-1.2V4.6c0-.5.5-1 1-1zM74.8 15c0-6.8-4.4-11.8-10.7-11.8-6.2 0-10.7 5-10.7 11.8s4.5 11.7 10.7 11.7c6.3 0 10.7-5 10.7-11.7zm-5.8 0c0 4-2 6.9-5 6.9-2.8 0-4.8-2.8-4.8-6.9 0-4 2-7 4.9-7s4.9 3 4.9 7z"
                  fill="#018175"
                />
              </svg>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="nav-link flex items-center">
                BORROW <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link to="/for-lenders" className="nav-link">
              FOR LENDERS
            </Link>
            <Link to="/for-dealers" className="nav-link">
              FOR DEALERS
            </Link>
            <div className="relative group">
              <button className="nav-link flex items-center">
                ABOUT <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="nav-link flex items-center">
                RESOURCES <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Link
            to="/login"
            className="text-teal-600 font-semibold hover:text-teal-700"
          >
            LOG IN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
