import { IoSearch } from "react-icons/io5";
import { FaAmbulance } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="/video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 scale-[120%]"
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0 w-full h-full z-15 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-black/90 via-transparent to-black/90" />
      </div>

      <div className="menubar  z-20 w-full h-22 flex justify-between items-center transition-all duration-300 bg-transparent">
        <div className="w-[15%]"></div>
        <ul className="flex gap-4 font-semibold text-white relative  justify-center items-center w-[60%]">
          <li className="relative group">
            <span className="text-[1rem] text-transform: uppercase grid items-center cursor-pointer px-4 py-2  hover:text-black transition">
              Discover Medicant
            </span>
            <div className="fixed top-[88px] left-0 w-full h-[calc(60vh-88px)] bg-[#fdf2ec] text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-30">
              <div className="p-10 grid grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                <div>
                  <h3 className="font-bold mb-2">About Us</h3>
                  <ul className="space-y-2">
                    <li>Our Mission</li>
                    <li>Leadership</li>
                    <li>Careers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Campus</h3>
                  <ul className="space-y-2">
                    <li>Locations</li>
                    <li>Virtual Tour</li>
                    <li>Infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Community</h3>
                  <ul className="space-y-2">
                    <li>Initiatives</li>
                    <li>Events</li>
                    <li>Partners</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group">
            <span className=" text-[1rem] text-transform: uppercase grid items-center cursor-pointer px-4 py-2  hover:text-black transition">
              Medical Services
            </span>
            <div className="fixed top-[88px] left-0 w-full h-[calc(60vh-88px)] bg-[#fdf2ec] text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-30">
              <div className="p-10 grid grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                <div>
                  <h3 className="font-bold mb-2">Departments</h3>
                  <ul className="space-y-2">
                    <li>Cardiology</li>
                    <li>Neurology</li>
                    <li>Orthopedics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Diagnostics</h3>
                  <ul className="space-y-2">
                    <li>Lab Tests</li>
                    <li>Imaging</li>
                    <li>Reports</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Support Services</h3>
                  <ul className="space-y-2">
                    <li>Emergency</li>
                    <li>Pharmacy</li>
                    <li>Rehabilitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <img
            src="/image.png"
            alt="Logo"
            className="w-20 h-14 cursor-pointer  transition duration-300"
          />

          {/* Other nav items */}
          <li className="text-[1rem] text-transform: uppercase grid items-center cursor-pointer px-4 py-2 hover:bg-white hover:text-black transition">
            Health Library
          </li>
          <li className="text-[1rem] text-transform: uppercase grid items-center cursor-pointer px-4 py-2 hover:bg-white hover:text-black transition">
            Contact Us
          </li>
        </ul>

        <div className="flex w-[15%] gap-4">
          <div className="search bg-[#ff5100] h-8 w-8 rounded-full grid items-center justify-center">
            <IoSearch className="text-white" />
          </div>

          <div className="flex flex-col  items-center">
            <FaAmbulance className="text-orange-600" />
            <span className="number text-[0.8rem] text-white">1066</span>
          </div>

          <li className=" language grid items-center">
            <select
              style={{
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right .7rem center", // Adjust this value to control margin
                backgroundSize: "1rem",
              }}
              className="bg-transparent text-white outline-0 border-2 border-white px-4 py-1 rounded-[1.75rem] text-[0.8rem] transition duration-300 pr-7" // Make sure to leave enough space for the icon!
              defaultValue="en"
            >
              <option className="text-black" value="en">
                English
              </option>
              <option className="text-black" value="hi">
                Hindi
              </option>
              <option className="text-black" value="fr">
                French
              </option>
              <option className="text-black" value="de">
                German
              </option>
            </select>
          </li>
        </div>
      </div>

      <div className=" absolute bottom-0 left-0  bottompart h-48 w-full z-20 flex flex-col items-center justify-center ">
        <div className="w-[60%] relative h-14 mb-14 grid items-center ">
          <div className="absolute right-2  search bg-[#ff5100] h-8 w-8 rounded-full grid items-center justify-center">
            <IoSearch className="text-white" />
          </div>
          <input
            type="search"
            name="text"
            id=""
            placeholder="Search for doctors & specialities...
"
            className=" searchbar w-[100%] outline-0 border-2 border-blue-400 py-2 px-10 rounded-3xl focus:bg-white focus:border-0"
          />
        </div>
        <div className=" h-12 w-[60%] gap-1  flex rounded-l-full rounded-r-full border overflow-hidden">
          <div className=" h-full w-[25.2%] bg-white flex gap-4 items-center justify-center  cursor-pointer ">
            <h3 className="font-semibold">Book Appointment</h3>
            <IoArrowForwardCircleOutline className="text-3xl font-thin" />
          </div>
          <div className=" h-full w-[24.5%] bg-white flex gap-4 items-center justify-center cursor-pointer">
            <h3 className="font-semibold">Find Hospital</h3>
            <IoArrowForwardCircleOutline className="text-3xl font-thin" />
          </div>
          <div className=" h-full w-[24.5%] bg-white flex gap-4 items-center justify-center cursor-pointer">
            <h3 className="font-semibold">Book Health Checkup</h3>
            <IoArrowForwardCircleOutline className="text-3xl font-thin" />
          </div>
          <div className=" h-full w-[25%] bg-white flex gap-4 items-center justify-center cursor-pointer">
            <h3 className="font-semibold">Get Expert Opinion</h3>
            <IoArrowForwardCircleOutline className="text-3xl font-thin" />
          </div>
        </div>
      </div>
    </div>
  );
}
