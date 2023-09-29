import React, { useEffect, useState } from "react";
import Input from "./Input";
import { Button } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { parseCookies } from "nookies";

const Navbar = () => {
  const [userData, setUserData] = useState({});

  // parse cookie
  useEffect(() => {
    const timer = setTimeout(() => {
      const cookieData = parseCookies();
      const getUserData = JSON.parse(cookieData.userData);
      setUserData(getUserData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="x-sticky-navbar">
      <div className="d-flex gap-5 align-items-center">
        <div className="d-flex align-items-center">
          <Input placeholder="Cari Produk" />
          <button className="x-button-nav">
            <FiSearch />
          </button>
        </div>
        <AiTwotoneHeart size={20} className="x-navlink" />
        <AiOutlineShop size={20} className="x-navlink" />
        <span>Hi, {userData.first_name}</span>
        <FaUserAlt size={20} className="x-navlink" />
      </div>
    </nav>
  );
};

export default Navbar;
