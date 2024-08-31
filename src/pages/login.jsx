import React, { useState } from "react";
import axios from "axios";
import { base_url } from "../utils/base-url"; // Import the base URL
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/usercontext"; // Custom context for user data

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Initialize the error state
  const { setUser } = useUserContext(); // Access user context
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post(`${base_url}user/login`, {
        email,
        password,
      });
      const userData = response.data;
      setUser(userData); // Set user data in context
      navigate("/"); // Redirect to home page
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); // Display error message from server
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("assets/images/drilldown2.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl text-gray-800"
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="w-full flex justify-center mt-4">
            <button
              type="submit"
              className="bg-orange w-52 text-white font-semibold py-4 px-4 rounded-xl"
            >
              Login
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            New User?{" "}
            <a href="/register" className="text-orange">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
