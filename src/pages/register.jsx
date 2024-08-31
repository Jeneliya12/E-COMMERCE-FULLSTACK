import React, { useState } from "react";
import { base_url } from "../utils/base-url";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Validation Schema using Yup
const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string().required("Mobile number is required"),
  password: Yup.string().required("Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`${base_url}user/register`, values);
        setMessage("Registration successful! Redirecting to login...");
        setIsError(false);
        formik.resetForm();
        setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
      } catch (error) {
        setMessage(
          error.response?.data?.message ||
            "An error occurred during registration."
        );
        setIsError(true);
      }
    },
  });

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("assets/images/drilldown2.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-xl text-gray-800 ${
                formik.touched.firstname && formik.errors.firstname
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.firstname}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-xl text-gray-800 ${
                formik.touched.lastname && formik.errors.lastname
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.lastname}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-xl text-gray-800 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-xl text-gray-800 ${
                formik.touched.mobile && formik.errors.mobile
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.mobile}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-xl text-gray-800 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange text-white font-semibold py-2 px-4 rounded-xl mt-4"
          >
            Register
          </button>
        </form>
        {message && (
          <p
            className={`text-center mt-4 ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-orange">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
