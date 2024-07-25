import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">
              <a href="#">DevHub</a>
            </span>
          </div>
          <ul className="hidden lg:flex space-x-12">
            <a href="#Features" className=" hover:text-orange-500 duration-150">
              Features
            </a>
            <a href="#Workflow" className="hover:text-orange-500 duration-150">
              Workflow
            </a>
            <a href="#Pricing" className="hover:text-orange-500 duration-150">
              Pricing
            </a>
            <a
              href="#Testimonials"
              className="hover:text-orange-500 duration-150"
            >
              Testimonials
            </a>
          </ul>
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md border-gray-500  hover:bg-white/5 duration-150"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleToggleMenu}>
              {showMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {showMenu && (
          <div>
            <ul className="fixed right-0 z-20 bg-neutral-900 w-full py-12 flex flex-col justify-center items-center lg:hidden space-y-1">
              <a
                href="#Features"
                className="w-full text-center hover:bg-white/5 py-3 duration-150"
              >
                Features
              </a>
              <a
                href="#Workflow"
                className="w-full text-center hover:bg-white/5 py-3 duration-150"
              >
                Workflow
              </a>
              <a
                href="#Pricing"
                className="w-full text-center hover:bg-white/5 py-3 duration-150"
              >
                Pricing
              </a>
              <a
                href="#Testimonials"
                className="w-full text-center hover:bg-white/5  py-3 duration-150"
              >
                Testimonials
              </a>
              <div className="flex space-x-6 py-3">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md border-gray-500  hover:bg-white/5 duration-150"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                >
                  Create an Account
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
