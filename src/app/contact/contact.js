import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full ">
      <div className="">
        <form className="space-y-6">
          {/* Name and Email in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-1 px-3 py-3 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              id="message"
              name="message"
              rows="8"
              className="w-full mt-1 px-3 py-2 border border-[#A9A9A9] rounded-md shadow-sm outline-0 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center px-4 py-2 bg-[#FEA116] text-white font-medium rounded-md shadow-sm hover:bg-[#FEA115] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
