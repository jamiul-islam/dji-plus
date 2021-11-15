import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  const service = [
    {
      id: 1,
      text: "LOW COST AT EVERY PRE-BOOKING",
      image: "../../../assets/smartph.png",
    },
    {
      id: 2,
      text: "EASY DOCUMENTATION",
      image: "../../../assets/travel.png",
    },
    {
      id: 3,
      text: "BEST CAMERA DRONE YET",
      image: "../../../assets/sleep.png",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            About DJI plus
          </h1>
          <div className="h-1 w-28 bg-gray-400 rounded-full"></div>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {/* left side image  */}
        <Fade left>
          <div className="flex justify-center lg:justify-start">
            <img src="../../../assets/about.png" alt="about" />
          </div>
        </Fade>
        {/* right side description  */}
        <Fade right>
          <div className="flex flex-col items-center lg:items-start space-y-3">
            {/* description  */}
            <p className="text-gray-500 text-sm font-primary">
              Since 2014, we’ve Visionary Intelligence. Elevated Imagination.
              DJI Mavic 3 is a powerful flagship camera drone equipped with a
              4/3 CMOS Hasselblad camera to facilitate professional-level
              imaging. Small but mighty, DJI Mini 2 features 4K videos, 4x Zoom,
              and stunning panoramas, allowing you to explore a whole new
              perspective. DJI Mavic 3 is a powerful flagship camera drone
              equipped with a 4/3 CMOS Hasselblad camera to facilitate
              professional-level imaging. It also offers omnidirectional
              obstacle sensing for a smooth flight experience, a max flight time
              of 46 minutes, and
            </p>

            {/* heading  */}
            <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">
              Why Choose Us
            </h1>

            {/* services  */}
            <div className="flex flex-col space-y-5 my-4">
              {service.map((item) => (
                <div className="flex items-center space-x-3" key={item.id}>
                  <img className="w-12" src={item.image} alt={item.text} />
                  <span className="w-36 text-gray-500 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
