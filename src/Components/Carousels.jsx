import React from "react";
import { Carousel } from "flowbite-react";

const Carousels = () => {
  return (
    <div className="h-20 sm:20-64 xl:h-20 2xl:h-20  ">
      <Carousel>
        <img
          className="w-10"
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
        <img
          className="w-10"
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
        <img
          className="w-10"
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Carousels;
