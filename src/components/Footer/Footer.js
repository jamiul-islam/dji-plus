import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLink = [
    { id: 1, text: "Monday to Sunday" },
    { id: 2, text: "7 am to 9 pm" },
    { id: 3, text: "45/A Harvard Street" },
    { id: 4, text: "Boston, MA 00001" },
    { id: 5, text: "24/7 open" },
    { id: 6, text: "Online Payments" },
    { id: 7, text: "Customer Support" },
    { id: 8, text: "Licensed Instructor" },
    { id: 9, text: "+ (880)1753-293119" },
    { id: 10, text: "+ (880)1936-591213" },
    { id: 11, text: "+ (880)1644-191518" },
    { id: 12, text: "+ (880)1853-293119" },
  ];
  return (
    <Fade bottom>
      <footer className="text-gray-600 poppins bg-gray-100">
        <div className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            {/* brand  */}
            <div className="flex items-center flex-grow">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="../../../assets/logo-black.png"
                  alt="logo"
                  className="w-12 h-12"
                />
                <h1
                  className={`text-3xl font-semibold text-gray-800 select-none font-logo`}
                >
                  plus
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Working Hours
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(0, 4).map((item) => (
                  <a
                    href="https://github.com/lucifer1112k"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    className="text-sm hover:underline"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Services
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(4, 8).map((item) => (
                  <a
                    href="https://github.com/lucifer1112k"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    className="text-sm hover:underline"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Contact
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(8, 12).map((item) => (
                  <a
                    href="https://github.com/lucifer1112k"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    className="text-sm hover:underline"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2021 Jamiul Islam
              <a
                href="https://github.com/lucifer1112k"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                || assignment 12 of programming hero
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
