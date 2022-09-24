import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const NavBar = ({ isMobile }) => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className="flex items-center justify-center  gap-2 bg-black px-3 py-3  sticky">
      <div className="flex text-white cursor-pointer font-mostra ml-[1.18rem]">
        <div className="mr-1 flex">
          <a
            className="text-[45px] tracking-[0.15em] font-mostra logo"
            href="https://www.dvenos.vn/"
          >
            D' VENOS{" "}
          </a>
          <div className="text-base text-[20px] pt-[1.7rem] font-lato">®</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
