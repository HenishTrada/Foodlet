import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthor } from "../context/AuthorContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { author } = useAuthor();

  return (
    <div className=" fixed z-10 flex h-20 w-full items-center justify-between bg-white px-8 shadow-md lg:pl-8 lg:pr-0">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-24" src={logo} alt="FoodLet_Logo" />
        </Link>
        <div className="mt-8">
          {/* <h2 className="font-Pacifico text-2xl leading-6">FoodLet</h2> */}
            <h6 className="-ml-16 font-RobotoCondenced text-xs">
              by {author?.name}
            </h6>
        </div>
      </div>
      <NavLinks className="mr-2 hidden h-full max-w-[80%] items-center justify-around gap-6  px-2  font-semibold lg:flex" />
      <button
        onClick={toggleMenu}
        className={`transform text-3xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBurger} />
      </button>

      {isOpen && (
        <NavLinks
          setIsOpen={setIsOpen}
          className=" absolute left-0 right-0 top-24 z-10 m-auto flex h-96 w-11/12 flex-col flex-wrap items-center justify-center gap-3  rounded-lg bg-gray-800 bg-opacity-30 text-lg font-semibold backdrop-blur-sm backdrop-filter lg:hidden"
        />
      )}
    </div>
  );
};

export default Header;
