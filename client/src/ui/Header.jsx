import React from "react";
import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../assets/index";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";

const navigation = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "shop",
    link: "/shop",
  },
  {
    title: "Offers",
    link: "/offers",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const HeaderLink = ({ item }) => {
  return (
    <Link
      to={item?.link}
      className="text-base text-black font-semibold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
    >
      {item?.title}
    </Link>
  );
};

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logoDark} alt="logoDark" className="w-28" />
        </Link>
        {/* Right nav */}
        <div>
          <div className="hidden md:inline-flex items-center gap-x-8">
            {navigation.map((item) => (
              <HeaderLink key={item.title} item={item} />
            ))}
            <Link to={"/cart"} className="relative">
              <img src={cartImg} alt="cartImg" className="w-6" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length ? productData?.length : 0}
              </span>
            </Link>
            <Link to="/login">
              <img
                className="w-8 h-8 rounded-full"
                src={
                  userInfo
                    ? userInfo?.image
                    : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="userLogo"
              />
            </Link>

            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                {userInfo.name}
              </p>
            )}
          </div>
          <button className="md:hidden">
            <FiMenu className="w-6 h-6 text-gray-950" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
