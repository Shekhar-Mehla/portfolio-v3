import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
const Header = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white  text-gray-900 flex justify-center items-center gap-2">
          <span className="text-sky-600">
            <IoIosArrowBack></IoIosArrowBack>
          </span>
          <span className=" text-gray-900 dark:text-gray-50">
            {" "}
            Shekhar Code
          </span>
          <span className="flex text-sky-600">
            <RxSlash></RxSlash>
            <IoIosArrowForward></IoIosArrowForward>
          </span>
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
