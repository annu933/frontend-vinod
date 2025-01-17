// // import { Link } from "react-router-dom";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-800 text-white bg-blue">
//       <div className="container mx-auto py-8 px-4">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* About Section */}
//           <div>
//             <div className="flex items-center h-20 w-auto">
//               <img
//                 className="h-10 w-auto text-orange"
//                 src="/images/logo.png"
//                 alt="Your Company"
//               />
//             </div>
//             <p className="text-sm">
//               Welcome to TravelSite, your one-stop solution for discovering
//               amazing travel destinations and booking hassle-free trips. Let’s
//               explore the world together!
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Quick Links</h2>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="hover:text-orange">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#about" className="hover:text-orange">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#services" className="hover:text-orange">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/booking" className="hover:text-orange">
//                   Bookings
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Follow Us</h2>
//             <ul className="flex space-x-4">
//               <li>
//                 <a
//                   href="https://www.facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-orange"
//                 >
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-orange"
//                 >
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-orange"
//                 >
//                   Instagram
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-6 border-gray-500" />

//         {/* Bottom Section */}
//         <div className="text-center text-sm">
//           <p>© 2024 Jay Maa Travels. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import { Link } from "react-router-dom";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-blue text-white">
      <div className="container mx-auto py-8 px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <div className="flex items-center h-20 w-auto">
              <img
                className="h-10 w-auto text-orange"
                src="/images/logo.png"
                alt="Your Company"
              />
            </div>
            <p className="text-sm">
              Welcome to TravelSite, your one-stop solution for discovering
              amazing travel destinations and booking hassle-free trips. Let’s
              explore the world together!
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <IoLocationSharp className="text-5xl" />
                <span>
                  shop number 18, New bridge compound, near new bus stand,
                  Tallital, Nainital, Uttarakhand 263001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  +91 8894887494
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail />
                <a
                  href="mailto:info@travelsite.com"
                  className="hover:text-orange"
                >
                  jaymaatravels@gmail.com
                </a>
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange flex items-center space-x-1"
                >
                  <i className="fab fa-facebook"></i>
                  <span className="border rounded-full p-2">
                    <RiFacebookFill />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange flex items-center space-x-1"
                >
                  <i className="fab fa-twitter"></i>
                  <span className="border rounded-full p-2">
                    <FaXTwitter />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jai_maa_travel_uk_04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange flex items-center space-x-1"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="border rounded-full p-2">
                    <FaInstagram />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange flex items-center space-x-1"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="border rounded-full p-2">
                    <AiFillYoutube />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-orange">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#travel" className="hover:text-orange">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="#food" className="hover:text-orange">
                  Food
                </Link>
              </li>
              <li>
                <Link href="#event" className="hover:text-orange">
                  Event
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-500" />

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p>© 2024 Jay Maa Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
