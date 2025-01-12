// import { Link } from "react-router-dom";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white bg-blue">
      <div className="container mx-auto py-8 px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <div className="flex items-center h-20 w-auto">
              <img
                className="h-10 w-auto text-orange"
                src="/images/2jan-.png"
                alt="Your Company"
              />
            </div>
            <p className="text-sm">
              Welcome to TravelSite, your one-stop solution for discovering
              amazing travel destinations and booking hassle-free trips. Let’s
              explore the world together!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-orange">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-orange">
                  Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-500" />

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p>© 2024 TravelSite. All rights reserved.</p>
          <p>
            Developed with ❤️ by{" "}
            <a
              href="https://www.yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              Your Name
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
