import Navbar from "./Components/Navbar";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

const Homepage = () => {
  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-center w-full">
        <Navbar />
      </div>
      <div
        id="homepage"
        className="w-full h-[90vh] flex items-center justify-center font-poppins"
      >
        <div className="text-center flex flex-col gap-1 items-center">
          <p className="text-teal-400 font-medium font-geist border border-teal-400 w-fit px-7 py-1 rounded-full">
            Haekal Abdillah Ramadhan
          </p>
          <h1 className="capitalize text-gray-200 text-xl font-semibold">
            Welcome to my space. This web is my canvas, and i am the Artist.
          </h1>
          <div className="w-full flex items-center justify-center gap-2 font-inter pt-2">
            {/* <=== Link 1 ==> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/HaekalAR"
              className="bg-[#fff] border border-gray-200 px-2 py-2 rounded-full flex items-center font-semibold gap-2 hover:bg-[#202020] hover:border-teal-400 group transition-all duration-200"
            >
              <FaGithub className="text-black text-xl w-fit rounded-full group-hover:text-white" />
              <p className="text-[#202020] text-sm font-semibold group-hover:text-white">
                Github
              </p>
            </Link>
            {/* <=== Link 2 ===> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/HaekalAR"
              className="bg-[#fff] border border-gray-200 px-2 py-2 rounded-full flex items-center font-semibold gap-2 hover:bg-[#202020] group transition-all duration-200"
            >
              <FaInstagram className="text-black text-xl w-fit rounded-full group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
