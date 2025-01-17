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
    console.log("Form Submitted:", formData);
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
          value={formData?.destination}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2 outline-0 w-64"
          placeholder="Destination"
          required
        />

        <input
          type="date"
          name="departureDate"
          value={formData?.departureDate}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2 outline-0 "
          required
        />

        <input
          type="date"
          name="returnDate"
          value={formData?.returnDate}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2 outline-0"
        />

        <input
          type="number"
          name="duration"
          value={formData?.duration}
          onChange={handleChange}
          className="border border-[#D3D3D3] rounded-md px-4 py-2  w-24"
          placeholder="Days"
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
