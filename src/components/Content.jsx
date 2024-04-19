import React from "react";
import headphones from "./../assets/img/headphones.png";
const Content = () => {
  return (
    <div className="getCont">
      <div style={{ flex: "1" }} className="flex flex-col gap-2 lg:gap-10">
        <p className="cont-lead">Experience Pure Sound: Meet Our Headphones</p>
        <p className="cont-text">
          Built to Last, Enjoyed for a Lifetime, Transfar Your Listening
          Experience Today
        </p>
        <div className="btngroup">
          <button className="buy">Buy Now</button>
          <button className="explore">Explore</button>
        </div>
      </div>
      <div>
        <img src={headphones} className="headphoneImg" alt="headphones" />
      </div>
    </div>
  );
};

export default Content;
