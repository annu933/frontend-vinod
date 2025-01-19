"use client";
import { useState } from "react";

export default function TravelFormBanner() {
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to WhatsApp with the message
    const phoneNumber = "6267293696";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `
Destination: ${formData.destination}
Departure Date: ${formData.departureDate}
Return Date: ${formData.returnDate}
Duration: ${formData.duration}
`
    )}`;
    window.open(whatsappUrl, "_blank");

    // Clear the form
    setFormData({
      destination: "",
      departureDate: "",
      returnDate: "",
      duration: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 items-center bg-white p-4 "
      >
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2 outline-0 w-64"
          placeholder="Destination"
          required
        />

        <input
          type="text"
          name="departureDate"
          value={formData.departureDate}
          placeholder="Departure Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2 outline-0 "
          required
        />

        <input
          type="text"
          name="returnDate"
          value={formData.returnDate}
          placeholder="Return Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2 outline-0"
        />

        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2  w-40"
          placeholder="Duration"
          required
        />


        <button
          type="submit"
          className="bg-orange text-white font-medium px-10 py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
