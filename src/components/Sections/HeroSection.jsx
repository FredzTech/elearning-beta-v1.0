import React from "react";
import { Navbar, NavbarSmall, PageTitle } from "../../components";
const HeroSection = ({ isNavOpen, showNavbar, hideNavbar }) => {
  return (
    <div className="homepage w-full h-[90vh]">
      <div className="relative flex-row-centered w-full h-full bg-opacity-10 bg-slate-900 ">
        <Navbar
          isNavOpen={isNavOpen}
          showNavbar={showNavbar}
          hideNavbar={hideNavbar}
        />
        <NavbarSmall isNavOpen={isNavOpen} hideNavbar={hideNavbar} />
        <div className="text-white w-full tablet:w-3/5 text-center flex-col-centered">
          <p className="text-6xl uppercase font-bold font-sans">
            A better way to learn
          </p>
          <p className="text-md font-extralight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quo labore facere, totam delectus quidem eligendi nihil aliquid
            dolor esse deleniti? Sequi nemo dolore asperiores omnis natus,
            repudiandae,
          </p>
          <div className="absolute h-7  bg-white w-full bottom-0 rounded-t-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
