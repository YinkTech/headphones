import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import logo from "./../assets/img/headphonelogo.png";
import x from "./../assets/img/x.svg";
import facebook from "./../assets/img/facebook.svg";
import insta from "./../assets/img/insta.svg";

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between ">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="nav-item flex items-center gap-[32px] capitalize nav-items">
        <div className="">home</div>
        <div> about us</div>
        <div>Testimonials</div>
        <div>contact up</div>
      </div>

      <div className="nav-icon flex gap-[10px] lg:gap-[24px]  items-center">
        <img src={insta} alt="insta" />
        <img src={facebook} alt="facebook" />
        <img src={x} alt="x" />
        <Hamburger toggled={isOpen}  toggle={setOpen} />
      </div>
    </div>
  );
};

export default Nav;
