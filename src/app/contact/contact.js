"use client";
import React from "react";

const TravelContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    customDestination: "",
    travelDateFrom: "",
    travelers: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = React.useState("");

  const destinations = [
    "Nainital",
    "Lucknow",
    "Jaipur",
    "Manali",
    "Shimla",
    "Other",
  ]; // Predefined options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDestinationChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      destination: value,
      customDestination: value === "Other" ? "" : prev.customDestination,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDestination =
      formData.destination === "Other"
        ? formData.customDestination
        : formData.destination;

    const phoneNumber = "6267293696"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${selectedDestination}
Travel Date: ${formData.travelDateFrom}
Number of Travelers: ${formData.travelers}
Message: ${formData.message}`
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    // Show success message and reset form
    setSuccessMessage("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      customDestination: "",
      travelDateFrom: "",
      travelers: "",
      message: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="w-full lg:px-8">
      <div className="max-w-2xl mx-auto">
        <form className="space-y-2" onSubmit={handleSubmit}>
          {successMessage && (
            <div className="text-green-600 font-medium mb-4">
              {successMessage}
            </div>
          )}
          {/* Name and Email */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                placeholder="Email Id"
                required
              />
            </div>
          </div>
          {/* The rest of the form fields remain unchanged */}
          {/* Phone Number */}
          <div>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Travel Destination */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleDestinationChange}
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                required
              >
                <option value="" disabled>
                  Select Destination
                </option>
                {destinations.map((dest, index) => (
                  <option key={index} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>
            {/* Travel Date */}
            <div>
              <input
                type="text"
                id="travelDateFrom"
                name="travelDateFrom"
                value={formData.travelDateFrom}
                placeholder="choose date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                required
              />
            </div>
          </div>
          {/* Custom Destination Field (Shown only if "Other" is selected) */}
          {formData.destination === "Other" && (
            <div>
              <input
                type="text"
                id="customDestination"
                name="customDestination"
                value={formData.customDestination}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                placeholder="Enter Destination Name"
                required
              />
            </div>
          )}

          {/* Number of Travelers */}
          <div>
            <input
              type="number"
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
              placeholder="Number of Travelers"
              required
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full mt-1 px-3 py-2 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center px-4 py-2 bg-[#FEA116] text-white font-medium rounded-md shadow-sm hover:bg-[#FEA115] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Send Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravelContactForm;
