import React, { useState } from "react";
import AppContext from "../context/App_Context";
import { useContext } from "react";

const Contact = () => {

  const {sendMessage,theme} = useContext(AppContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      sendMessage(formData)
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className={`flex justify-center  items-center min-h-screen ${theme ? "bg-base-100 text-white" : "bg-white text-black"}`}>
      <form onSubmit={handleSubmit} className="border shadow-lg p-6 rounded-lg w-[320px]">
        <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2>

        {/* Name Field */}
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-3 py-2 border rounded"
            autoComplete="off"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded"
            autoComplete="off"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone Field */}
        <div className="mb-3">
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full px-3 py-2 border rounded"
            autoComplete="off"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-3 py-2 border rounded"
            rows={4}
            autoComplete="off"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
