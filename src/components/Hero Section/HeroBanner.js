import React from "react";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Flip left>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
            the best drone <br />
            solution for pros
          </h1>
          <p className="my-2 font-primary text-gray-400 text-center text-sm w-96 select-none">
            DJI technology empowers us to see the future of possible. Learn
            about our consumer drones like DJI Air 2S, DJI FPV, Mavic, and
            Phantom.
          </p>
          <Link to="/explore">
            <button className="btn-primary-2 w-36 mt-5">Explore More</button>
          </Link>
        </div>
      </Flip>
    </section>
  );
};

export default HeroBanner;
