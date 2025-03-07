import { Link } from "react-scroll";
import { FaStore } from "react-icons/fa";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import data from "../types/data";
import donut from "../assets/images/donut1.jpg";
import logo from "../assets/images/lofie.ico";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={donut}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-60"
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full md:-top-15 lg:-top-30">
        <div className="lg:max-w-screen-md mx-auto">
          <div className="title-container flex flex-col justify-center items-center gap-y-2">
            <img src={logo} alt={data.name} className="w-2/4 md:w-1/4" />
            <h1 className="text-3xl font-extrabold font-primary text-primary md:text-3xl">
              {data.name}
            </h1>
          </div>
          <div className="desc-container px-6 py-2 md:w-2/3 md:mx-auto">
            <p className="text-center font-tertiary text-sm text-white drop-shadow-x md:text-lg">
              Donat sederhana dengan cita rasa istimewa. Pesan sekarang untuk
              mendapatkan donat yang fresh.
            </p>
          </div>
          <div className="button-container mt-2 flex justify-center items-center gap-x-2">
            <Link
              to="menu"
              smooth={true}
              duration={500}
              className="menu-button flex px-3 py-2 bg-slate-50 rounded-md justify-center items-center gap-x-2 cursor-pointer hover:brightness-50">
              <FaStore className="text-xl items-center md:text-2xl" />
              <h1 className="font-bold font-tertiary drop-shadow-lg md:text-lg">
                Menu
              </h1>
            </Link>
            <a
              href="https://wa.me/6287875231592?text=Halo%20kak,%20saya%20ingin%20pesan%20donat%20untuk%20hari%20....%20dong!"
              target="_blank"
              className="whatsapp-button flex px-3 py-2 bg-green-500 text-white rounded-md justify-center items-center gap-x-2 cursor-pointer hover:brightness-50">
              <ChatBubbleBottomCenterTextIcon className="w-5 md:w-6" />
              <h1 className="font-bold font-tertiary drop-shadow-lg md:text-lg">
                Pre-Order!
              </h1>
            </a>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full">
        <path
          fill="#ffff"
          fillOpacity="1"
          d="M0,128L40,128C80,128,160,128,240,112C320,96,400,64,480,64C560,64,640,96,720,133.3C800,171,880,213,960,224C1040,235,1120,213,1200,192C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </section>
  );
}
