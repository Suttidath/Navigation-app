import React from "react";
import {
  FaShoppingCart,
  FaHome,
  FaUserSecret,
  FaUserAlt,
} from "react-icons/fa";

const MenuData = [
  {
    title: "หน้าแรก",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "สมาชิก",
    path: "/member",
    icon: <FaUserAlt />,
  },
  {
    title: "สินค้า",
    path: "/product",
    icon: <FaShoppingCart />,
  },
  {
    title: "Admin",
    path: "/admin",
    icon: <FaUserSecret />,
  },
];
export default MenuData;
