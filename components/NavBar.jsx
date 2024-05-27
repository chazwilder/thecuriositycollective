import { PiMagnifyingGlassThin } from "react-icons/pi";

const NavBar = ({ children }) => {
  return (
    <div className="w-full max-w-7xl flex flex-row items-center justify-between mx-auto p-12">
      {children}
      <div>
        <p className="text-9xl inline-block font-lovtony text-black leading-[.3]">
          cc
          <span className="w-3 h-3 rounded-full bg-purple-600 inline-block ml-1"></span>
        </p>
      </div>
      <div className="w-9 h-9 flex flex-row rounded-full bg-purple-600 items-center justify-center text-center cursor-pointer">
        <PiMagnifyingGlassThin className="text-center text-white" size={16} />
      </div>
    </div>
  );
};

export default NavBar;
