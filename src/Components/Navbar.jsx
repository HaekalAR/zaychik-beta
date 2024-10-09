import { Link as Scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-fit h-fit py-2 px-7 bg-[#303030] text-white border border-[#404040] rounded-full font-geist hover:text-base text-sm  transition-all duration-200 fixed mt-10 shadow-md shadow-[#202020]">
      <div>
        <ul className="flex gap-2 items-center">
          <li className="hover:cursor-pointer">
            <Scroll>Home</Scroll>
          </li>
          <li className="hover:cursor-pointer">
            <Scroll>About</Scroll>
          </li>
          <li className="hover:cursor-pointer">
            <Scroll>Projects</Scroll>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
