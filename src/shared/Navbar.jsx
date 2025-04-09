import React from "react";

const Navbar = ({ selectedProduct, price }) => {
  return (
    <div className="md:max-w-11/12 mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Product</a>
                {/* <ul className="p-2">
                  <li>
                    <a>Product</a>
                  </li>
                  <li>
                    <a>Cart {selectedProduct}</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a>
                  Cart{" "}
                  <span className="font-semibold text-sky-500">
                    {selectedProduct}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-sky-500" href="/">
            {" "}
            React
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Product</summary>
                {/* <ul className="p-2">
                  <li>
                    <a>Product</a>
                  </li>
                  <li>
                    <a>Cart {selectedProduct}</a>
                  </li>
                </ul> */}
              </details>
            </li>
            <li>
              <a>
                Cart{" "}
                <span className="font-semibold text-sky-500">
                  {selectedProduct}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-8 font-semibold text-sky-500">
            <p>$ {price}</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
