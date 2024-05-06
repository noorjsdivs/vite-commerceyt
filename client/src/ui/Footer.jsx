import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const socialLinksArray = [
  { name: "github", icon: <ImGithub /> },
  { name: "youbue", icon: <FaYoutube /> },
  { name: "facebook", icon: <FaFacebookF /> },
  { name: "twitter", icon: <FaTwitter /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-3 text-base text-gray-400">
      {socialLinksArray.map((item) => (
        <span
          key={item?.name}
          className="p-2 border border-gray-700 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
        >
          {item?.icon}
        </span>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© ReactBD.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />

          <SocialLinks />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>13th Street, New York</p>
            <p>Mobile: +100 12356758</p>
            <p>Phone: +100 20155566</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
