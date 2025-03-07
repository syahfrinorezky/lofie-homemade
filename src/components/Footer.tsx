import logo from "../assets/images/lofie.ico";
import data from "../types/data";
import { Link } from "react-scroll";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white border-t-10 border-primary mt-16">
      <div className="main-container lg:grid lg:grid-cols-3">
        <div className="head-container p-4 w-full h-full md:flex md:justify-center lg:flex lg:items-center lg:justify-center">
          <img src={logo} alt={data.name} className="w-25 lg:w-2/5" />
        </div>
        <div className="md:grid md:grid-cols-2 lg:block">
          <div className="navigation md:order-2 lg:hidden">
            <div className="body-container p-6">
              <h1 className="font-bold text-xl mb-5">Navigation</h1>
              <div className="grid grid-cols-2 gap-y-3">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 underline cursor-pointer hover:text-white">
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 underline cursor-pointer hover:text-white">
                  About
                </Link>
                <Link
                  to="menu"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 underline cursor-pointer hover:text-white">
                  Menu
                </Link>
                <Link
                  to="Review"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 underline cursor-pointer hover:text-white">
                  Review
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-container px-6 pt-6 pb-12 space-y-4 md:order-1">
            <h1 className="font-bold text-xl mb-5">Get in touch</h1>
            <div className="location flex items-center gap-x-2">
              <MapPinIcon className="w-8" />
              <p className="text-sm font-secondary">{data.address}</p>
            </div>
            <div className="time flex items-center gap-x-2">
              <ClockIcon className="w-8" />
              <p className="text-sm font-secondary">{data.time}</p>
            </div>
            <div className="call flex flex-col gap-y-3 mt-5">
              <h1>Chat :</h1>
              <a
                href="https://wa.me/6287875231592?text=Halo%20kak,%20saya%20ingin%20pesan%20donat%20dong!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-green-600 rounded-md w-fit hover:brightness-50">
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="navigation md:order-2 hidden lg:block">
          <div className="body-container p-6">
            <h1 className="font-bold text-xl mb-5">Navigation</h1>
            <div className="grid grid-cols-2 gap-y-3">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-400 underline cursor-pointer hover:text-white">
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-400 underline cursor-pointer hover:text-white">
                About
              </Link>
              <Link
                to="menu"
                smooth={true}
                duration={500}
                className="text-gray-400 underline cursor-pointer hover:text-white">
                Menu
              </Link>
              <Link
                to="Review"
                smooth={true}
                duration={500}
                className="text-gray-400 underline cursor-pointer hover:text-white">
                Review
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container bg-primary p-3">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} {data.name} Homemade. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
