import React from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Button className="hover:bg-amber-500">hhh</Button>
      <div children="">shekhar code </div>
      <div className=" ">
        <ul className="flex md:flex-row md:justify-baseline flex-col  justify-evenly">
          <li>
            <a>home</a>
          </li>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>home</a>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
};

export default Header;
