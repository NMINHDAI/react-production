import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = ({ isMobile }) => {
  return (
    <footer className="flex flex-col mt-auto items-center px-4 pt-[70px] pb-[80px]  bg-black text-white font-playfair">
      <div className="flex flex-col md:flex-row md:gap-[10rem] md:mt-10 md:text-lg mr-8 md:mr-0 ">
        {/* <div className="mt-5 mb-[55px]">
          <p className="font-semibold text-[30px]">Mua hàng</p>
          <ul className="font-thin pt-3 font-lato">
            <li className="cursor-pointer pb-1 hover:text-gray-500">
              All Products
            </li>
            <li className="pb-1 list-item">New</li>
            <li className="pb-1 list-item">Best Sellers</li>
            <li className="pb-1 list-item">Áo thun</li>
            <li className="pb-1 list-item">Áo polo</li>
            <li className="pb-1 list-item">Áo sơ mi</li>
          </ul>
        </div> */}

        <div className="mt-5 mb-[55px]">
          <p className="font-semibold text-[30px]">Cửa hàng</p>
          <ul className="font-thin pt-3 font-lato">
            <li className="pt-4 list-item mb-6">
              Thành phố Hồ Chí Minh, Việt Nam
            </li>
            <li className="pb-1 list-item">Thứ hai-Chủ nhật: mở cửa 24/7</li>
            <li className="pb-1 list-item mb-6">Luôn luôn mở cửa</li>
            <li className="pb-1 list-item">Tel: 088-9999-060</li>
            <li className="pb-1 list-item">Email: info@dvenos.vn</li>
          </ul>
        </div>

        {/* <div className="mt-5 mb-[55px]">
          <p className="font-semibold text-[30px]">Chính sách</p>
          <ul className="font-thin pt-3 font-lato">
            <li className="pb-1 list-item">Shipping & Returns</li>
            <li className="pb-1 list-item">Store Policy</li>
            <li className="pb-1 list-item">Payment Methods</li>
            <li className="pb-1 list-item">FAQ</li>
          </ul>
        </div> */}

        <div className="mt-5 mb-[55px]">
          <p className="font-semibold text-[30px]">Chăm sóc khách hàng</p>
          <ul className="font-thin pt-3 font-lato">
            <li className="pb-1 list-item">Tel: 088-9999-060</li>
            <li className="pb-1 list-item">Email: info@dvenos.vn</li>
          </ul>
        </div>

        <div className="mt-5 mb-1">
          <p className="font-semibold text-[30px]">Follow us</p>
          <div className="flex items-center gap-2 mt-4">
            <BsFacebook className="list-item" size="25px" />
            <BsInstagram className="list-item" size="25px" />
            <FiTwitter className="list-item" size="25px" />
            <AiOutlineYoutube className="list-item" size="25px" />
          </div>
        </div>
        {isMobile && (
          <div className="mt-5 font-semibold font-lato">
            <p>© 2022 by D' VENOS ®</p>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="mt-10 pb-10 font-semibold font-lato">
          <p>© 2022 by D' VENOS ®</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
