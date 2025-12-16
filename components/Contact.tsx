"use client";

import { useState } from "react";
import { CONTACT_INFO } from "../constants";
import Footer from "./Footer";

const AnimatedBg = () => (
  <>
    <div id="stars" className="parallax-bg">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
    <div id="bubbles" className="parallax-bg">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  </>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section
      className="relative bg-transparent flex flex-col min-h-screen"
      id="contact"
    >
      <div className="relative z-10 flex-grow flex flex-col justify-center px-[10vw] pt-20 pb-8 sm:pb-20">
        <div className="top-header text-center mb-12">
          <h1 className="text-3xl font-semibold text-text-second dark:text-gray-200 mb-2.5">
            Get in touch
          </h1>
          <span className="text-[#999] dark:text-gray-400">
            Do you have a project in your mind, contact me here
          </span>
        </div>
        <div className="row flex flex-col lg:flex-row justify-between w-full gap-12">
          <div className="col flex w-full lg:w-1/2">
            <div className="contact-info group relative flex flex-col justify-center items-center p-8 w-full h-[315px] bg-white-color dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="z-10 text-center text-text-second dark:text-gray-300 transition-colors duration-400 group-hover:text-white-color">
                <h2 className="text-2xl font-semibold mb-5">
                  Find Me <i className="uil uil-corner-right-down"></i>
                </h2>
                <p className="flex items-center justify-center gap-2.5 my-1.5">
                  <i className="uil uil-envelope text-lg"></i> Email:{" "}
                  {CONTACT_INFO.email}
                </p>
                <p className="flex items-center justify-center gap-2.5 my-1.5">
                  <i className="uil uil-phone text-lg"></i> Phone:{" "}
                  {CONTACT_INFO.phone}
                </p>
              </div>
              <div className="absolute bottom-0 w-full h-full bg-second-color dark:bg-indigo-700 transform translate-y-full transition-transform duration-400 ease-in-out group-hover:translate-y-0"></div>
            </div>
          </div>
          <div className="col flex w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="form-control flex flex-col gap-4 w-full"
              noValidate
            >
              <div className="form-inputs flex flex-col sm:flex-row gap-4 w-full">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field w-full h-14 bg-transparent border-2 border-[#AAA] dark:border-gray-600 dark:text-gray-200 rounded-xl px-5 outline-none focus:border-first-color dark:focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Name"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field w-full h-14 bg-transparent border-2 border-[#AAA] dark:border-gray-600 dark:text-gray-200 rounded-xl px-5 outline-none focus:border-first-color dark:focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Email"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="text-area">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-48 bg-transparent border-2 border-[#AAA] dark:border-gray-600 dark:text-gray-200 rounded-xl p-5 outline-none resize-none focus:border-first-color dark:focus:border-indigo-500 transition-colors duration-300"
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <div className="form-button">
                <button
                  type="submit"
                  className="btn flex items-center justify-center font-medium py-3 px-5 bg-second-color dark:bg-indigo-700 text-white-color border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-[#00B5E7] transform hover:scale-105"
                >
                  Send{" "}
                  <i className="uil uil-message text-lg -rotate-45 ml-2"></i>
                </button>
              </div>
              {isSubmitted && (
                <div className="mt-4 text-center text-green-600 dark:text-green-400 p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
