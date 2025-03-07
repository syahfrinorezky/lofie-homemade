import { useState } from "react";
import { Link } from "react-scroll";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/images/lofie.ico";
import data from "../types/data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky -top-0.5 bg-white shadow-md z-50">
      <div className="nav-container">
        {/* FOR MOBILE NAVBAR */}
        <div className="navbar-mobile flex md:hidden px-6 py-4 justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="logo-container flex space-x-2">
            <img src={logo} alt={data.name} className="w-8 cursor-pointer" />
            <p className="text-primary font-primary font-extrabold text-2xl">
              {data.name.toUpperCase()}
            </p>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary focus:outline-none">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-full z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary focus:outline-none">
              <XMarkIcon className="w-6 h-6 mt-1 mr-2" />
            </button>
          </div>
          <ul className="flex flex-col justify-center space-y-5 p-6">
            {["home", "about", "menu", "review"].map((link) => (
              <li key={link} className="py-3 border-b">
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  className="px-3 py-2 cursor-pointer rounded-md hover:bg-primary hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* FOR TABLET AND DESKTOP NAVBAR */}
        <div className="navbar-tabdesk hidden md:flex px-6 py-4 justify-between items-center">
          {/* LOGO CONTAINER */}
          <div className="logo-container flex space-x-2">
            <Link to="home" smooth={true} duration={500}>
              <img src={logo} alt={data.name} className="w-8 cursor-pointer" />
            </Link>
            <span className="text-primary font-primary font-extrabold text-2xl">
              {data.name.toUpperCase()}
            </span>
          </div>

          {/* NAVBAR CONTAINER */}
          <div className="navbar">
            <ul className="flex space-x-2">
              {["home", "about", "menu", "review"].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="px-3 py-2 cursor-pointer rounded-md hover:bg-primary hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT CONTAINER */}
          <div className="contact-container">
            <a
              href="https://wa.me/6287875231592?text=Halo%20kak,%20saya%20ingin%20pesan%20donat%20dong!"
              target="_blank"
              className="flex items-center gap-x-2 bg-green-500 text-white px-3 py-2 rounded-md hover:brightness-50">
              <ChatBubbleBottomCenterTextIcon className="w-6" />
              <span className="font-semibold">Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
