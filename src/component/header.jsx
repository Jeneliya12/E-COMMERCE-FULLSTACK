import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/usercontext";
import { CartContext } from "../context/cartcontext";

const Header = () => {
  const { user, handleLogout } = useUserContext();
  const { cart } = useContext(CartContext);

  const [showLogout, setShowLogout] = useState(false);

  // Toggle visibility of the logout button
  const toggleLogout = () => setShowLogout((prev) => !prev);

  // Calculate total number of items in the cart
  const totalItemsInCart = cart.reduce(
    (acc, product) => acc + (product.quantity || 0),
    0
  );

  return (
    <nav className="sticky top-0 bg-black border-b border-gray-300 py-4 px-6 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="assets/images/logo2.png" alt="Logo" className="h-14" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-grow space-x-8 mx-4">
          <li>
            <Link
              to="/"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#shop"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#product"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#instagram"
              className="text-white text-xl hover:text-gray-400 transition"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* User Image and Cart Icon */}
        <div className="flex items-center space-x-4 ml-auto">
          {user ? (
            <div className="relative flex flex-col items-center">
              <span
                className="text-white text-2xl font-semibold cursor-pointer hover:text-gray-300 transition"
                onClick={toggleLogout}
              >
                {user.firstname}
              </span>
              {showLogout && (
                <button
                  onClick={handleLogout}
                  className="absolute w-28 text-2xl top-full mt-6 bg-orange text-white font-semibold py-4 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white text-2xl hover:text-gray-400 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white text-2xl hover:text-gray-400 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* Cart Icon with Item Count */}
          <Link to="/cart" className="relative text-white">
            <img
              src="assets/images/icon-cart.svg"
              alt="Cart"
              className="w-6 h-6 mr-6"
            />
            {totalItemsInCart > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
