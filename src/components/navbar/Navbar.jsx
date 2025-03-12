import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" flex justify-around mt-[130px] gap-[600px]  bg-[#215A37] py-4 text-white font-semibold text-[20px]">
        {/* navbar start */}
        <div></div>
        <div>
          <ul className="flex justify-around gap-20">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/education">
              <li>Education</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/support">
              <li>Support</li>
            </Link>
            <Link to="/faq">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
